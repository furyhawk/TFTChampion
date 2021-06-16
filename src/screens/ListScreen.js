import React, { useEffect } from 'react'
import { StyleSheet, StatusBar, Text, View, SafeAreaView, TouchableOpacity, FlatList } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

import { getChampions } from '../redux/actions'
import Header from '../components/Header'
import ChampionView from '../components/ChampionView'

const numColumns = 1; //number of column per row to display

function ListScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Header title={'TFT Champion set 5'} />
            <ListView />
            <View style={styles.fabContainer}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Modal')}
                    style={styles.fabButton}>
                    <Ionicons name='ios-add' color='#fff' size={70} />
                </TouchableOpacity>
            </View>
            <StatusBar barStyle='light-content' />
        </View>
    )
}

function ListView() {
    const listItems = useSelector(state => state.itemList)
    const filteredItems = useSelector(state => state.filteredList)

    const dispatch = useDispatch();
    const fetchChampions = () => dispatch(getChampions());
    useEffect(() => {
        fetchChampions();
    }, []);

    return (
        <SafeAreaView
            style={styles.listItemContainer}>
            {filteredItems.length !== 0 ? (

                <FlatList
                    data={filteredItems}
                    keyExtractor={item => item.championId.toString()}
                    numColumns={numColumns}
                    renderItem={({ item }) => (
                        <ChampionView champion={item} />
                    )}
                />

            ) : (
                <Text style={{ fontSize: 30 }}>You list is empty :'(</Text>
            )
            }

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'grey'
    },
    listItemContainer: {
        backgroundColor: 'transparent'
    },
    fabContainer: {
        justifyContent: 'flex-end',
        flexDirection: 'row',
        position: 'absolute',
        right: 10,
        bottom: 20
    },
    fabButton: {
        backgroundColor: 'blue',
        borderRadius: 35,
        width: 70,
        height: 70,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default ListScreen
