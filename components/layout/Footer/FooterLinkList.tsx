import styles from './Footer.module.css';

interface FooterLinkListProps {
  links: { label: string; href: string }[];
  className?: string;
}

export default function FooterLinkList({ links, className }: FooterLinkListProps) {
  return (
    <ul className={className}>
      {links.map((link) => (
        <li key={link.label}>
          <a href={link.href} className={styles.link}>
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  );
}
