import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

function ListView() {
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
            <Text>Here goes list items</Text>
        </View>
    )
}

export default ListView