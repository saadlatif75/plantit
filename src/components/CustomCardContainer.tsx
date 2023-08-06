// CustomCard.js

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const CustomCardContainer = ({
  title,
  children,
  width,
  borderTopWidth,
  borderBottomWidth,
  borderTopColor,
  borderBottomColor,
  isenable,
}: any) => {
  return (
    <View
      style={[
        styles.card,
        {
          width: width,
          borderTopWidth: borderTopWidth,
          borderBottomWidth: borderBottomWidth,
          borderTopColor: borderTopColor,
          borderBottomColor: borderBottomColor,
        },
      ]}>
      {isenable ? <Text style={styles.title}>{title}</Text> : null}
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 16,
    margin: 8,
    elevation: 1,
    alignSelf: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 24,
    color: '#000000',
  },
});

export default CustomCardContainer;
