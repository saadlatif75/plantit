import {
  StyleSheet,
  Text,
  SafeAreaView,
  ImageBackground,
  Image,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {CustomHeader} from '../../components/CustomHeader';
import CustomCardContainer from '../../components/CustomCardContainer';
import {BasicButton} from '../../components/BasicButtonLogin';

type Props = {};

function Verify({navigation}: any) {
  return (
    <SafeAreaView style={styles.container}>
      <CustomHeader
        isenable={false}
        arrowLeftTintColor={'black'}
        onLeftPress={() => navigation.goBack()}
      />
      <CustomCardContainer
        borderBottomWidth={1}
        borderTopWidth={1}
        borderBottomColor={'#E6E6E6'}
        borderTopColor={'#E6E6E6'}
        width={'100%'}>
        <Image
          resizeMode="contain"
          style={styles.EmailImage}
          source={require('../../assests/EmailScuerly.png')}
        />
        <Text style={styles.forgotPasswordText}>
          Verify Your Email Securely
        </Text>
        <Text style={styles.descriptionText}>
          Click the link we just sent to hello@planIt.app. If you don’t see it,
          check spam.
        </Text>
        <Text style={styles.clickToResendText}>Change Email</Text>
        <BasicButton
          backgroundColor={'#6941C6'}
          text={'Open Email App'}
          textColor={'white'}
          width={'100%'}
          onPress={() => {
            navigation.navigate('CreateEventSuccess');
          }}
        />
        <BasicButton
          text={'Resend Link'}
          textColor={'black'}
          width={'100%'}
          borderColor={'#E6E6E6'}
          borderWidth={1}
          onPress={() => {
            navigation.navigate('Signup');
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 20,
          }}>
          <Text style={styles.donotReceiveEmailText}>
            Don’t receive the email?
          </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('ChangePassword');
            }}>
            <Text style={styles.clickToResendText}>Click to resend</Text>
          </TouchableOpacity>
        </View>
      </CustomCardContainer>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  EmailImage: {
    width: 80,
    height: 80,
  },
  forgotPasswordText: {
    color: '#000000',
    fontWeight: '700',
    fontSize: 22,
    lineHeight: 32,
  },
  descriptionText: {
    color: '#1C2A2B',
    fontWeight: '400',
    lineHeight: 24,
  },
  donotReceiveEmailText: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
    color: '#202330',
    marginRight: 5,
  },
  clickToResendText: {
    color: '#6941C6',
    lineHeight: 24,
    fontSize: 16,
    fontWeight: '600',
  },
});
export {Verify};
