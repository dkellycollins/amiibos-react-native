import { DrawerHeaderProps, DrawerNavigationProp } from '@react-navigation/drawer/lib/typescript/src/types';
import React, { useState } from 'react';
import { Appbar, Portal } from 'react-native-paper';
import SelectAmiibosSeriesDialog from '../amiibos/components/SelectAmiibosSeriesDialog';

export interface AppHeaderProps {
  navigation: DrawerNavigationProp<any, any>
}

export default function AppHeader(props: AppHeaderProps) {
  const [settingDialogVisible, setSettingDialogVisible] = useState(false);

  const onMenuPress = () => props.navigation.openDrawer();;
  const onSettingsPress = () => setSettingDialogVisible(true);
  const onSelectSeries = (series: string) => {
    props.navigation.setParams({ series: series });
    setSettingDialogVisible(false);
  }
  const onDismissDialog = () => setSettingDialogVisible(false);

  return (
    <>
      <Appbar.Header>
        <Appbar.Action icon="menu" onPress={onMenuPress} />
        <Appbar.Content title="Amiibos"></Appbar.Content>
        <Appbar.Action icon="cog" onPress={onSettingsPress} />
      </Appbar.Header>
      <Portal>
        <SelectAmiibosSeriesDialog
          visible={settingDialogVisible}
          onSelectSeries={onSelectSeries}
          onDismiss={onDismissDialog}
        />
      </Portal>
    </>
  )
}