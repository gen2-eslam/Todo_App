import { Button } from '@rneui/base';
import { DatePickerModal } from 'react-native-paper-dates';
import { Colors } from '../../utils/colors';
import { useCallback, useState } from 'react';

const PickupDate = ({
  dueDate,
  setDueDate,
}: {
  dueDate: Date | undefined;
  setDueDate: (dueDate: Date | undefined) => void;
}) => {
  const [open, setOpen] = useState(false);
  const onDismissSingle = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  const onConfirmSingle = useCallback(
    ({ date }: { date: Date | undefined }) => {
      setOpen(false);
      setDueDate(date);
    },
    [setOpen, setDueDate],
  );
  return (
    <>
      <Button
        title={dueDate ? dueDate.toLocaleDateString() : 'Pick Date'}
        type="outline"
        onPress={() => setOpen(true)}
        buttonStyle={{ borderRadius: 10, borderColor: Colors.primary }}
        titleStyle={{ color: Colors.primary }}
      />
      <DatePickerModal
        locale="en-US"
        mode="single"
        visible={open}
        onDismiss={onDismissSingle}
        date={dueDate}
        onConfirm={onConfirmSingle}
      />
    </>
  );
};

export default PickupDate;
