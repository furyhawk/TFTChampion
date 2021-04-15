import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

function ListView({listItems}) {
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
                                <Text style={styles.itemTitle} numberOfLines={1}>
                                    {item.name}
                                </Text>
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

export default ListView