import { ImageBackground, StyleSheet, Text, TextInput, View, Modal } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '../../../utils/colors';
import { useState } from 'react';
import { responsiveFontSize } from '../../../utils/helper/responsive_text';
import ArrowRight from '../../../componant/arrow_right';
import { Type, FileText } from 'react-native-feather';
import { Button } from '@rneui/base';
import AddIcon from '../../../componant/add_icon';
import { Overlay } from '@rneui/themed';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../redux/store';
import { CreateTaskListRequest } from '../../../types/model/create_task_list_request';
import TaskListAxios from '../../../axios/task_list_axios';
import TaskListMapper from '../../../types/mapper/task_list_mapper';
import { addTaskList } from '../../../redux/slice';
import { CustomInput } from '../../../componant/Custom_Input';
const AddTaskListDialog = ({
  isVisible,
  setIsVisible,
}: {
  isVisible: boolean;
  setIsVisible: (isVisible: boolean) => void;
}) => {
  const [taskList, setTaskList] = useState<CreateTaskListRequest>({ title: '', description: '' });
  const dispatch = useDispatch<AppDispatch>();
  const handleAddTaskList = () => {
    TaskListAxios.addTaskList(taskList).then((data) => {
      dispatch(addTaskList(TaskListMapper.toEntity(data)));
      setIsVisible(false);
    });
  };

  return (
    <Overlay
      isVisible={isVisible}
      animationType="fade"
      overlayStyle={styles.modal}
      onBackdropPress={() => setIsVisible(false)}
    >
      <TaskForm taskList={taskList} setTaskList={setTaskList} />
      <Button
        title="Add Task List"
        color={Colors.primary}
        titleStyle={{ textAlign: 'center', fontWeight: 'bold' }}
        icon={<AddIcon color={Colors.background} />}
        buttonStyle={styles.button}
        onPress={handleAddTaskList}
      />
      <Button
        title="Cancel"
        color={Colors.primary}
        titleStyle={{ textAlign: 'center', fontWeight: 'bold' }}
        buttonStyle={[styles.button, { backgroundColor: Colors.pink }]}
        onPress={() => {
          setIsVisible(false);
        }}
      />
    </Overlay>
  );
};

export const TaskForm = ({
  taskList,
  setTaskList,
}: {
  taskList: CreateTaskListRequest;
  setTaskList: (taskList: CreateTaskListRequest) => void;
}) => {
  return (
    <View>
      <CustomInput
        taskListName={taskList.title}
        setTaskListName={(title) => setTaskList({ ...taskList, title })}
        placeholder="Title"
        icon={<Type color={Colors.primary} />}
      />
      <CustomInput
        taskListName={taskList.description}
        setTaskListName={(description) => setTaskList({ ...taskList, description })}
        placeholder="Description"
        icon={<FileText color={Colors.primary} />}
      />
    </View>
  );
};


const styles = StyleSheet.create({
  modal: {
    margin: '10%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: Colors.primary,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  appBarTitle: {
    fontSize: responsiveFontSize(16),
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
    color: Colors.background,
  },
 
  button: {
    borderRadius: 50,
    width: '100%',
    marginTop: 20,
  },
});
export default AddTaskListDialog;
