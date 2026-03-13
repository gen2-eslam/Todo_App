import { Text } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { responsiveFontSize } from "../../utils/helper/responsive_text"
import { Colors } from "../../utils/colors"
import TaskListModel from "../../types/model/task_list_model"

const TaskScreen = ({task}: {task: TaskListModel}) => {
    return(
        <SafeAreaView>
            <Text style={{fontSize: responsiveFontSize(24), fontWeight: 'bold', color: Colors.black}}>TaskScreen</Text>
        </SafeAreaView>
    )
}

export default TaskScreen;