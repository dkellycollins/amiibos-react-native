import React from 'react';
import { Appbar } from 'react-native-paper';

export default function AppHeader(props: any) {
  const onMenuPress = () => {
    props.scene.descriptor.navigation.openDrawer();
  };

  return (
    <Appbar.Header>
      <Appbar.Action icon="menu" onPress={onMenuPress} />
      <Appbar.Content title="Amiibos"></Appbar.Content>
    </Appbar.Header>
  )
}