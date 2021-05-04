import { DrawerScreenProps } from '@react-navigation/drawer';
import React from 'react';
import { FlatList } from 'react-native-gesture-handler';
import AmiiboListItem from '../amiibos/components/AmiiboListItem';
import useAmiibos from '../amiibos/hooks/useAmiibos';

export type AmiibosScreenProps = DrawerScreenProps<any, any>;

export default function AmiibosScreen(props: AmiibosScreenProps) {
  const amiibos = useAmiibos();

  return (
    <FlatList
      data={amiibos}
      renderItem={({ item }) => (<AmiiboListItem amiibo={item} />)}
      keyExtractor={amiibo => amiibo.name}
    />
  );
}