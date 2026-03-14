import { Colors } from '../../utils/colors';
import TaskListModel from '../../types/model/task_list_model';
import { View, Text } from 'react-native';
import { responsiveFontSize } from '../../utils/helper/responsive_text';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
const TaskInfoSection = ({ task }: { task: TaskListModel }) => {
  
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <TaskTitleWithDescription task={task} />
      <TaskProgress task={task} />
    </View>
  );
};
 const TaskProgress = ({ task }: { task: TaskListModel }) => (
    <AnimatedCircularProgress
      size={50}
      width={5}
      fill={task.progress}
      tintColor={Colors.pink}
      backgroundColor={Colors.background}
    >
      {(fill: number) => (
        <Text
          style={{
            fontSize: responsiveFontSize(14),
            fontWeight: '400',
            color: Colors.background,
          }}
        >
          {fill.toFixed(0)}%
        </Text>
      )}
    </AnimatedCircularProgress>
  );

const TaskTitleWithDescription = ({ task }: { task: TaskListModel }) => {
  return (
    <View style={{ flex: 1 }}>
      <Text style={{ color: Colors.background, fontSize: responsiveFontSize(20) }}>
        {task.title}
      </Text>
      <Text style={{ color: Colors.background, fontSize: responsiveFontSize(15) }}>
        {task.description}
      </Text>
    </View>
  );
};

export default TaskInfoSection;
