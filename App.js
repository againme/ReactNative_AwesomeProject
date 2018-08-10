import React from '../../../../Users/againme/AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/react';
import { StyleSheet, Text, View, Dimensions, ScrollView } from 'react-native';

import Bananas from './src/Bananas.js';
import LotsOfGreetings from './src/LotsOfGreetings.js';
import Blink from './src/Blink.js';
import LotsOfStyles from './src/LotsOfStyles.js';
import FixedDimensionsBasics from './src/FixedDimensionsBasics.js';
import PizzaTranslator from './src/PizzaTranslator.js';


export default class App extends React.Component {
  render() {
    return (

      // <View style={styles.container}>
      //   <ScrollView contentContainerStyle={styles.scrollview}>
      //     <Text>Hello</Text>
      //     <Text>Open up App.js to start working on your app!</Text>
      //     <Text>Changes you make will automatically reload.</Text>
      //     <Text>Shake your phone to open the developer menu.</Text>
      //     <Bananas/>
      //     <LotsOfGreetings/>
      //     <Blink/>
      //     <LotsOfStyles/>
      //     <FixedDimensionsBasics/>
      //     <PizzaTranslator/>
      //   </ScrollView>
      // </View>


      <View style={{flex: 1}}>
        <View style={{flex: 1, backgroundColor: 'powderblue'}} />
        <View style={{flex: 2, backgroundColor: 'skyblue'}} />
        <View style={{flex: 3, backgroundColor: 'steelblue'}} />
      </View>

    //<View style={{flex: 1, flexDirection: 'row'}}>
    //<View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
    //<View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
    //<View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
    //</View>

  // <View style={{
  //   flex: 1,
  //   flexDirection: 'row',
  //   justifyContent: 'space-between',
  // }}>
  //   <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
  //   <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
  //   <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
  // </View>

  // <View style={{
  //   flex: 1,
  //   flexDirection: 'column',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // }}>
  //   <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
  //   <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
  //   <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
  // </View>

    );
  }
}

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollview: {
    width: width - 10
    ,alignItems: "center"
    , backgroundColor: '#eee'
  }
});
