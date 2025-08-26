import type {ReactNode} from 'react';
import styles from './styles.module.css';

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.banner}>
      <div className="container">
        <div className="text--center">
          <h2>Welcome to our curated tools collection</h2>
          <p>This is a simple banner with useful information about the site.</p>
        </div>
      </div>
    </section>
  );
}
