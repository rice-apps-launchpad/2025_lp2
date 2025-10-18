import Link from 'next/link';
import styles from '@/app/page.module.css';

const styless = {
  link: {
    padding: "8px",
    border: "solid 2px black",
    borderRadius: "8px"
  }
}

export default function Home() {
  return (
    <div className={styles.page}>
      <Link style={styless.link} href="/no-components">No Components</Link>
      <Link style={styless.link} href="/using-components">Using Components</Link>
      <Link style={styless.link} href="/with-tailwind">With Tailwind</Link>
      <Link style={styless.link} href="/with-style">With Style</Link>
    </div>
  );
}
