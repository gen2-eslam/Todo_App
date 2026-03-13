import { View, StyleSheet, Text } from "react-native"
import { responsiveFontSize } from "../../../utils/helper/responsive_text"
import { Colors } from "../../../utils/colors"
import TaskListModel from "../../../types/model/task_list_model"
import { AnimatedCircularProgress } from "react-native-circular-progress"
import { TitleWithDesctiption } from "./title_with_description"

export const ListItemCard = ({item}: {item: TaskListModel}) => {
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
