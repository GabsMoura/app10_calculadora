import React, { useState } from 'react';
import { StyleSheet, Picker } from 'react-native';

export default props => {
    return (
        <Picker selectedValue={props.sinal} onValueChange={(item) => {props.onValueChangeHandler(item)}}>
            <Picker.Item label='Escolha uma opção!' value={0} />
            <Picker.Item label='Somar' value={1} />
            <Picker.Item label='Subtrair' value={2} />
            <Picker.Item label='Dividir' value={3} />
            <Picker.Item label='Multiplicar' value={4} />
        </Picker>
    )
}