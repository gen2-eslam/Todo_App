import { Text, View, ImageBackground, StyleSheet, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '../../utils/colors';
import { responsiveFontSize } from '../../utils/helper/responsive_text';
import TaskItem from './task_item';
import { AddButton } from './add_button';
import HeaderSection from './header_section';
import AddTaskButtomSheet from './add_task_dialog';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import TaskEntity from '../../types/entity/task_entity';

const TaskScreen = ({ route }: { route: any }) => {
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  const taskListId: string = route.params.task.id;

  const taskList = useSelector((state: RootState) =>
    state.taskList.taskLists.find((tl) => tl.id.toString() === taskListId.toString()),
  );

  if (!taskList) {
    return null;
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground source={require('../../../assets/images/backgrond.png')} style={{ flex: 1 }}>
        <HeaderSection task={taskList} />
        <View style={styles.taskContainer}>
          <FlatList
            data={taskList.tasks}
            renderItem={({ item }: { item: TaskEntity }) => (
              <TaskItem task={item} taskListId={taskList.id} />
            )}
            ListEmptyComponent={
              <View style={styles.emptyContainer}>
                <Text style={styles.emptyText}>No tasks found</Text>
              </View>
            }
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={{ gap: 10 }}
          />
          <AddTaskButtomSheet
            taskListId={taskList.id}
            isVisible={isOverlayVisible}
            setIsVisible={setIsOverlayVisible}
          />
          <AddButton onPress={() => setIsOverlayVisible(true)} />
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
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: responsiveFontSize(16),
    color: Colors.black,
  },
});
