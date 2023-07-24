import React from 'react';
import { Text, StyleSheet } from 'react-native';

const TextNormal = props => (
  <Text onPress={props.onClick} style={{ color: props.color ? props.color:'white',fontSize: props.size ? props.size:14,...styles.body, ...props.style,}} numberOfLines={props.numberOfLines}  >{props.children}</Text>
);

const styles = StyleSheet.create({
  body: {
    fontFamily: 'normal-font', 
  }
});

export default TextNormal;