import React, { Component } from 'react';
import { connect } from 'react-redux';
import ImmutablePropTypes from 'react-immutable-proptypes';
import Link from 'redux-first-router-link';

import styles from './styles.scss';

class Sidebar extends Component {
  render() {
    const { repos } = this.props;
    return (
      <div className={styles.container}>
        <h1 className="text-normal m-bottom-2">Repositories</h1>
        {repos.map(repo => (
          <Link to="/" key={repo.get('id')} className="text-small m-bottom-1">
            {repo.get('name')}
          </Link>
        ))}
      </div>
    );
  }
}

Sidebar.propTypes = {
  repos: ImmutablePropTypes.list
};

const mapStateToProps = state => ({
  repos: state.repos
});

export default connect(mapStateToProps)(Sidebar);
