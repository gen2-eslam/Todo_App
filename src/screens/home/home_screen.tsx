import {ImageBackground, TouchableOpacity, View } from "react-native";
import {Text,FlatList}  from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useEffect, useState} from 'react';
import {fakeTaskLists} from '../../types/fake_data';
import TaskListModel from '../../types/model/task_list_model';
import { Colors } from "../../utils/colors";
import { responsiveFontSize } from "../../utils/helper/responsive_text";
import { useNavigation } from "@react-navigation/native";
import { ListItemCard } from "./componant/list_item_card";

const HomeScreen = () =>{

    const [tasks,setTasks] = useState<TaskListModel[]>([]);
    const navigation = useNavigation();
useEffect(() => {
    setTasks(fakeTaskLists);
},[])
    return(
        <SafeAreaView >

          <ImageBackground source={require('../../../assets/images/backgrond.png')} style={{height: "100%"}}>
           <View style = {{flexDirection:"row" ,margin: "5%", alignItems: 'baseline'}}>
             <Text style={{fontSize: responsiveFontSize(24), fontWeight: 'bold', color: Colors.black , paddingRight: 10}}> Tasks Group</Text>
           <Text style={{fontSize: responsiveFontSize(14), fontWeight: '700', color: Colors.primary}}> {tasks.length}</Text>
           </View>
           <View style={{height: "80%"}}>

            <FlatList
            data={tasks}
            renderItem={({item}) =>{
                return(
                   <TouchableOpacity onPress={() => {
                    navigation.navigate('taskScreen', {task: item})
                   }}
                   activeOpacity={0.0}
                   >
                   <ListItemCard item={item}/>
                   </TouchableOpacity>
                )
            }}
            
            keyExtractor={(item) => item.id}
            /> 
           </View>
 
          </ImageBackground>
            </SafeAreaView>
    )
}








export default HomeScreen;