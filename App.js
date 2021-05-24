/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';
import PushNotification from 'react-native-push-notification';

PushNotification.channelExists('reFacil-channel-id', function (exists) {
  console.log(exists); // true/false
});

// const permissions = {
//   alert: true
// }
// PushNotification.checkPermissions(function (sound) {
//   console.log(sound);
// });
// const hp = () => Dimensions.get('window').height;

const App = () => {
  const pushNoti = () => {
    PushNotification.localNotification({
      channelId: 'reFacil-channel-id',
      title: 'Hola George', // (optional)
      message: 'Por qué no has vuelto te extrañamos!   :(', // (required)
      color: '#FFB03D',
      // showWhen: true,
      vibrate: true,
      playSound: false, // (optional) default: true
      soundName: 'default',
    });
  };

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
        <Button
          onPress={pushNoti}
          title="push notification"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
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
    marginBottom: 300,
  },
});

export default App;
