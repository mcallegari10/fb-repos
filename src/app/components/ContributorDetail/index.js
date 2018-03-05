import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.scss';

const ContributorDetail = ({ contributor }) => (
  <a href={contributor.url} target="_blank" className={styles.container}>
    <img src={contributor.avatar_url} className={styles.avatar} alt={contributor.name} />
    <div className="column">
      <h4 className="text-normal m-bottom-2">{contributor.login}</h4>
      <span className="text-small">Contributions: {contributor.contributions}</span>
    </div>
  </a>
);

ContributorDetail.propTypes = {
  contributor: PropTypes.object
};

export default ContributorDetail;
