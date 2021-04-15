import React, {useEffect} from 'react'
import { StyleSheet, StatusBar, Text, View, TouchableOpacity, FlatList } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

import { getChampions } from '../redux/actions'
import Header from '../components/Header'
import ChampionView from '../components/ChampionView'

function ListScreen({ navigation }) {
    return (
        <>
            <StatusBar barStyle='light-content' />
            <View style={styles.container}>
                <Header title={'List'} />
                <ListView />
                <View style={styles.fabContainer}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Modal')}
                        style={styles.fabButton}>
                        <Ionicons name='ios-add' color='#fff' size={70} />
                    </TouchableOpacity>
                </View>
            </View>
        </>
    )
}

function ListView() {
    const listItems = useSelector(state => state.itemList)

    const dispatch = useDispatch();
    const fetchChampions = () => dispatch(getChampions());
    useEffect(() => {
        fetchChampions();
    }, []);

    return (
        <View
            style={{
                backgroundColor: 'white',
                flex: 1,
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                paddingHorizontal: 20,
                paddingVertical: 20
            }}>
            {listItems.length !== 0 ? (
                <FlatList
                    data={listItems}
                    keyExtractor={item => item.championId.toString()}
                    renderItem={({ item }) => (
                        <View style={styles.listItemContainer}>
                            <View style={styles.listItemMetaContainer}>
                                <ChampionView champion={item}  />
                            </View>
                        </View>
                    )}
                />
            ) : (
                <Text style={{ fontSize: 30 }}>You list is empty :'(</Text>
            )
            }

        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'blue'
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
