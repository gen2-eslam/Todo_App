import { Text } from "react-native"
import { View } from "react-native"
import { responsiveFontSize } from "../../../utils/helper/responsive_text"
import { Colors } from "../../../utils/colors"
import TaskListModel from "../../../types/model/task_list_model"

export const TitleWithDesctiption = ({task}: {task: TaskListModel}) => {
    return(
        <View style = {{width: '70%'}}>
            <Text style={{fontSize: responsiveFontSize(18), fontWeight: 'bold', color: Colors.black}}>{task.title}</Text>
             <Text style={{fontSize: responsiveFontSize(14), color: Colors.secondary}}>{task.description}</Text>
        </View>
    )
}