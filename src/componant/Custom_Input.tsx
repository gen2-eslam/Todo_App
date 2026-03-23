import { StyleSheet, TextInput, View } from 'react-native';
import { Colors } from '../utils/colors';
import { responsiveFontSize } from '../utils/helper/responsive_text';

export const CustomInput = ({
  taskListName,
  setTaskListName,
  placeholder,
  icon,
}: {
  taskListName: string;
  setTaskListName: (taskListName: string) => void;
  placeholder: string;
  icon: React.ReactNode;
}) => {
  return (
    <View style={styles.inputContainer}>
      {icon}
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        multiline
        placeholderTextColor={Colors.secondary}
        value={taskListName}
        onChangeText={setTaskListName}
      />
    </View>
  );
};


const styles = StyleSheet.create({
   inputContainer: {
    width: '100%',
    borderRadius: 50,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.primary,
    paddingHorizontal: 10,
    marginTop: 20,
  },
  input: {
    fontSize: responsiveFontSize(16),
    color: Colors.black,
    flex: 1,
  },
});