import { useState, useEffect, useContext } from "react";
import Link from "next/link";
import styles from "./Hamburger.module.css";

export default function Hamburger({ menu }) {
  return (
    <div className={styles.navigation}>
      <input
        type="checkbox"
        className={styles.navigation__checkbox}
        id="nav-toggle"
      />
      <label htmlFor="nav-toggle" className={styles.navigation__button}>
        <span
          className={styles.navigation__icon}
          aria-label="toggle navigation menu"
        ></span>
      </label>
      <div className={styles.navigation__background}></div>

      <nav className={styles.navigation__nav} role="navigation">
        <ul className={styles.navigation__list}>
          {menu.map((m) => (
            <li key={m.id} className={styles.navigation__item}>
              <span href="#">
                <Link href={m.link} className={styles.navigation__link}>
                  <span className="">{m.text}</span>
                </Link>
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
