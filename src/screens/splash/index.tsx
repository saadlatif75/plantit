import React from 'react';
import {Image, SafeAreaView, StyleSheet, Text} from 'react-native';
type Props = {};

function Splash({navigation}: any) {
  setTimeout(() => {
    navigation.navigate('Wellcome');
  }, 2000);
  return (
    <SafeAreaView style={styles.container}>
      <Image
        resizeMode="contain"
        source={require('../../assests/SplashLogo.png')}
        style={styles.appLogo}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  appLogo: {
    width: 180,
    height: 48,
    alignSelf: 'center',
  },
});
export {Splash};
