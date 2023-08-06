import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ImageBackground,
} from 'react-native';
import React from 'react';
import {Image} from 'react-native';
import {BasicButton} from '../../components/BasicButtonLogin';
type Props = {};

function Wellcome({navigation}: any) {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.backgroundImage}
        source={require('../../assests/background_Image.png')}>
        <Image
          resizeMode="contain"
          style={styles.appLogoWhite}
          source={require('../../assests/App_logo_White.png')}
        />
        <Text style={styles.partiesText}>Parties on Parties on Parties.</Text>
        <View style={{width: '98%', alignSelf: 'center', marginVertical: 10}}>
          <BasicButton
            backgroundColor={'white'}
            text={'Login'}
            textColor={'#6941C6'}
            width={'90%'}
            onPress={() => {
              navigation.navigate('Login');
            }}
          />
          <BasicButton
            text={'Get Started'}
            textColor={'white'}
            width={'90%'}
            borderColor={'white'}
            borderWidth={1}
            onPress={() => {
              navigation.navigate('Signup');
            }}
          />
        </View>
        <Text
          style={{
            marginVertical: 10,
            marginHorizontal: 22,
            textAlign: 'center',
            color: 'white',
            fontSize: 14,
            lineHeight: 18,
            fontWeight: '400',
          }}>
          By signing up you agree to the User Notice and Privacy policy
        </Text>
      </ImageBackground>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
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
    // lineHeight: 24,
  },
});
export {Wellcome};
