import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import useAuth from 'src/shared/hooks/useAuth';
import { ROUTER_NAME } from 'src/shared/constants';

const GuestGuard = ({ children, match }) => {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <Redirect to={ROUTER_NAME.DEFAULT} />;
  }

  return <>{children}</>;
};

GuestGuard.propTypes = {
  children: PropTypes.node
};

export default GuestGuard;
