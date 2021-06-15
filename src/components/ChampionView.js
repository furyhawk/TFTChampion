import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import { Asset } from 'expo-asset';

const ChampionView = ({ champion }) => {
  const traits = champion.traits.map((trait) =>
    <Text style={styles.itemChild} numberOfLines={1}>
      {trait}
    </Text>
  )

  const championImageUri = Asset.fromModule(require('../../assets/champions/' + champion.championId + '.png')).uri;

  return (
    <View style={styles.container}>
      <Image
        style={styles.tinyLogo}
        source={championImageUri}
      />
      <View style={styles.containerColumn}>
        <Text style={styles.itemTitle} numberOfLines={1}>
          {champion.name}
        </Text>
        <Text style={styles.itemChild} numberOfLines={1}>
          Cost: {champion.cost}
        </Text>
        {traits}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    padding: 10
  },
  containerColumn: {
    flexDirection: 'column',
  },
  itemTitle: {
    flex: 1,
    fontWeight: 'bold',
    paddingStart: 10
  },
  itemChild: {
    flex: 1,
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