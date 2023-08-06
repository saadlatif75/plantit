import React from 'react';
import {View, TextInput, Image, StyleSheet} from 'react-native';

const CustomImageTextInput = ({imageSource, ...textInputProps}: any) => {
  return (
    <View style={styles.container}>
      <Image source={imageSource} style={styles.image} resizeMode="contain" />
      <TextInput style={styles.textInput} {...textInputProps} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E6E6E6',
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginVertical: 10,
  },
  image: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  textInput: {
    height: 40,
    borderColor: '#E6E6E6',
    width: '100%',
  },
});

export default CustomImageTextInput;
