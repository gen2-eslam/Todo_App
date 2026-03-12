import {ImageBackground, View } from "react-native";
import {Text ,StyleSheet,FlatList}  from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import TaskEntity from '../../types/entity/task_entity';
import {useEffect, useState} from 'react';
import {fakeTaskLists} from '../../types/fake_data';
import TaskListModel from '../../types/model/task_list_model';
import { Colors } from "../../utils/colors";

import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { responsiveFontSize } from "../../utils/helper/responsive_text";


const HomeScreen = () =>{

    const [tasks,setTasks] = useState<TaskListModel[]>([]);

useEffect(() => {
    setTasks(fakeTaskLists);
},[])
    return(
        <SafeAreaView style={{backgroundColor: Colors.tabBar}} >
          <ImageBackground source={require('../../../assets/images/backgrond.png')}>
           <View style = {{flexDirection:"row" ,margin: "5%", alignItems: 'baseline'}}>
             <Text style={{fontSize: responsiveFontSize(24), fontWeight: 'bold', color: Colors.black , paddingRight: 10}}> Tasks Group</Text>
           <Text style={{fontSize: responsiveFontSize(14), fontWeight: '700', color: Colors.primary}}> {tasks.length}</Text>
           </View>
            <FlatList
            data={tasks}
            renderItem={({item}) =>{
                return(
                    <ListItemCard item={item}/>
                )
            }}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{paddingBottom: "20%"}}
            />
          </ImageBackground>
            </SafeAreaView>
    )
}

const ListItemCard = ({item}: {item: TaskListModel}) => {
    return(
        <View style={styles.listItem}>

         <TitleWithDesctiption task={item} />
         <NumOfTasks task={item} />
      <AnimatedCircularProgress
  size={50}
  width={5}
  fill={item.progress}
  tintColor="#F478B8"
  backgroundColor="#FFE4F2" >
    {
        (fill: number) => (
                <Text style={{fontSize: responsiveFontSize(14), fontWeight: '400', color: Colors.primary}}>{fill.toFixed(0)}%</Text>
        
        )
    }
  </AnimatedCircularProgress>
        </View>
    )
}

const TitleWithDesctiption = ({task}: {task: TaskListModel}) => {
    return(
        <View style = {{width: '70%'}}>
            <Text style={{fontSize: responsiveFontSize(18), fontWeight: 'bold', color: Colors.black}}>{task.title}</Text>
             <Text style={{fontSize: responsiveFontSize(14), color: Colors.secondary}}>{task.description}</Text>
        </View>
    )
}
const NumOfTasks = ({task}: {task: TaskListModel}) => {
    return(
        <View style = {{width: '15%', alignItems: 'center'}}>
            <Text style={{fontSize: responsiveFontSize(18), fontWeight: 'bold', color: Colors.black}}>{task.tasks.length}</Text>
             <Text style={{fontSize: responsiveFontSize(14), color: Colors.secondary}}>Tasks</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    listItem: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        margin: 10,
        justifyContent: 'space-between',
        flexDirection: 'row',
        borderRadius: 25,
        backgroundColor: Colors.background,
        shadowColor: Colors.primary,
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 5,
        
    },
})



export default HomeScreen;