//--- Library
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles, Box } from '@material-ui/core';

//--- Service
import { fetchData } from 'src/__mocks__';
import { actionExample } from 'src/redux/store/example/example.action';

//--- Component
import Page from 'src/components/Page';

const service = fetchData();

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  }
}));

const HomePageView = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const text = useSelector(state => state.example.text);

  const response = service.homePage.read();

  const setData = () => {
    dispatch(actionExample('Load from redux'));
  };

  useEffect(setData, []);

  return (
    <Page title="Home page" className={classes.root}>
      <Box>{response}</Box>
      <Box>{text}</Box>
    </Page>
  );
};

export default HomePageView;
