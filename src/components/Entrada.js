import React from 'react';
import { View, StyleSheet } from 'react-native';
import Numero from './Numero';

export default props => (
    <View style={styles.numeros}>
        <Numero num={props.num1} onChangeTextHandler={props.onChangeTextHandler} nome='num1' />
        <Numero num={props.num2} onChangeTextHandler={props.onChangeTextHandler} nome='num2' />
    </View>
)

const styles = StyleSheet.create({
    numeros: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
})