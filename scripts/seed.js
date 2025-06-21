const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Starting database seeding...");

  // Create sample categories
  const categories = [
    {
      slug: "style",
      title: "Style",
      img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      slug: "fashion",
      title: "Fashion",
      img: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      slug: "food",
      title: "Food",
      img: "https://images.unsplash.com/photo-1504674900241-4197bc29e44b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      slug: "culture",
      title: "Culture",
      img: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3VsdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      slug: "travel",
      title: "Travel",
      img: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhdmVsfGVufDB8fDB8fHww",
    },
    {
      slug: "coding",
      title: "Coding",
      img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kaW5nfGVufDB8fDB8fHww",
    },
  ];

  console.log("📝 Creating categories...");
  for (const category of categories) {
    await prisma.category.upsert({
      where: { slug: category.slug },
      update: {},
      create: category,
    });
  }

  // Create a sample user
  console.log("👤 Creating sample user...");
  const sampleUser = await prisma.user.upsert({
    where: { email: "demo@example.com" },
    update: {},
    create: {
      email: "demo@example.com",
      name: "Demo User",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
    },
  });

  // Create sample posts
  const posts = [
    {
      title: "The Future of Web Development",
      desc: "Web development is constantly evolving with new technologies and frameworks emerging every day. From React to Next.js, the landscape is changing rapidly. Modern web development focuses on performance, accessibility, and user experience. Developers need to stay updated with the latest trends and best practices.",
      img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kaW5nfGVufDB8fDB8fHww",
      slug: "future-of-web-development",
      catSlug: "coding",
      userId: sampleUser.id,
    },
    {
      title: "Sustainable Fashion Trends",
      desc: "Sustainable fashion is becoming increasingly important as consumers become more conscious about their environmental impact. From eco-friendly materials to ethical manufacturing processes, the fashion industry is undergoing a green revolution.",
      img: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D",
      slug: "sustainable-fashion-trends",
      catSlug: "fashion",
      userId: sampleUser.id,
    },
    {
      title: "Exploring World Cuisines",
      desc: "Food is not just about sustenance; it's about culture, tradition, and connection. Every cuisine tells a story of its people and their history. From street food to fine dining, exploring different cuisines opens up new worlds of flavor and experience.",
      img: "https://images.unsplash.com/photo-1504674900241-4197bc29e44b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D",
      slug: "exploring-world-cuisines",
      catSlug: "food",
      userId: sampleUser.id,
    },
    {
      title: "Hidden Gems: Off-the-Beaten-Path Travel",
      desc: "While popular tourist destinations are amazing, there's something special about discovering hidden gems that few people know about. These off-the-beaten-path locations offer authentic experiences and unforgettable memories.",
      img: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhdmVsfGVufDB8fDB8fHww",
      slug: "hidden-gems-travel",
      catSlug: "travel",
      userId: sampleUser.id,
    },
  ];

  console.log("📄 Creating sample posts...");
  for (const post of posts) {
    await prisma.post.upsert({
      where: { slug: post.slug },
      update: {},
      create: post,
    });
  }

  // Create sample comments
  const comments = [
    {
      desc: "Great article! Really insightful content about web development trends.",
      postSlug: "future-of-web-development",
      userId: sampleUser.id,
    },
    {
      desc: "I love sustainable fashion! This is exactly what the industry needs.",
      postSlug: "sustainable-fashion-trends",
      userId: sampleUser.id,
    },
    {
      desc: "Food is definitely a window into different cultures. Great read!",
      postSlug: "exploring-world-cuisines",
      userId: sampleUser.id,
    },
  ];

  console.log("💬 Creating sample comments...");
  for (const comment of comments) {
    await prisma.comment.create({
      data: comment,
    });
  }

  console.log("✅ Database seeding completed successfully!");
  console.log(`📊 Created ${categories.length} categories`);
  console.log(`📄 Created ${posts.length} posts`);
  console.log(`💬 Created ${comments.length} comments`);
  console.log(`👤 Created 1 sample user (demo@example.com)`);
}

main()
  .catch((e) => {
    console.error("❌ Error during seeding:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
