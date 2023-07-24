import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal, Image, Text } from 'react-native';
import TextNormal from './TextNormal';
import TextBold from './TextBold';
import ButtonCurved from './ButtonCurved';
import Color from './colors';

const SuccessDialog = props => {
  return (
    <View style={styles.container}>
      <View style={styles.mainView}>
        <TextBold style={{ fontSize: 20, color: 'black', alignSelf: 'center', marginTop: 20 }}>Congratulations!</TextBold>
        {props.fromLuckyLottery ? <TextNormal style={{ fontSize: 16, color: 'black', alignSelf: 'center', marginTop: 5 }}>You guessed {props.points / 50} numbers correctly</TextNormal> : null}

        <Image style={styles.imageStyle}
          source={require('./success_image.png')} />
        <TextNormal style={styles.textBoldStyle}>You Earned.</TextNormal>
        <TextBold style={styles.textNormalStyle}>{props.points ? props.points : '200 Points'}</TextBold>
        <ButtonCurved title='Close' onSelect={props.onPress} style={styles.buttonStyle} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  mainView: {
    backgroundColor: 'white',
    borderRadius: 40,
    elevation: 5,
    padding: 20,
    width: '85%',
  },
  textBoldStyle: {
    fontSize: 20,
    color: 'gray',
    marginTop: 20,
    alignSelf: 'center'
  },
  textNormalStyle: {
    color: 'green',
    fontSize: 18,
    alignSelf: 'center',
    textAlign: 'center'
  },
  buttonStyle: {
    backgroundColor: Color.accentColor,
    marginTop: 30,
    alignSelf: 'center',
    marginBottom: 20,
  },
  imageStyle: {
    height: 150,
    width: '90%',
    resizeMode: 'stretch',
    alignSelf: 'center',
    marginTop: 30,
    marginBottom: 20
  }
});

export default SuccessDialog;
