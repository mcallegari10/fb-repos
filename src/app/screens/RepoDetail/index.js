import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getRepo, getContributors } from '~services/repoService';

import RepoDetailLayout from './layout';

class RepoDetail extends Component {
  state = {
    repo: null,
    contributors: []
  };

  componentWillMount() {
    getRepo(this.props.repo).then(response =>
      this.setState({ repo: response.data }, () => this.getContributors())
    );
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.repo !== this.props.repo) {
      getRepo(nextProps.repo).then(response =>
        this.setState({ repo: response.data }, () => this.getContributors())
      );
    }
  }

  getContributors = () =>
    getContributors(this.props.repo).then(response => this.setState({ contributors: response.data }));

  render() {
    const { repo, contributors } = this.state;
    return repo && <RepoDetailLayout repo={repo} contributors={contributors} />;
  }
}

RepoDetail.propTypes = {
  repo: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  repo: state.location.payload.name
});

export default connect(mapStateToProps)(RepoDetail);
