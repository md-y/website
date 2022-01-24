import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/about/overview"
          >
            Learn about Project Nebula
          </Link>
        </div>
      </div>
    </header>
  );
}

/**
 * The landing page for the website.
 */
export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  // In useEffect hook to support window references
  React.useEffect(() => {
    /* @ts-ignore */
    if (window.netlifyIdentity) {
      /* @ts-ignore */
      window.netlifyIdentity.on('init', (user) => {
        if (!user) {
          /* @ts-ignore */
          window.netlifyIdentity.on('login', () => {
            document.location.href = '/admin/';
          });
        }
      });
    }
  }, []);
  return (
    <Layout title={`Home`} description={siteConfig.tagline}>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
