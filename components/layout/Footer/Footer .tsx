import styles from './Footer.module.css';
import FooterLinkList from './FooterLinkList';
import { footerLinks } from '../../../config/footerLinks';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <nav className={styles.nav}>
        <FooterLinkList links={footerLinks.topRow} className={styles.topRow} />
        <FooterLinkList links={footerLinks.bottomRow} className={styles.bottomRow} />
      </nav>
      <div className={styles.copyright}>©test</div>
    </footer>
  );
}
