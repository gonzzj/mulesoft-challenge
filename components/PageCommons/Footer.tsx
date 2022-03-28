import styles from '../../styles/Footer.module.scss';

const Footer: React.FC = () => (
  <footer className={styles.footer}>
    <a
      href="https://github.com/gonzzj"
      target="_blank"
      rel="noopener noreferrer"
    >
      Created by Gonzalo Jusid
    </a>
  </footer>
);

export default Footer;