import { StyleSheet, DeviceEventEmitter } from 'react-native';

import { Card, DataTable, List } from 'react-native-paper';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps, WorkAuth } from '../types';
import DateBar from '../components/DateBar';
import WorkAuthListItem from '../components/WorkAuthListItem';
import { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import DataTableExpRow from '../components/DataTableExpRow';

import { useAppSelector, useAppDispatch } from '../hooks';
import workAuth, { addWorkAuth } from '../features/workAuth/workAuth';


export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {

  const reduxWorkAuth = useAppSelector(state => state.workAuthList.value);
  const dispatch = useAppDispatch();



  // todo: make this an api call
  const [workAuthListItems, setWorkAuthListItems] = useState<WorkAuth[]>([{
    projId: '1GEN100100',
    taskId: '',
    deptId: '',
    functId: '',
    name: 'East Wall',
    hours: 20,
    contactName: 'Jack @ another place',
    contactId: '123',
    location: 'Anaheim',
    chainman1: "Jim",
    chainman2: "joe",
    priority: 1
  },
  {
    projId: '1GDN110120',
    taskId: '',
    deptId: '',
    functId: '',
    hours: 20,
    name: 'Curtain Wall Detail',
    contactName: 'Joe @ Hathaway Dinwiddie',
    contactId: '321',
    location: 'Anaheim',
    chainman1: "Jim",
    chainman2: "joe",
    priority: 2
  }]);

  const handleEditWorkAuthItem = (workAuth: WorkAuth, i: number) => {
    const newWorkListItems = [...workAuthListItems];
    newWorkListItems[i] = workAuth;
    setWorkAuthListItems(newWorkListItems)
  }

  useEffect(() => {
    console.log(reduxWorkAuth);
    if (reduxWorkAuth.length === 0) {
      console.log("adding items")
      dispatch(addWorkAuth(workAuthListItems))
    }
  })


  const openEdit = (workAuth: WorkAuth | undefined, i: number | undefined) => navigation.navigate("EditAuth", { workAuth, handleEditWorkAuthItem, i });


  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <DateBar />
        <Text style={styles.title}>Projects</Text>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <Card>
          <List.Section title='Work Authorizations' style={styles.list}>
            {workAuthListItems.map((workAuth, i) => {
              return <WorkAuthListItem workAuth={workAuth} key={workAuth.projId} openEdit={openEdit} i={i} />
            })}
          </List.Section>
        </Card>
        <Card>
          <DataTable>
            <DataTable.Header>
              <DataTable.Title>Project Number</DataTable.Title>
              <DataTable.Title>Task Id</DataTable.Title>
              <DataTable.Title>Dept Id</DataTable.Title>
            </DataTable.Header>
            {workAuthListItems.map((workAuth, i) => (
              <DataTable.Row>
                <DataTable.Cell>{workAuth.projId}</DataTable.Cell>
                <DataTable.Cell>{workAuth.functId}</DataTable.Cell>
                <DataTable.Cell>{workAuth.deptId}</DataTable.Cell>
              </DataTable.Row>
            ))}
            {workAuthListItems.map((workAuth, i) => (
              <DataTableExpRow workAuth={workAuth} key={workAuth.projId} openEdit={openEdit} i={i} />
            ))}
          </DataTable>
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    padding: 10
  },
  scrollView: {
    width: '100%',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  list: {
    width: '80%'
  }
});
