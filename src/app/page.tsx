import React from 'react';
import Link from "next/link";
import styles from "./page.module.css";

export default function Page() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Link href={'/no-components'}>No components</Link>
        <Link href={'/using-components'}>Using components</Link>
      </main>
    </div>
  );
}
