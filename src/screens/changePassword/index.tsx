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
import CustomTextInputWithOutImage from '../../components/CustomTextInputWithOutImage';
import {BasicButton} from '../../components/BasicButtonLogin';
type Props = {};

function ChangePassword({navigation}: any) {
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
        <Text style={styles.setNewPassword}>Set new password</Text>
        <Text style={styles.descriptionText}>
          Your new password mush be different to previously used passwords.
        </Text>
        <CustomImageTextInput
          imageSource={require('../../assests/lock.png')}
          placeholder="New Password"
        />
        <CustomImageTextInput
          imageSource={require('../../assests/lock.png')}
          placeholder="Confirm Password"
        />
        <BasicButton
          backgroundColor={'#6941C6'}
          text={'Reset Password'}
          textColor={'white'}
          width={'100%'}
          onPress={() => {
            navigation.navigate('Login');
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
  setNewPassword: {
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
export {ChangePassword};
