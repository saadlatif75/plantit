import React from 'react';
import {View, Image, TouchableOpacity, StyleSheet, Text} from 'react-native';

export const CustomHeader = ({
  onLeftPress,
  centerText,
  arrowLeftTintColor,
  textColor,
  marginHorizontal,
}: any) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onLeftPress}>
        <Image
          source={require('../assests/arrowLeft.png')}
          style={[styles.leftImage, {tintColor: arrowLeftTintColor}]}
        />
      </TouchableOpacity>
      <Text
        style={[
          styles.centerText,
          {color: textColor, marginHorizontal: marginHorizontal},
        ]}>
        {centerText}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 7,
    marginTop: 15,
  },
  leftImage: {
    width: 16,
    height: 16,
    marginLeft: 10,
  },
  centerText: {
    textAlign: 'center',
    // marginHorizontal: '40%',
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 20,
    color: '#FFFFFF',
  },
});
