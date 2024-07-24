import Image from "next/image";
import styles from "./page.module.css";
import Header from "./_header/Header";
import Features from "./_features/Features";
import Motivation from "./_motivation/Motivation";
import Clients from "./_clients/Clients";

export default function Home() {
  return (
    <>
      <Header />
      <Features />
      <Clients />
      <Motivation />
    </>
  )
}
