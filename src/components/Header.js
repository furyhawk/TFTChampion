import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { useSelector } from 'react-redux'

function Header(props) {
    const { title } = props
    const listItems = useSelector(state => state.itemList)

    return (
        <View style={styles.container}>
            <Text variant='h2' classes={styles.text}>{title}</Text>
            <Text variant='subtitle1' classes={styles.subTitle}>{listItems.length} champions</Text>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        height: 125,
        paddingTop: 20
    },

    text: {
        fontWeight: 'bold',
        color: '#fff',
        fontSize: 28,
        fontWeight: '500'
    },
    subTitle: {
        color: '#fff'
    }

})

export default Header

