import { DrawerScreenProps } from '@react-navigation/drawer';
import React from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { Appbar } from 'react-native-paper';
import AmiiboListItem from '../amiibos/components/AmiiboListItem';
import useAmiibos from '../amiibos/hooks/useAmiibos';

export interface AmiibosScreenProps extends DrawerScreenProps<any, any> {
  type: string;
}

export default function AmiibosScreen(props: AmiibosScreenProps) {
  const amiibos = useAmiibos({ series: props.route.params?.series });

  return (
    <>
      <FlatList
        data={amiibos}
        renderItem={({ item }) => (<AmiiboListItem amiibo={item} />)}
        keyExtractor={amiibo => amiibo.name}
      />
      <Appbar>
        <Appbar.Content title="Footer" />
      </Appbar>
    </>
  );
}