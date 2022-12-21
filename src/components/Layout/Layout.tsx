import Link from "next/link";
import Head from "next/head";

import styles from "./Layout.module.css";

type Layout = {
  children: any;
};

const Layout = ({ children }: Layout) => {
  return (
    <div>
      <Head>
        <title>Fit Log</title>
        <meta
          name="Tool to visually log my exercise progress/activity"
          content="Generated by create next app"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className={styles.navbar}>
        <Link href="/">
          Home
        </Link>
        <Link href="/activity">Activity</Link>
        <Link href="/gyms">Gyms</Link>
        <Link href="/achievements">Achieve<span>ment</span>s</Link>
      </nav>
      {children}
    </div>
  );
};

export default Layout;
