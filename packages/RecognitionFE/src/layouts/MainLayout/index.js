import React from 'react';
import PropTypes from 'prop-types';
import { Box, Grid, makeStyles } from '@material-ui/core';
import TopHeader from './TopHeader';
import SideBar from './SideBar';
import styles from './styles.module.scss';

const useStyles = makeStyles(() => ({
  rootContainer: {
    position: 'relative',
    minHeight: window.innerHeight
  },
  topImage: {
    position: 'relative',
    '&::before': {
      content: "''",
      backgroundColor: '#000',
      position: 'absolute',
      top: '0',
      left: '0',
      width: '100%',
      height: '99%',
      opacity: '0.7'
    },
    '& img': {
      width: '100%',
      height: window.outerHeight / 2,
      objectFit: 'cover'
    }
  }
}));

const MainLayout = ({ children }) => {
  const classes = useStyles();

  return (
    <Box className={classes.rootContainer}>
      <div className={classes.topImage}>
        <img src="https://worldcoffeeresearch.org/media/images/AdobeStock_79539495.width-1280.jpg" alt="Mercon" />
      </div>
      <div className={styles.mainContainer}>
        <Box paddingX={5} paddingY={3}>
          <TopHeader />

          <Box marginTop={3}>
            <Grid container>
              <Grid item xs={4}>
                <SideBar />
              </Grid>
              <Grid item xs={8}>
                <div>{children}</div>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </div>
    </Box>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node
};

export default MainLayout;
