"use client";
import React, { useEffect, useState } from "react";
import styles from "./write.module.css";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.bubble.css";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { app } from "@/utils/firebase";
import SafeImage from "../components/ui/SafeImage";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const WriteBlog = () => {
  const { status } = useSession();
  const router = useRouter();
  const [file, setFile] = useState(null);
  const [open, setOpen] = useState(false);
  const [media, setMedia] = useState("");
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const [catSlug, setCatSlug] = useState("style");
  const [isUploading, setIsUploading] = useState(false);
  const [isPublishing, setIsPublishing] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  // Simplified upload function - removed Firebase Auth requirement
  useEffect(() => {
    const upload = async () => {
      if (!file) return;

      setIsUploading(true);
      setUploadProgress(0);

      try {
        const storage = getStorage(app);
        const name = new Date().getTime() + "_" + file.name;
        const storageRef = ref(storage, `blog-images/${name}`);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setUploadProgress(Math.round(progress));
            console.log("Upload is " + Math.round(progress) + "% done");
          },
          (error) => {
            console.error("Upload failed:", error);
            alert("Upload failed: " + error.message);
            setIsUploading(false);
            setUploadProgress(0);
          },
          async () => {
            try {
              const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
              console.log("File available at", downloadURL);
              setMedia(downloadURL);
              setIsUploading(false);
              setUploadProgress(0);
            } catch (error) {
              console.error("Error getting download URL:", error);
              alert("Error getting download URL: " + error.message);
              setIsUploading(false);
              setUploadProgress(0);
            }
          }
        );
      } catch (error) {
        console.error("Upload error:", error);
        alert("Upload error: " + error.message);
        setIsUploading(false);
        setUploadProgress(0);
      }
    };

    if (file) {
      upload();
    }
  }, [file]);

  if (status === "loading") {
    return (
      <div className={styles.container}>
        <div style={{ textAlign: "center", padding: "2rem" }}>
          <div className={styles.loadingSpinner}></div>
          Loading...
        </div>
      </div>
    );
  }

  if (status === "unauthenticated") {
    router.push("/");
    return null;
  }

  const slugify = (str) =>
    str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");

  const handleSubmit = async () => {
    if (!title.trim()) {
      alert("Please enter a title");
      return;
    }

    setIsPublishing(true);

    try {
      const res = await fetch("/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          desc: value,
          img: media,
          slug: slugify(title),
          catSlug: catSlug,
        }),
      });

      const data = await res.json();

      if (res.status === 200) {
        router.push(`/posts/${data.slug}`);
      } else {
        throw new Error(data.message || "Failed to publish post");
      }
    } catch (error) {
      console.error("Error publishing post:", error);
      alert("Failed to publish post: " + error.message);
    } finally {
      setIsPublishing(false);
    }
  };

  const handleFileSelect = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      // Validate file type
      if (!selectedFile.type.startsWith("image/")) {
        alert("Please select an image file");
        return;
      }

      // Validate file size (5MB limit)
      if (selectedFile.size > 5 * 1024 * 1024) {
        alert("File size should be less than 5MB");
        return;
      }

      console.log("File selected:", selectedFile.name, selectedFile.type);
      setFile(selectedFile);
    }
  };

  const categories = [
    { value: "style", label: "Style" },
    { value: "fashion", label: "Fashion" },
    { value: "food", label: "Food" },
    { value: "culture", label: "Culture" },
    { value: "travel", label: "Travel" },
    { value: "coding", label: "Coding" },
    { value: "technology", label: "Technology" },
    { value: "lifestyle", label: "Lifestyle" },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Write New Post</h1>
      </div>

      <textarea
        className={styles.input}
        placeholder="Enter your title..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        rows={1}
        style={{ height: "auto" }}
        onInput={(e) => {
          e.target.style.height = "auto";
          e.target.style.height = e.target.scrollHeight + "px";
        }}
      />

      <div className={styles.controls}>
        <select
          className={styles.select}
          value={catSlug}
          onChange={(e) => setCatSlug(e.target.value)}
        >
          {categories.map((cat) => (
            <option key={cat.value} value={cat.value}>
              {cat.label}
            </option>
          ))}
        </select>

        <div className={styles.mediaControls}>
          <button
            className={`${styles.toggleButton} ${open ? styles.active : ""}`}
            onClick={() => setOpen(!open)}
            title="Add media"
          >
            +
          </button>
        </div>
      </div>

      {open && (
        <div className={styles.mediaPanel}>
          <input
            type="file"
            id="image"
            onChange={handleFileSelect}
            style={{ display: "none" }}
            accept="image/*"
          />
          <button className={styles.addButton} title="Add image">
            <label
              htmlFor="image"
              style={{
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
              }}
            >
              <SafeImage
                src="/images/gallery.png"
                alt="gallery"
                height={20}
                width={20}
                fallbackSrc="/images/logo.png"
              />
            </label>
          </button>
          <button className={styles.addButton} title="Add code block">
            <SafeImage
              src="/images/coding.png"
              alt="coding"
              height={20}
              width={20}
              fallbackSrc="/images/logo.png"
            />
          </button>
          <button className={styles.addButton} title="Add video">
            <SafeImage
              src="/images/video.png"
              alt="video"
              height={20}
              width={20}
              fallbackSrc="/images/logo.png"
            />
          </button>
        </div>
      )}

      {isUploading && (
        <div className={styles.mediaPreview}>
          <div>Uploading image... {uploadProgress}%</div>
          <div
            style={{
              width: "100%",
              height: "4px",
              backgroundColor: "var(--border-color)",
              borderRadius: "2px",
              marginTop: "0.5rem",
            }}
          >
            <div
              style={{
                width: `${uploadProgress}%`,
                height: "100%",
                backgroundColor: "var(--accent-color)",
                borderRadius: "2px",
                transition: "width 0.3s ease",
              }}
            ></div>
          </div>
        </div>
      )}

      {media && !isUploading && (
        <div className={styles.mediaPreview}>
          <img
            src={media}
            alt="Uploaded"
            style={{ maxHeight: "200px", maxWidth: "100%" }}
          />
          <button
            onClick={() => setMedia("")}
            style={{ marginTop: "0.5rem", padding: "0.25rem 0.5rem" }}
          >
            Remove Image
          </button>
        </div>
      )}

      <div className={styles.editor}>
        <ReactQuill
          theme="bubble"
          value={value}
          onChange={setValue}
          placeholder="Tell your story..."
          className={styles.textArea}
          modules={{
            toolbar: [
              ["bold", "italic", "underline"],
              ["blockquote", "code-block"],
              [{ list: "ordered" }, { list: "bullet" }],
              ["link"],
              ["clean"],
            ],
          }}
        />
      </div>

      <div className={styles.actions}>
        <button className={styles.saveButton}>Save Draft</button>
        <button
          className={styles.publishButton}
          onClick={handleSubmit}
          disabled={isPublishing || !title.trim()}
        >
          {isPublishing && <span className={styles.loadingSpinner}></span>}
          {isPublishing ? "Publishing..." : "Publish"}
        </button>
      </div>
    </div>
  );
};

export default WriteBlog;
