import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';

const ChampionView = ({ champion }) => {
  const traits = champion.traits.map((trait) =>
    <Text style={styles.itemChild} numberOfLines={1}>
      {trait}
    </Text>
  )
  return (
    <View style={styles.container}>
      <Image
        style={styles.tinyLogo}
        source={require('../../assets/champions/' + champion.championId + '.png')}
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
    paddingTop: 20
  },
  containerColumn: {
    flexDirection: 'column',
  },
  itemTitle: {
    flex: 1,
    fontWeight: 'bold',
    paddingStart: 20
  },
  itemChild: {
    flex: 1,
    paddingStart: 20
  },
  tinyLogo: {
    alignContent: 'center',
    width: 80,
    height: 80,
    marginStart: 20
  },
  logo: {
    width: 66,
    height: 58,
  },
});

export default ChampionView