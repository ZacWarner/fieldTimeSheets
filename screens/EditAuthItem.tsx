import { Text, View } from '../components/Themed';
import { StyleSheet } from 'react-native';
import { useState } from 'react';
import { WorkAuth } from '../types';
import { Button, Card, TextInput } from 'react-native-paper';



export default function EditAuthItem({ navigation, route }) {
    console.log(route.params.workAuth)
    const [workAuth, setWorkAuth] = useState<WorkAuth>({ ...route.params.workAuth });
    console.log('work auth state:', workAuth)

    const handleChangeWorkAuth = (value: string, field: string) => {
        console.log('value: ', value);
        console.log('field: ', field);
        setWorkAuth({ ...workAuth, [field]: value })
    };

    const handleSave = () => {
        route.params.handleEditWorkAuthItem(workAuth, route.params.i);
        navigation.goBack();
    };
    return (
        <View style={styles.container}>
            <Card style={styles.card} elevation={2}>
                <Card.Title title={workAuth.id} />
                <Card.Content>
                    <TextInput
                        label="Name"
                        value={workAuth.name}
                        onChangeText={text => handleChangeWorkAuth(text, 'name')}
                    />
                    <TextInput
                        label="Contact Name"
                        value={workAuth.contactName}
                        onChangeText={text => handleChangeWorkAuth(text, 'contactName')}
                    />
                    <TextInput
                        label="Location"
                        value={workAuth.location}
                        onChangeText={text => handleChangeWorkAuth(text, 'location')}
                    />
                    <TextInput
                        label="Chainman 1"
                        value={workAuth.chainman1}
                        onChangeText={text => handleChangeWorkAuth(text, 'chainman1')}
                    />
                    <TextInput
                        label="Chainman 2"
                        value={workAuth.chainman2}
                        onChangeText={text => handleChangeWorkAuth(text, 'chainman2')}
                    />
                </Card.Content>
                <Card.Actions style={styles.buttonContainer}>
                    <Button style={styles.btn} onPress={() =>
                        navigation.goBack()
                    } mode='contained'>Cancel</Button>
                    <Button style={styles.btn}
                        onPress={() =>
                            handleSave()
                        }
                        mode='contained'>Save</Button>
                </Card.Actions>

            </Card>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 10
    },
    card: {
        width: '100%',
        backgroundColor: '#f4f4f4'
    },
    buttonContainer: {
        justifyContent: 'flex-end'
    },
    btn: {
        margin: 5,
    }
})