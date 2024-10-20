import React, {useState} from 'react';
import {
  View,
  FlatList,
  Button,
  Modal,
  TextInput,
  Text,
  StyleSheet,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {addTask} from '../redux/taskSlice';

const TasksScreen: React.FC = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state: any) => state.tasks.tasks);
  const [modalVisible, setModalVisible] = useState(false);
  const [taskDescription, setTaskDescription] = useState('');

  const handleAddTask = () => {
    if (taskDescription.trim()) {
      dispatch(addTask(taskDescription));
      setTaskDescription('');
      setModalVisible(false);
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={tasks}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <Text style={styles.taskText}>{item.description}</Text>
        )}
      />
      <Button title="Add New Task" onPress={() => setModalVisible(true)} />
      <Modal visible={modalVisible} transparent={true}>
        <View style={styles.modalContainer}>
          <TextInput
            placeholder="Task Description"
            value={taskDescription}
            onChangeText={setTaskDescription}
            style={styles.input}
          />
          <View style={styles.buttonContainer}>
            <Button title="Add" onPress={handleAddTask} />
            <Button title="Cancel" onPress={() => setModalVisible(false)} />
          </View>
          {taskDescription.trim() === '' && (
            <Text style={styles.errorText}>
              Task description cannot be empty!
            </Text>
          )}
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  taskText: {
    fontSize: 18,
    marginVertical: 5,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'white',
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  errorText: {
    color: 'red',
    marginTop: 10,
  },
});

export default TasksScreen;
