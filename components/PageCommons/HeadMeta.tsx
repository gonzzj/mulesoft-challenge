import Head from 'next/head';

interface HeadMetaProps {
  title?: string
  metaDescription?: string
}

const HeadMeta: React.FC<HeadMetaProps> = ({ title, metaDescription }) => (
  <Head>
    <title>{title}</title>
    <meta name="description" content={metaDescription} />
    <link rel="icon" href="/favicon.ico" />
  </Head>  
);

HeadMeta.defaultProps = { 
  title: "Mulesoft Graph Challenge",
  metaDescription: "Generated by create next app"
};

export default HeadMeta;