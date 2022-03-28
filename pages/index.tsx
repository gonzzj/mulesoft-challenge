import type { NextPage } from 'next'
import { useState, useEffect } from 'react';
import HeadMeta from '../components/PageCommons/HeadMeta';
import styles from '../styles/Home.module.scss'
import Footer from '../components/PageCommons/Footer';
import Title from '../components/Title';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import InputDependencies from '../components/InputDependencies';
import NetworkDependencies from '../components/NetworkDependencies';
import { Network } from '../types/dependency';

const Home: NextPage = () => {
  const [data, setData] = useState<Network>();

  return (
    <div className={styles.container}>
      <HeadMeta />

      <main className={styles.main}>
        <Container maxWidth="lg">
          <Title label={'The Dependencies Graph'} description={'Add dependency commands in order to create the exact graph in the right square'} />

          <Grid container spacing={2}>
            <Grid item xs={4}>
              <InputDependencies setData={setData} />
            </Grid>
            <Grid item xs={8}>
              <NetworkDependencies data={data} />
            </Grid>
          </Grid>
        </Container>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
