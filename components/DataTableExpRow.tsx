import { DataTable, List, Button } from "react-native-paper";
import { View, StyleSheet } from 'react-native';

import { WorkAuth } from '../types';

export default function DataTableExpRow(
    { workAuth, openEdit, i }: {
        workAuth: WorkAuth,
        openEdit: Function,
        i: number,
    },
) {




    return (
        <DataTable.Row>
            <List.Accordion
                title={workAuth.projId}
                left={props => <List.Icon {...props} icon="folder" />}
            >
                <List.Item title={`Name: ${workAuth.name}`} />
                <List.Item title={`Contact: ${workAuth.contactName}`} />
                <List.Item title={`Location: ${workAuth.location}`} />
                <List.Item title={`Chainman1: ${workAuth.chainman1}`} />
                <List.Item title={`Chainman2: ${workAuth.chainman2}`} />
                <List.Item title={`Priority: ${workAuth.priority}`} />
                <View style={styles.buttonContainer}>
                    <Button mode="contained" >
                        Edit
                    </Button>
                </View>
            </List.Accordion>
        </DataTable.Row>
    );
};

const styles = StyleSheet.create({
    buttonContainer: {
        width: '50%',
        alignContent: 'center',
        justifyContent: 'center',
        margin: 'auto'
    }
});