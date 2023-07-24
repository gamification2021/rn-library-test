import React from 'react';
import { Text, StyleSheet } from 'react-native';

const TextBold = props => (
  <Text onPress={props.onClick} style={{ fontSize: props.size ? props.size : 20, color: props.color ? props.color : 'white', ...styles.body, ...props.style, }}>{props.children}</Text>
);

const styles = StyleSheet.create({
  body: {
    // fontFamily: 'bold-font',
    fontSize: 30
  }
});

export default TextBold;