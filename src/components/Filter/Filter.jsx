import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './Filter.module.css';

class Filter extends Component {
  render() {
    return (
      <div className={styles.filter}>
        <label htmlFor="filter">
          Find contacts by name
          <input
            id="filter"
            type="text"
            value={this.props.value}
            onChange={this.props.onChange}
          />
        </label>
      </div>
    );
  }
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
