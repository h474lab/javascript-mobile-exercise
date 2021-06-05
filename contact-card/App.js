import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';

function padding(a, b, c, d) {
  return {
    paddingTop: a,
    paddingRight: b ? b : a,
    paddingBottom: c ? c : a,
    paddingLeft: d ? d : (b ? b : a)
  }
}

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.card_cover}>
        <View style={[styles.row, padding(10)]}>
          <View styles={styles.row}>
            <Image
              style={styles.tinylogo}
              source={require('./assets/icon.png')}
            />
          </View>
          <View style={padding(30)}>
            <Text>Tony Stark</Text>
            <Text>CEO</Text>
          </View>
        </View>
        <View style={padding(20)}>
          <Text>Phone: 322-1234-9999</Text>
          <Text>Email: tony@ironman.marvel</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'skyblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card_cover: {
    backgroundColor: 'lightgreen',
    alignItems: 'center',
    width: 300,
    height: 200
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  padding: {
    padding: 50,
    margin:50
  },
  tinylogo: {
    width: 100,
    height: 100,
    paddingTop: 50,
    borderRadius: 50
  }
});
