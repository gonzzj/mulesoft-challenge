import type { NextPage } from 'next'
import HeadMeta from '../components/PageCommons/HeadMeta';
import styles from '../styles/Home.module.scss'
import Footer from '../components/PageCommons/Footer';
import Title from '../components/Title';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import InputDependencies from '../components/InputDependencies';

const Home: NextPage = () => (
  <div className={styles.container}>
    <HeadMeta />

    <main className={styles.main}>
      <Container maxWidth="lg">
        <Title label={'The Dependencies Graph'} description={'Get started by editing'} />

        <Grid container spacing={2}>
          <Grid item xs={4}>
            <InputDependencies />
          </Grid>
          <Grid item xs={8}>
            xs=8
          </Grid>
        </Grid>
      </Container>
    </main>

    <Footer />
  </div>
);

export default Home;
