import React from 'react';
import {TouchableOpacity, Text, StyleSheet, View} from 'react-native';

const BasicButton = ({
  onPress,
  backgroundColor,
  textColor,
  text,
  width,
  borderColor,
  borderWidth,
}: any) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: backgroundColor,
        borderRadius: 8,
        width: width,
        paddingVertical: 18,
        alignSelf: 'center',
        marginTop: 20,
        borderColor: borderColor,
        borderWidth: borderWidth,
      }}
      onPress={onPress}>
      <Text
        style={[styles.buttonText, {color: textColor, textAlign: 'center'}]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export {BasicButton};
