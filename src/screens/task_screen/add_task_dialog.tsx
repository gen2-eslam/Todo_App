import React, { useState, useCallback } from 'react';
import { View } from 'react-native';
import { BottomSheet, ButtonGroup } from '@rneui/themed';
import { TimePickerModal, DatePickerModal } from 'react-native-paper-dates';

import { Colors } from '../../utils/colors';
import { Button } from '@rneui/base';
import AddIcon from '../../componant/add_icon';

import { CustomInput } from '../../componant/Custom_Input';
import { Type, FileText } from 'react-native-feather';
import PickupTime from './pickup_time';
import PickupDate from './pickup_date';

import { useDispatch } from 'react-redux';
import TaskAxios from '../../axios/task_axios';
import { convertDateToUTC } from '../../utils/helper/convert_date_to_unix';
import { Priority, Status } from '../../types/enums/enum';
import { CreateTaskModel } from '../../types/model/create_task_model';
import { AppDispatch } from '../../redux/store';
import { addTaskToTaskList } from '../../redux/slice';

const AddTaskButtomSheet = ({
  isVisible,
  setIsVisible,
  taskListId,
}: {
  isVisible: boolean;
  setIsVisible: (isVisible: boolean) => void;
  taskListId: string;
}) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState(0);
  const [dueDate, setDueDate] = useState<Date | undefined>();
  const [dueTime, setDueTime] = useState<Date | undefined>();
  const dispatch = useDispatch<AppDispatch>();
  const addTask = () => {
    const task: CreateTaskModel = {
      taskListId: taskListId,
      title: title,
      description: description,
      priority: Priority[priority],
      dueDate: convertDateToUTC({ date: dueDate, time: dueTime }),
      status: Status.OPEN,
    };
    TaskAxios.createTask(task)
      .then((res) => {
        dispatch(addTaskToTaskList({ taskListId, task: res }));
        setIsVisible(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <BottomSheet
      isVisible={isVisible}
      animationType="fade"
      onBackdropPress={() => setIsVisible(false)}
      containerStyle={{
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
      }}
    >
      <View style={{ padding: 20, backgroundColor: 'white', gap: 10 }}>
        <CustomInput
          taskListName={title}
          setTaskListName={setTitle}
          placeholder="Title"
          icon={<Type color={Colors.primary} />}
        />
        <CustomInput
          taskListName={description}
          setTaskListName={setDescription}
          placeholder="Description"
          icon={<FileText color={Colors.primary} />}
        />
        <ButtonGroup
          buttons={['LOW', 'MEDIUM', 'HIGH']}
          selectedButtonStyle={{ backgroundColor: Colors.primary }}
          selectedTextStyle={{ color: Colors.background }}
          containerStyle={{ borderRadius: 50, marginBottom: 20 }}
          textStyle={{ color: Colors.primary }}
          selectedIndex={priority}
          onPress={(value) => {
            setPriority(value);
          }}
        />
        <PickupTime dueTime={dueTime} setDueTime={setDueTime} />
        <PickupDate dueDate={dueDate} setDueDate={setDueDate} />
        <Button
          title="Add Task"
          color={Colors.primary}
          titleStyle={{ textAlign: 'center', fontWeight: 'bold' }}
          icon={<AddIcon color={Colors.background} />}
          buttonStyle={{ borderRadius: 10, marginBottom: 10 }}
          onPress={addTask}
        />
        <Button
          title="Cancel"
          color={Colors.pink}
          titleStyle={{ textAlign: 'center', fontWeight: 'bold' }}
          buttonStyle={{ borderRadius: 10 }}
          onPress={() => {
            setIsVisible(false);
          }}
        />
      </View>
    </BottomSheet>
  );
};

export default AddTaskButtomSheet;
