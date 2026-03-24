import { Button } from '@rneui/base';
import { TimePickerModal } from 'react-native-paper-dates';
import { Colors } from '../../utils/colors';
import { useCallback, useState } from 'react';

const PickupTime = ({
  dueTime,
  setDueTime,
}: {
  dueTime: Date | undefined;
  setDueTime: (dueTime: Date | undefined) => void;
}) => {
  const [visible, setVisible] = useState(false);
  const onDismiss = useCallback(() => {
    setVisible(false);
  }, [setVisible]);

  const onConfirm = useCallback(
    ({ hours, minutes }: { hours: number; minutes: number }) => {
      setVisible(false);
      setDueTime(new Date(hours, minutes));
    },
    [setVisible, setDueTime],
  );
  return (
    <>
      <Button
        title={dueTime ? dueTime.toLocaleTimeString() : 'Pick Time'}
        type="outline"
        onPress={() => setVisible(true)}
        buttonStyle={{ borderRadius: 10, borderColor: Colors.primary }}
        titleStyle={{ color: Colors.primary }}
      />
      <TimePickerModal
        visible={visible}
        onDismiss={onDismiss}
        onConfirm={onConfirm}
        hours={12}
        minutes={14}
        label="Select time"
      />
    </>
  );
};

export default PickupTime;
