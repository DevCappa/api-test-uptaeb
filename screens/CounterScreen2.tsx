import React from "react";
import {View, Text, StyleSheet} from "react-native"
import MostrarContador from "../component/MostrarContador";
import { useNavigation } from '@react-navigation/native';
import Button from "../component/Button";

export default function CounterScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>CounterScreen</Text>
            <MostrarContador />
            <Button onPress={() => { navigation.navigate('Counter'); } } children={"Hola mundo"} buttonStyle={undefined} textStyle={undefined} ></Button>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'red',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: '100%',
    }
});