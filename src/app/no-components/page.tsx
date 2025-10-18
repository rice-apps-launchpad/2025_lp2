import Image from "next/image";
import styles from "./page.module.css";

export default function Page() {
  return (
    <div className={styles.page}>
        <div className={styles.card}>
            <Image src={"/frog.png"} alt={"A frog"} width={200} height={200}/>
            Omar Siman
        </div>
        <div className={styles.card}>
            <Image src={"/pumpkin.png"} alt={"A pumpkin"} width={200} height={200}/>
            Gabriel Ong
        </div>
    </div>
  );
}