import Link from "next/link";
import { FaTwitter, FaLinkedin } from "react-icons/fa";
import footerStyles from "@/styles/components/Footer.module.scss";

export default function Footer() {
  return (
    <footer className={footerStyles.footer}>
      <div className={footerStyles.footer__meta}>
        <span className={footerStyles.logo}>Devgigs</span>
        Copyright &copy; {new Date().getFullYear()} Weekend Labs, LLC. All
        Rights Reserved. Made with ❤️ and ☕ in Boston.
      </div>
    </footer>
  );
}
