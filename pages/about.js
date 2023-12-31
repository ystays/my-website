import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function About({ allPostsData }) {
  return (
    <Layout about>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[Hi.
          I'm a 2023 Computer Science graduate from UCLA.]</p>
        <p>
          (This is my personal website. Check out {' '}
          <a href="https://linkedin.com/in/yi-sheng-tay">my LinkedIn page</a>.)
        </p>
        <small>
          Senior Computer Science major at UCLA, with an interest in backend development, AI and digital humanities. Previously interned at Intel and Keysight, and has lately been exploring building web apps with the MEAN stack. 
          <br/>
          Searching for a new grad SWE role. Looking for stimulating, collaborative work with a supportive team.
        </small>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
        </ul>
      </section>
    </Layout>
  );
}
