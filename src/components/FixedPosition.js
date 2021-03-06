import React from 'react';
import { useSelector } from 'react-redux'
import { View, Image, StyleSheet, Text } from 'react-native';

import { withStyles, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import SearchBar from '../components/SearchBar';

const styles = theme => ({
  root: {
    flexGrow: 1
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
    flexGrow: 1
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
  const filteredItems = useSelector(state => state.filteredList)
  return (
      <AppBar position="relative" className={classes.toolbarMargin}>
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
          <SearchBar />
          
          <Tabs>
            <Tab label={filteredItems.length + " champions"} />
          </Tabs>
        </Toolbar>
      </AppBar>
  );
}

export default FixedPosition;
