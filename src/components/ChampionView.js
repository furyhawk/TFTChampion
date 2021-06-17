import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import { Asset } from 'expo-asset';

import { connect } from 'react-redux';
import { getChampion } from '../redux/actions';

const ChampionView = ({ champion }) => {

  const traits = champion.traits?.map((trait) =>
    <Text style={styles.itemChild} numberOfLines={1}>
      {trait}
    </Text>
  )

  // const championImageUri = Asset.fromModule(require('../../assets/champions/' + champion.championId + '.png')).uri;

  return (
    <View style={styles.container}>
      {/* <Image
        style={styles.tinyLogo}
        source={championImageUri}
      /> */}
      <View style={styles.containerColumn}>
        <Text style={styles.itemTitle} numberOfLines={1}>
          {champion.name}
        </Text>
        <Text style={styles.itemChild} numberOfLines={1}>
          Cost: {champion.cost}
        </Text>
        {traits.length ? traits : <Text style={styles.itemChild}>No trait</Text>}
      </View>
    </View>
  );
}
// aspectRatio: 1,
//         flex: 1 / numColumns,
//         backgroundColor: 'transparent',
//         margin: 12
const styles = StyleSheet.create({
  container: {
    // aspectRatio: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    padding: 10,
    margin: 12,
    backgroundColor: 'white'
  },
  containerColumn: {
    flexDirection: 'column',
  },
  itemTitle: {
    // flex: 1,
    fontWeight: 'bold',
    paddingStart: 10
  },
  itemChild: {
    // flex: 1,
    paddingStart: 10,
    paddingEnd: 10
  },
  tinyLogo: {
    alignContent: 'center',
    width: 80,
    height: 80,
    marginStart: 20,
    padding: 10
  },
  logo: {
    width: 66,
    height: 58,
  },
});

export default ChampionView