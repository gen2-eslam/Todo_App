import { Pressable } from "react-native";
import { CheckSquare, Square } from "react-native-feather";

const CustomCheckBox = ({ isChecked, onPress }: { isChecked: boolean; onPress: () => void }) => {
  return (
    <Pressable onPress={onPress}>
      {isChecked ? <CheckSquare color="green" /> : <Square color="red" />}
    </Pressable>
  );
};

export default CustomCheckBox;
