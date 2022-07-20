import * as React from 'react';
import { List, Button } from 'react-native-paper';
import { WorkAuth } from '../types';
import { View, StyleSheet } from 'react-native';

export default function WorkAuthListItem(
    { workAuth, openEdit, i }: {
        workAuth: WorkAuth,
        openEdit: Function,
        i: number,
    },
) {

    console.log(workAuth)
    console.log('workAuth', workAuth.id)

    const handleEdit = () => {
        console.log('click');
        openEdit(workAuth, i);
    }
    return (
        <List.Accordion
            title={workAuth.id}
            left={props => <List.Icon {...props} icon="folder" />}
        >
            <List.Item title={`Name: ${workAuth.name}`} />
            <List.Item title={`Contact: ${workAuth.contactName}`} />
            <List.Item title={`Location: ${workAuth.location}`} />
            <List.Item title={`Chainman1: ${workAuth.chainman1}`} />
            <List.Item title={`Chainman2: ${workAuth.chainman2}`} />
            <List.Item title={`Priority: ${workAuth.priority}`} />
            <View style={styles.buttonContainer}>
                <Button mode="contained" onPress={handleEdit}>
                    Edit
                </Button>
            </View>
        </List.Accordion>
    );
};

const styles = StyleSheet.create({
    buttonContainer: {
        width: '50%',
        alignContent: 'center',
        justifyContent: 'center',
        margin: 'auto'
    }
})