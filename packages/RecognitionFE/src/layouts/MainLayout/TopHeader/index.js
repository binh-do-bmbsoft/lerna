import React from 'react';
import { Badge, Grid, IconButton, makeStyles, withStyles } from '@material-ui/core';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { COLOR_NAME } from 'src/shared/constants/Colors';

const useStyles = makeStyles(() => ({
  topHeaderContainer: {},
  merconLogo: {
    '& img': {
      width: 150
    }
  },
  topHeaderRight: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  iconNotification: {
    color: COLOR_NAME.GRAY,
    '& .MuiSvgIcon-root': {
      width: 35,
      height: 35
    }
  },
  searchContainer: {
    borderLeft: '1px solid #f7f7f7',
    marginLeft: 5,
    paddingLeft: 10,
    position: 'relative',
    '& .input-search': {
      height: 35,
      width: 200,
      borderRadius: 20,
      border: 'none',
      paddingLeft: 40,
      '&::placeholder': {
        color: COLOR_NAME.GRAY
      },
      '&:focus': {
        outline: 'none'
      }
    },
    '& .ic-search': {
      width: 20,
      position: 'absolute',
      top: 10,
      left: 20
    }
  }
}));

const StyledBadge = withStyles(theme => ({
  badge: {
    top: 10,
    right: 5,
    padding: '0 4px',
    backgroundColor: COLOR_NAME.DARK_GREEN,
    fontSize: 11
  }
}))(Badge);

const TopHeader = () => {
  const classes = useStyles();

  return (
    <div className={classes.topHeaderContainer}>
      <Grid container>
        <Grid item xs={4}>
          <div className={classes.merconLogo}>
            <img src="/static/images/mercon-logo.png" alt="mercon logo" />
          </div>
        </Grid>
        <Grid item xs={8}>
          <div className={classes.topHeaderRight}>
            <IconButton size="medium" className={classes.iconNotification}>
              <StyledBadge badgeContent={4} color="primary">
                <NotificationsIcon />
              </StyledBadge>
            </IconButton>
            <div className={classes.searchContainer}>
              <img src="/static/images/icons/ic-search.svg" alt="Search" className="ic-search" />
              <input type="text" placeholder="Search Recognitions" className="input-search" />
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default TopHeader;
