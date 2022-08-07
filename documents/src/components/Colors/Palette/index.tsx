import React from 'react';

import styles from './styles.module.css';

type Props = {
  name: string;
  color: object;
};

export default function Palette(props: Props): JSX.Element {
  return (
    <div className="card">
      <div className="card__header">
        <h3>{props.name}</h3>
      </div>

      <div className="card__body">
        <div className="container-fluid">
          {Object.keys(props.color).map((key) => (
            <div className="row row--no-gutters" key={key}>
              <div className="col col--5">
                <div className={styles.colorName}>
                  <div>{key}</div>
                  <div
                    style={{
                      fontSize: '0.9em',
                      color: 'var(--ifm-color-secondary-darkest)',
                    }}
                  >
                    {props.color[key]}
                  </div>
                </div>
              </div>
              <div className="col col--7">
                <div
                  className={styles.colorValue}
                  style={{
                    backgroundColor:
                      typeof props.color[key] === 'string' && props.color[key],
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
