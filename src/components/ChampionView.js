import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';

const ChampionView = ({ champion }) => {

  return (
    <View style={styles.container}>
      <Image
        style={styles.tinyLogo}
        source={require('../../assets/champions/' + champion.championId + '.png')}
      />
      <Text style={styles.itemTitle} numberOfLines={1}>
        {champion.name}, Cost: {champion.cost}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 66,
    height: 58,
  },
});

export default ChampionView