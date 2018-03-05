import React, { Component } from 'react';
import { connect } from 'react-redux';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { NavLink } from 'redux-first-router-link';

import { setRepos } from '~store/reposReducer/actions';
import { getFacebookRepos } from '~services/repoService';

import styles from './styles.scss';

class Sidebar extends Component {
  componentWillMount() {
    getFacebookRepos().then(response => this.props.dispatch(setRepos(response.data)));
  }

  render() {
    const repos = this.props.repos.sortBy(repo => repo.get('watchers_count'));
    return (
      <div className={styles.container}>
        <h1 className="text-normal m-bottom-2">Repositories</h1>
        {repos.map(repo => (
          <NavLink
            to={`/repo/${repo.get('name')}`}
            key={repo.get('id')}
            className="text-small m-bottom-1"
            activeClassName="blue bold"
          >
            {repo.get('name')}
          </NavLink>
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
