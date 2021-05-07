//@ts-check
import React from 'react';
import styles from './styles.module.scss';
import PropTypes from 'prop-types';
import classNames from 'classnames';
const Suggesstion = props => {
  const { focused, suggestion, index, search } = props;
  const { avatar, display, id } = suggestion;
  const containerStyles = classNames(styles['sugesstion-container'], {
    [styles['sugesstion-container-focus']]: focused
  });
  return (
    <div className={containerStyles}>
      <img src={avatar} className={styles['avatar']} /> <span className={styles['display-name']}>{display}</span>
    </div>
  );
};

Suggesstion.propTypes = {
  highlightedDisplay: PropTypes.any,
  search: PropTypes.any,
  index: PropTypes.any,
  focused: PropTypes.any,
  suggestion: PropTypes.any
};

export default Suggesstion;
