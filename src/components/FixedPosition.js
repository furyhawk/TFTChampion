import React from 'react';
import { useSelector } from 'react-redux'

import { withStyles, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';

const styles = theme => ({
  root: {
    flexGrow: 0.1
  },
  flex: {
    flex: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  toolbarMargin: theme.mixins.toolbar
});
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 0.1
  },
  flex: {
    flex: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  toolbarMargin: theme.mixins.toolbar,
  search: { marginLeft: theme.spacing(2) }
}));

// const FixedPosition = withStyles(styles)(({ title, classes }) => (
function FixedPosition(props) {
  const classes = useStyles()
  const { title } = props
  const listItems = useSelector(state => state.itemList)
  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            className={classes.menuButton}
            color="inherit"
            aria-label="Menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            color="inherit"
            className={classes.flex}
          >
            {title}
          </Typography>
          <TextField

            id="input-search"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              )
            }}
          />
          <Tabs>
            <Tab label={listItems.length + " champions"} />
          </Tabs>
          {/* <Typography variant='subtitle1' classes={styles.subTitle}>{listItems.length} champions</Typography> */}
          {/* <Button color="inherit">Login</Button> */}
        </Toolbar>
      </AppBar>
      {/* <div className={classes.toolbarMargin} /> */}
    </div>
    // ));
  );
}

export default FixedPosition;
