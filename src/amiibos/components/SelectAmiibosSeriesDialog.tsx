import React from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { Dialog, List } from 'react-native-paper';
import useAmiibosSeries from '../hooks/useAmiibosSeries';

export interface SelectAmiibosSeriesDialogProps {
  visible: boolean;
  onSelectSeries: (series: string) => void;
  onDismiss: () => void;
}

export default function SelectAmiibosSeriesDialog(props: SelectAmiibosSeriesDialogProps) {
  const series = useAmiibosSeries();

  return (
    <Dialog visible={props.visible} onDismiss={props.onDismiss}>
      <Dialog.Title>Select Series</Dialog.Title>
      <Dialog.Content>
        <FlatList
          data={[undefined, ...series]}
          renderItem={({ item }) => <List.Item title={item || 'All Amiibos'} onPress={() => props.onSelectSeries(item)} />}
          keyExtractor={item => item || 'All Amiibos'}
        />
      </Dialog.Content>
    </Dialog>
  )
}