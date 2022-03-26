import type { NextPage } from 'next'
import HeadMeta from '../components/PageCommons/HeadMeta';
import styles from '../styles/Home.module.scss'
import Footer from '../components/PageCommons/Footer';

const Home: NextPage = () => (
  <div className={styles.container}>
    <HeadMeta />

    <main className={styles.main}>
      <h1 className={styles.title}>
        The Dependencies Graph
      </h1>

      <p className={styles.description}>
        Get started by editing{' '}
        <code className={styles.code}>pages/index.tsx</code>
      </p>
    </main>

    <Footer />
  </div>
);

export default Home;
