/**
 * Test ReFacil superpagos
 * Jorge Luis Sanchez Ocampo
 *
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Dimensions,
} from 'react-native';

// const hp = () => Dimensions.get('window').height;

const App = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: 'center',
      }}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={{
          flex: 1,
          width: '80%',
        }}>
        <View style={styles.home}>
          <Text
            style={{textAlign: 'center', alignSelf: 'center', marginTop: 70}}>
            Hola george!
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  home: {
    flex: 1,
    textAlign: 'center',
    alignContent: 'center',
    justifyContent: 'center',
  },
});

export default App;
