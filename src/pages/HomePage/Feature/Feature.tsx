import React from 'react';

type FeatureProps = {
  title: string;
};
function Feature({ title }: FeatureProps) {
  return (
    <div className="card__feature">
      <img alt="dec" src="https://preview.cruip.com/solid/dist/images/feature-icon-01.svg" />
      <h2>{title}</h2>
      <p>
        Fermentum posuere urna nec tincidunt praesent semper feugiat nibh. A arcu cursus vitae congue mauris. Nam at
        lectus urna duis convallis. Mauris rhoncus aenean vel elit scelerisque mauris.
      </p>
    </div>
  );
}

export default Feature;
