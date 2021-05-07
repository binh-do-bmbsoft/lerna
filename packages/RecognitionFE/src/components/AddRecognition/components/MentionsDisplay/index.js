//@ts-check
import React from 'react';
import styles from './styles.module.scss';
import PropTypes from 'prop-types';

const MentionDisplay = props => {
  const { display } = props;
  return <span className={styles.mention}>{display}</span>;
};

MentionDisplay.propTypes = {
  display: PropTypes.string.isRequired
};

export default MentionDisplay;
