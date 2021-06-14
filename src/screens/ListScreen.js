import React, {useEffect} from 'react'
import { StyleSheet, StatusBar, Text, View, TouchableOpacity, FlatList } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

import { withStyles, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


import { getChampions } from '../redux/actions'
import Header from '../components/Header'
import FixedPosition from '../components/FixedPosition'
import ChampionView from '../components/ChampionView'

const numColumns = 4; //number of column per row to display

function ListScreen({ navigation }) {
    // const styles = useStyles()
    return (
        <>
            <View style={styles.container}>
                <FixedPosition title={'TFT Champion set 5'} />
                {/* <Header title={'TFT Champion set 5'} /> */}
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
        </>
    )
}

function ListView() {
    // const styles = useStyles()
    const listItems = useSelector(state => state.itemList)
    const filteredItems = useSelector(state => state.filteredList)

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
            {filteredItems.length !== 0 ? (
                
                <FlatList
                    data={filteredItems}
                    keyExtractor={item => item.championId.toString()}
                    numColumns={numColumns}
                    renderItem={({ item }) => (
                        <View style={styles.listItemContainer}>
                            <View style={styles.listItemMetaContainer}>
                                <Paper>
                                    <ChampionView champion={item}  />
                                </Paper>
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

const useStyles = makeStyles(theme => ({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    listItemContainer: {
        aspectRatio: 1,
        flex: 1 / numColumns,
        backgroundColor: 'transparent',
        margin: 12
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
  }));
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    listItemContainer: {
        aspectRatio: 1,
        flex: 1 / numColumns,
        backgroundColor: 'transparent',
        margin: 12
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
