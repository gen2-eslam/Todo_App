import { FAB } from '@rneui/base';
import AddIcon from '../../../componant/add_icon';
import { Colors } from '../../../utils/colors';

const FabAddTask = ({ onPress }: { onPress: () => void }) => {
  return (
    <FAB
      icon={<AddIcon color={Colors.background} />}
      color={Colors.primary}
      style={{ position: 'absolute', right: '5%', bottom: 10 }}
      onPress={onPress}
    />
  );
};

export default FabAddTask;
