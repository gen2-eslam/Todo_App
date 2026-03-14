import { Text, Pressable, View, ImageBackground, StyleSheet, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '../../utils/colors';
import TaskListModel from '../../types/model/task_list_model';
import { responsiveFontSize } from '../../utils/helper/responsive_text';
import TaskItem from './task_item';
import { AddButton } from './add_button';
import HeaderSection from './header_section';
const TaskScreen = ({ route }: { route: any }) => {
  const task: TaskListModel = route.params.task;
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground source={require('../../../assets/images/backgrond.png')} style={{ flex: 1 }}>
        <HeaderSection task={task} />
        <View style={styles.taskContainer}>
          <FlatList
            data={task.tasks}
            renderItem={({ item }) => <TaskItem task={item} />}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={{ gap: 10 }}
          />
          <AddButton />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default TaskScreen;
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
  taskContainer: {
    flex: 1,
    padding: '5%',
    borderRadius: 20,
  },
});

