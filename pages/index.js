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

export default function Home({ allPostsData }) {
  return (
    <Layout home>
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
          "Years have gone by and I've finally learned to accept myself for who I am: a beggar for good football. I go about the world, hand outstretched, and in the stadiums I plead: 'A pretty move, for the love of God.' 
          <br></br>
          And when good football happens, I give thanks for the miracle and I don't give a damn which team or country performs it." -Galeano
        </small>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
            <Link href={`/posts/${id}`}>{title}</Link>
            <br />
            <small className={utilStyles.lightText}>
              <Date dateString={date} />
            </small>
          </li>          
          ))
          }
        </ul>
      </section>
    </Layout>
  );
}
