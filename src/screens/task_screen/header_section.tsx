import { Text, View, StyleSheet } from 'react-native';
import TaskListModel from '../../types/model/task_list_model';
import { responsiveFontSize } from '../../utils/helper/responsive_text';
import { Colors } from '../../utils/colors';
import TaskInfoSection from './task_info_section';
import { Trash2 } from 'react-native-feather';
import { Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { deleteTaskList } from '../../redux/slice';
import TaskListAxios from '../../axios/task_list_axios';
import { Snackbar } from 'react-native-snackbar';
const HeaderSection = ({ task }: { task: TaskListModel }) => {
  const deleteTask = async () => {
    try {
      const res = await TaskListAxios.deleteTaskList(task.id);
      dispatch(deleteTaskList(task.id));
      Snackbar.show({
        text: res['message'],
        duration: 2000,
      });
      navigation.goBack();
    } catch (error: any) {
      Snackbar.show({
        text: error.response.data['message'],
        duration: Snackbar.LENGTH_SHORT,
      });
    }
  };

  const navigation = useNavigation();
  const dispatch = useDispatch();
  return (
    <View style={styles.headerContainer}>
      <TaskInfoSection task={task} />
      <View style={styles.taskCountContainer}>
        <Text style={styles.taskCountText}>{task.taskCount} Tasks</Text>
        <Pressable onPress={deleteTask}>
          <Trash2 color={Colors.background} />
        </Pressable>
      </View>
    </View>
  );
};

export default HeaderSection;
const styles = StyleSheet.create({
  headerContainer: {
    height: '20%',
    margin: '5%',
    padding: '5%',
    gap: 20,
    backgroundColor: Colors.primary,
    borderRadius: 20,
  },
  taskCountText: {
    color: Colors.background,
    flex: 1,
    fontSize: responsiveFontSize(30),
  },
  taskCountContainer: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
