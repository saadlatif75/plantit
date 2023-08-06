import {
  StyleSheet,
  Text,
  SafeAreaView,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {CustomHeader} from '../../components/CustomHeader';
import CustomCardContainer from '../../components/CustomCardContainer';
import CustomImageTextInput from '../../components/CustomImageTextInput';
import {BasicButton} from '../../components/BasicButtonLogin';
type Props = {};

function Login({navigation}: any) {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.backgroundImage}
        source={require('../../assests/background_Image.png')}>
        <CustomHeader
          centerText={'Login'}
          textColor={'white'}
          marginHorizontal={'35%'}
          onLeftPress={() => navigation.goBack()}
        />
        <Image
          resizeMode="contain"
          style={styles.appLogoWhite}
          source={require('../../assests/App_logo_White.png')}
        />
        <Text style={styles.partiesText}>Parties on Parties on Parties.</Text>
        <CustomCardContainer isenable={true} title={'Sign'} width={'93%'}>
          <CustomImageTextInput
            imageSource={require('../../assests/EmailIcon.png')}
            placeholder="Email Address"
          />
          <CustomImageTextInput
            imageSource={require('../../assests/lock.png')}
            placeholder="Password"
          />
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('ForgotPassword');
            }}>
            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
          </TouchableOpacity>
          <BasicButton
            backgroundColor={'#6941C6'}
            text={'Sign In'}
            textColor={'white'}
            width={'100%'}
            onPress={() => {
              navigation.navigate('Login');
            }}
          />
        </CustomCardContainer>
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
  },
  forgotPasswordText: {
    marginHorizontal: 1,
    color: '#6941C6',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 24,
  },
});
export {Login};
