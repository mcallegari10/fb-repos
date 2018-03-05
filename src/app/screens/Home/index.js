import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setRepos } from '~store/reposReducer/actions';
import { getFacebookRepos } from '~services/repoService';

import styles from './styles.scss';

class Home extends Component {
  componentWillMount() {
    getFacebookRepos().then(response => this.props.dispatch(setRepos(response.data)));
  }

  render() {
    return (
      <div className={styles.container}>
        <h1 className="title">Facebook Repositories</h1>
        <h5 className="subtitle">Please select a repository to see it's details</h5>
      </div>
    );
  }
}

export default connect()(Home);
