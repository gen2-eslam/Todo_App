import { Colors } from '../../utils/colors';
import TaskModel from '../../types/model/task_model';
import { View, Text, StyleSheet } from 'react-native';
import { responsiveFontSize } from '../../utils/helper/responsive_text';
import { Trash, Edit2 } from 'react-native-feather';
import CustomCheckBox from './custom_checkbox';
const TaskItem = ({ task }: { task: TaskModel }) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.taskContainer}>
        <Text style={styles.taskTitle}>
          {task.title}
        </Text>
        <Text style={styles.taskDescription}>
          {task.description}
        </Text>

        <Text style={styles.taskPriority}>
          {task.priority} <Text style={styles.taskPriorityText}>Priority</Text>
        </Text>
      </View>
      <View style={styles.actionContainer}>
        <Trash color="red" onPress={() => {}} />
        <Edit2 color="blue" onPress={() => {}} />

        <CustomCheckBox isChecked={true} onPress={() => {}} />
      </View>
    </View>
  );
};

export default TaskItem;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Colors.background,
    padding: 10,
    borderRadius: 20,
  },
  taskContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    flex: 1,
    gap: 5,
  },
  actionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  taskTitle: {
    color: Colors.black,
    fontSize: responsiveFontSize(20),
    fontWeight: 'bold',
  },
  taskDescription: {
    color: Colors.secondary,
    fontSize: responsiveFontSize(15),
  },
  taskPriority: {
    color: Colors.primary,
    fontSize: responsiveFontSize(15),
  },
  taskPriorityText: {
    color: Colors.pink,
    fontSize: responsiveFontSize(15),
  },
});
