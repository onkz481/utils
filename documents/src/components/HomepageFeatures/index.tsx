import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

// docusaurus
import Link from '@docusaurus/Link';

// i18n
import Translate from '@docusaurus/Translate';

type FeatureItem = {
  title: string;
  Png: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Conditionals',
    Png: require('@site/static/img/utils/IS.png').default,
    description: <Translate>A collection of simple IS functions.</Translate>,
  },
];

function Feature({ title, Png, description }: FeatureItem) {
  return (
    <Link className={clsx('col col--6')} to="/docs/category/utils-is">
      <div className="text--center">
        <img src={Png} style={{ maxWidth: '384px' }} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </Link>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row" style={{ justifyContent: 'center' }}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
