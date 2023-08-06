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
import CustomTextInputWithOutImage from '../../components/CustomTextInputWithOutImage';
import {BasicButton} from '../../components/BasicButtonLogin';
type Props = {};

function ForgotPassword({navigation}: any) {
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
        <Text style={styles.forgotPasswordText}>Forgot password</Text>
        <Text style={styles.descriptionText}>
          Enter the email address associated with your account and we’ll send
          you a link to reset your password.
        </Text>
        <CustomTextInputWithOutImage
          imageSource={require('../../assests/lock.png')}
          placeholder="Enter Your Email"
        />
        <BasicButton
          backgroundColor={'#6941C6'}
          text={'Continue'}
          textColor={'white'}
          width={'100%'}
          onPress={() => {
            navigation.navigate('Verify');
          }}
        />
      </CustomCardContainer>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
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
});
export {ForgotPassword};
