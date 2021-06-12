import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { useSelector } from 'react-redux'

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


function Header(props) {
    const { title } = props
    const listItems = useSelector(state => state.itemList)

    return (
        <View style={styles.container}>
            <Typography variant='h2' classes={styles.text}>{title}</Typography>
            <Typography variant='subtitle1' classes={styles.subTitle}>{listItems.length} champions</Typography>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'grey',
        height: 125,
        paddingTop: 20
    },

    text: {
        color: '#fff',
        fontSize: 28,
        fontWeight: '500'
    },
    subTitle: {
        color: '#fff'
    }

})

export default Header

