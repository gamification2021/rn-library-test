import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import TextNormal from './TextNormal';

const TextBold = props => (
    <View style={{width:'100%'}}>
        <TouchableOpacity style={{ ...styles.body, ...props.style,}} onPress={props.onSelect}>
        <TextNormal style={{ ...styles.textStyle,...props.styleText, color: props.color ,width:'80%' }} >{props.title}</TextNormal>
        </TouchableOpacity>
    </View>
 
);

const styles = StyleSheet.create({
  body: {
    alignSelf:'center',
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: 'white'
  },
  textStyle: {
    color: 'black',
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 16,
    width:'100%',
    textAlign:'center'
  }
});

export default TextBold;