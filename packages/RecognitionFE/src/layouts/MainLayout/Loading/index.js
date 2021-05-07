import React from 'react';
import LoadingScreen from 'src/components/LoadingScreen';
import useLoading from 'src/shared/hooks/useLoading';

const LoadingView = props => {
  const [isLoading, setIsLoading] = useLoading();
  if (!isLoading) return null;
  return <LoadingScreen />;
};

export default LoadingView;
