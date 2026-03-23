import React, { useState, useCallback } from 'react';
import { View } from 'react-native';
import { BottomSheet, ButtonGroup } from '@rneui/themed';
import { TimePickerModal, DatePickerModal } from 'react-native-paper-dates';

import { Colors } from '../../utils/colors';
import { Button } from '@rneui/base';
import AddIcon from '../../componant/add_icon';
import { TaskForm } from '../home/componant/add_task_list_Dialog';

import { CustomInput } from '../../componant/Custom_Input';
import { Type, FileText } from 'react-native-feather';
import PickupTime from './pickup_time';
import PickupDate from './pickup_date';

const AddTaskButtomSheet = ({
  isVisible,
  setIsVisible,
}: {
  isVisible: boolean;
  setIsVisible: (isVisible: boolean) => void;
}) => {


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
          taskListName=""
          setTaskListName={(title) => {}}
          placeholder="Title"
          icon={<Type color={Colors.primary} />}
        />
        <CustomInput
          taskListName=""
          setTaskListName={(title) => {}}
          placeholder="Description"
          icon={<FileText color={Colors.primary} />}
        />
        <ButtonGroup
          buttons={['LOW', 'MEDIUM', 'HIGH']}
          selectedButtonStyle={{ backgroundColor: Colors.primary }}
          selectedTextStyle={{ color: Colors.background }}
          containerStyle={{ borderRadius: 50, marginBottom: 20 }}
          textStyle={{ color: Colors.primary }}
          selectedIndex={0}
          onPress={(value) => {
            console.log(value);
          }}
        />
       <PickupTime/>
       <PickupDate/>
        <Button
          title="Add Task List"
          color={Colors.primary}
          titleStyle={{ textAlign: 'center', fontWeight: 'bold' }}
          icon={<AddIcon color={Colors.background} />}
          buttonStyle={{ borderRadius: 10, marginBottom: 10 }}
          //   onPress={handleAddTaskList}
        />
        <Button
          title="Cancel"
          color={Colors.pink || '#FF69B4'}
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
