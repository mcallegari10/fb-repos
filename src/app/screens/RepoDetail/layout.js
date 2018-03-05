import React from 'react';
import PropTypes from 'prop-types';

import ContributorDetail from '~components/ContributorDetail';

import styles from './styles.scss';

const RepoDetailLayout = ({ repo, contributors }) => (
  <div className={styles.container}>
    <h1 className="title m-bottom-2">{repo.name}</h1>
    <h4 className="subtitle m-bottom-1">{repo.description}</h4>
    <div className="row justify-sb m-bottom-2">
      <span className="text-normal">Stars: {repo.stargazers_count}</span>
      <span className="text-normal">Watchers: {repo.watchers_count}</span>
      <span className="text-normal">Forks: {repo.forks_count}</span>
      <span className="text-normal">License: {repo.license.spdx_id}</span>
    </div>
    <div className="column">
      <h2 className="title m-bottom-2">Contributors</h2>
      <div className={styles.contributorsContainer}>
        {contributors.map(contributor => (
          <ContributorDetail key={contributor.id} contributor={contributor} />
        ))}
      </div>
    </div>
  </div>
);

RepoDetailLayout.propTypes = {
  repo: PropTypes.object,
  contributors: PropTypes.arrayOf(PropTypes.object)
};

export default RepoDetailLayout;
