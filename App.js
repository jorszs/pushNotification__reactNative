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

PushNotification.channelExists('refacil-channel-id', function (exists) {
  console.log(exists); // true/false
});
// const hp = () => Dimensions.get('window').height;

const App = () => {
  const pushNoti = () => {
    PushNotification.localNotification({
      channelId: 'refacil-channel-id',
      title: 'My Notification Title', // (optional)
      message: 'My Notification Message', // (required)
      showWhen: true,
      vibrate: true,
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
  },
});

export default App;
