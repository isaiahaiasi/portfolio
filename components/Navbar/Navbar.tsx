import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

import styles from "./Navbar.module.scss";

const pages = [
  ["About Me", "/"],
  ["Projects", "/projects"],
  ["Contact", "/contact"],
];

const Navbar = () => {
  const { pathname } = useRouter();

  return (
    <nav className={styles.mainNav}>
      <ul className={styles.navList}>
        {pages.map(([pageName, path]) => (
          <li key={pageName} data-active={pathname === path}>
            <Link href={path}>{pageName}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
