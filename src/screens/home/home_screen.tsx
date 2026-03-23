import { ImageBackground, TouchableOpacity, View, ActivityIndicator } from 'react-native';
import { Text, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useEffect, useState } from 'react';
import { Colors } from '../../utils/colors';
import { responsiveFontSize } from '../../utils/helper/responsive_text';
import { Link } from '@react-navigation/native';
import { ListItemCard } from './componant/list_item_card';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../redux/store';
import { fetchTaskList } from '../../redux/slice';
import { RootState } from '../../redux/store';
import FabAddTask from './componant/fab_add_task';
import AddTaskListDialog from './componant/add_task_list_Dialog';

const HomeScreen = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { taskLists, isLoading, error } = useSelector((state: RootState) => state.taskList);
  useEffect(() => {
    dispatch(fetchTaskList());
  }, [dispatch]);

  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  return (
    <ImageBackground
      source={require('../../../assets/images/backgrond.png')}
      style={{ height: '100%', width: '100%' }}
    >
      <SafeAreaView style={{ flex: 1 }}>
        {isLoading ? (
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator size="large" color={Colors.primary} />
          </View>
        ) : error ? (
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>{error}</Text>
          </View>
        ) : (
          <HomeScreenContent taskLists={taskLists} />
        )}
        <AddTaskListDialog isVisible={isOverlayVisible} setIsVisible={setIsOverlayVisible} />

        <FabAddTask onPress={() => setIsOverlayVisible(true)} />
      </SafeAreaView>
    </ImageBackground>
  );
};
//bb`

const HomeScreenContent = ({ taskLists }: { taskLists: any }) => {
  return (
    <>
      <View style={{ flexDirection: 'row', margin: '5%', alignItems: 'baseline' }}>
        <Text
          style={{
            fontSize: responsiveFontSize(24),
            fontWeight: 'bold',
            color: Colors.black,
            paddingRight: 10,
          }}
        >
          {' '}
          Tasks Group
        </Text>
        <Text
          style={{ fontSize: responsiveFontSize(14), fontWeight: '700', color: Colors.primary }}
        >
          {' '}
          {taskLists.length}
        </Text>
      </View>
      <FlatList
        data={taskLists}
        renderItem={({ item }) => {
          return (
            <Link screen="taskScreen" params={{ task: item }}>
              <ListItemCard item={item} />
            </Link>
          );
        }}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>No Task Lists Found</Text>
          </View>
        }
        ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
        contentContainerStyle={{ paddingBottom: 50, margin: '5%' }}
      />
    </>
  );
};

export default HomeScreen;
