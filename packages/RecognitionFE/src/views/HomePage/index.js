//--- Library
import React from 'react';
import { makeStyles } from '@material-ui/core';

//--- Component
import Page from 'src/components/Page';
import DemoComponent from 'demo-project-2/src/demoComponent';
const useStyles = makeStyles(theme => ({
  root: {}
}));

const HomePageView = () => {
  const classes = useStyles();

  return (
    <Page title="Home page" className={classes.root}>
      <div>
        <DemoComponent />
      </div>
    </Page>
  );
};

export default HomePageView;
