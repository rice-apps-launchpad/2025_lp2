import React from 'react';
import styles from "@/app/using-components/page.module.css";
import Image from "next/image";

type CardProps = {
  name: string;
  imagePath: string;
};

export default function Card(props: CardProps) {
  return (
    <div className={styles.card}>
      <Image src={props.imagePath} alt={"An image"} width={200} height={200}/>
      {props.name}
    </div>
  );
}
