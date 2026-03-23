import { Button } from '@rneui/base';
import { DatePickerModal } from 'react-native-paper-dates';
import { Colors } from '../../utils/colors';
import { useCallback, useState } from 'react';

const PickupDate = () => {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState<Date | undefined>(new Date());
  const onDismissSingle = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  const onConfirmSingle = useCallback(
    ({ date }: { date: Date | undefined }) => {
      setOpen(false);
      setDate(date);
    },
    [setOpen, setDate],
  );
  return (
    <>
      <Button
        title="Pick Date"
        type="outline"
        onPress={() => setOpen(true)}
        buttonStyle={{ borderRadius: 10, borderColor: Colors.primary }}
        titleStyle={{ color: Colors.primary }}
      />
      <DatePickerModal
        locale="en"
        mode="single"
        visible={open}
        onDismiss={onDismissSingle}
        date={date}
        onConfirm={onConfirmSingle}
      />
    </>
  );
};

export default PickupDate;