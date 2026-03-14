import { Colors } from "../../utils/colors";
import { useState } from "react";
import { Pressable, Text } from "react-native";
export const AddButton = () => {
  const handleAdd = () => {
    console.log('Add');
  };
  const [isRight, setIsRight] = useState(true);
  return (
    <Pressable
      onPress={handleAdd}
      onLongPress={() => setIsRight(!isRight)}
      style={{
        position: 'absolute',
        alignSelf: 'flex-end',
        right: isRight ? '5%' : null,
        left: !isRight ? '5%' : null,
        bottom: '5%',
        backgroundColor: Colors.primary,
        borderRadius: 50,
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
      }}
    >
      <Text style={{ color: Colors.background }}>Add Task</Text>
      {/* <AddIcon color={Colors.background} /> */}
    </Pressable>
  );
};
