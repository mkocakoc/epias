import React from 'react';
import PropTypes from 'prop-types';
import styles from './DummyComponent.module.css';

const DummyComponent = () => (
  <div className={styles.DummyComponent}>
    ** Lorem ipsum **
  </div>
);

DummyComponent.propTypes = {};

DummyComponent.defaultProps = {};

export default DummyComponent;
