import { Text, View, StyleSheet } from 'react-native';
import TaskListModel from '../../types/model/task_list_model';
import { responsiveFontSize } from '../../utils/helper/responsive_text';
import { Colors } from '../../utils/colors';
import TaskInfoSection from './task_info_section';
const HeaderSection = ({ task }: { task: TaskListModel }) => {
  return (
    <View style={styles.headerContainer}>
      <TaskInfoSection task={task} />
      <Text style={{ color: Colors.background, fontSize: responsiveFontSize(30) }}>
        {task.taskCount} Tasks
      </Text>
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
    alignItems: 'baseline',
    backgroundColor: Colors.primary,
    borderRadius: 20,
  },
});
