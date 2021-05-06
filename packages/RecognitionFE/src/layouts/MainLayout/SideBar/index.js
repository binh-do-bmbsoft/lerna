import { Avatar, Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import { COLOR_NAME } from 'src/shared/constants/Colors';

const useStyles = makeStyles(theme => ({
  userProfile: {
    display: 'flex',
    alignItems: 'center',
    '& .user-avatar': {
      width: theme.spacing(9),
      height: theme.spacing(9)
    },
    '& h4': {
      color: COLOR_NAME.GRAY,
      marginLeft: 10
    }
  },
  menuContainer: {
    '& .menu-title': {
      position: 'relative',
      color: COLOR_NAME.DARK_GREEN,
      '&:before': {
        left: 0,
        width: 240,
        bottom: -5,
        height: 3,
        content: "''",
        position: 'absolute',
        backgroundColor: COLOR_NAME.DARK_GREEN
      }
    }
  }
}));

const SideBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.sideBarContainer}>
      <Grid container>
        <Grid item xs={12}>
          <div className={classes.userProfile}>
            <Avatar
              src="https://static.toiimg.com/thumb/80453851.cms?width=680&height=512&imgsize=1244953"
              className="user-avatar"
              alt="Remy Sharp"
            />
            <h4>
              Adriana <br /> Montalvan Balladares
            </h4>
          </div>
        </Grid>

        <Grid item xs={12}>
          <div className={classes.menuContainer}>
            <h3 className="menu-title">Menu</h3>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default SideBar;
