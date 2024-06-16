import Image from "next/image";
import Link from "next/link";
import styles from './homepage.module.css'
import Featured from "./components/featured/Featured";
import Category from "./components/category/Category";
import CardList from "./components/cardList/CardList";
import Menu from "./components/menu/Menu";

export default function Home() {
  return (
   <div>

      <Featured/>
      <Category/>

      <div className={styles.container}>
        <CardList/>
        <Menu/>
      </div>
   </div>
  );
}
