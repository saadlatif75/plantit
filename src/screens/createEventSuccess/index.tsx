import {
  StyleSheet,
  Text,
  SafeAreaView,
  ImageBackground,
  Image,
} from 'react-native';
import React from 'react';

import {BasicButton} from '../../components/BasicButtonLogin';
type Props = {};

function CreateEventSuccess({navigation}: any) {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.backgroundImage}
        source={require('../../assests/AddEventackGroundImage.png')}
      />
      <Text style={styles.allowTrackingText}>
        Allow tracking for more relevant event
      </Text>
      <Text style={styles.yourAccountText}>
        Your account has been created successfully, now create you event and
        manage
      </Text>
      <BasicButton
        backgroundColor={'#6941C6'}
        text={'Create Event'}
        textColor={'white'}
        width={'50%'}
        onPress={() => {
          navigation.navigate('AddEvent');
        }}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    width: '100%',
    height: 243,
  },
  appLogoWhite: {
    width: 200,
    height: 100,
    alignSelf: 'center',
    marginTop: 30,
  },
  partiesText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: '500',
    fontSize: 16,
  },
  allowTrackingText: {
    color: '#000000',
    fontWeight: '700',
    fontSize: 24,
    lineHeight: 32,
    textAlign: 'center',
    marginTop: '10%',
  },
  yourAccountText: {
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
    color: '#1C2A2B',
    marginBottom: 15,
  },
});

export {CreateEventSuccess};
