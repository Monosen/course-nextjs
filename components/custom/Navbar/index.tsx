import Link from "next/link";
import { ActiveLink } from "./ActiveLink";

import styles from "./Navbar.module.css";

export default function Navbar() {
  const menuItems = [
    {
      text: "Home",
      href: "/",
    },
    {
      text: "About",
      href: "/about",
    },
    {
      text: "Contact",
      href: "/contact",
    },
    {
      text: "Pricing",
      href: "/pricing",
    },
  ];

  return (
    <nav className={styles["menu-container"]}>
      {menuItems.map(({ text, href }) => (
        <ActiveLink text={text} href={href} />
      ))}
    </nav>
  );
}
