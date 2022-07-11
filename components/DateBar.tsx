import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';

export default function DateBar({ }) {
    const date = new Date().toDateString();

    return (
        <View style={styles.dateBar}>
            <Text style={styles.dateText}>{date}</Text>
            <View style={styles.bar} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        </View>
    );
}

const styles = StyleSheet.create({
    dateBar: {
        width: '100%',
        height: 70,
    },
    dateText: {
        margin: 10,
        fontWeight: 'bold',
        fontSize: 24,
    },
    bar: {
        height: 1,
        width: '100%'
    }
})