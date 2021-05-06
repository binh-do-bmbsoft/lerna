import { Avatar, Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
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
      marginBottom: 20,
      '&:before': {
        left: 0,
        width: 240,
        bottom: -5,
        height: 3,
        content: "''",
        position: 'absolute',
        backgroundColor: COLOR_NAME.DARK_GREEN
      }
    },
    '& .nav-menu': {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      marginTop: 10,
      '& li': {
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 20,
        '&.active': {
          backgroundColor: COLOR_NAME.GRAY_1,
          borderTopLeftRadius: 20,
          borderBottomLeftRadius: 20,
          '& .ic-menu': {
            display: 'none'
          },
          '& .ic-menu-active': {
            display: 'block'
          },
          '& span': {
            color: COLOR_NAME.DARK_GREEN
          }
        },
        '& a': {
          display: 'flex',
          alignItems: 'center',
          textDecoration: 'none'
        },
        '& span': {
          marginTop: 5,
          marginLeft: 15,
          fontWeight: 600
        },
        '& img': {
          width: 20,
          '&.ic-menu': {},
          '&.ic-menu-active': {
            display: 'none'
          }
        }
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

            <ul className="nav-menu">
              <li className="active">
                <Link to="">
                  <img src="/static/images/icons/ic-home.svg" alt="home" className="ic-menu" />
                  <img src="/static/images/icons/ic-home-active.svg" alt="home" className="ic-menu-active" />
                  <span>Home</span>
                </Link>
              </li>
              <li>Profile</li>
              <li>Rewards</li>
              <li>Directory</li>
              <li>Employee of the month</li>
              <li>Leaders of Excellence</li>
            </ul>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default SideBar;
