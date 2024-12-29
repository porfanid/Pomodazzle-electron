import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <header className={clsx('hero hero--primary', styles.heroBanner)}>
            <div className="container">
                <Heading as="h1" className="hero__title">
                    {siteConfig.title}
                </Heading>
                <p className="hero__subtitle">{siteConfig.tagline}</p>
                <div className={styles.buttons}>
                    <div className={styles.button_container}>
                        <Link
                            className="button button--secondary button--lg"
                            to="/docs/intro">
                            Docusaurus Tutorial - 5min ⏱️
                        </Link>
                        <Link
                            className="button button--secondary button--lg"
                            to="https://github.com/porfanid/Pomodazzle-electron/releases/latest">
                            Download Pomodazzle
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}


export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="Pomodazzle - The ultimate pomodoro timer">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
