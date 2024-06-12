import Image from "next/image";
import Link from "next/link";
import Featured from "./components/Featured";
import Category from "./components/Category";
import CardList from "./components/CardList";
import Menu from "./components/Menu";

export default function Home() {
  return (
   <div className="px-4 py-3">

      <Featured/>
      <Category/>

      <div className="flex justify-between">
        <CardList/>
        <Menu/>
      </div>
   </div>
  );
}
