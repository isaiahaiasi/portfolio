import Link from "next/link";
import React from "react";

import styles from "./Navbar.module.css";

const pages = [
  ["About Me", "/"],
  ["Projects", "/projects"],
  ["Contact", "/contact"],
];

const Navbar = () => {
  return (
    <nav className={styles.mainNav}>
      <ul className={styles.navList}>
        {pages.map(([pageName, path]) => (
          <li key={pageName}>
            <Link href={path}>{pageName}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
