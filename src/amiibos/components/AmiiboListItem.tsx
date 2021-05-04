import React, { useState } from 'react';
import { Divider, List, Switch } from 'react-native-paper';
import { AmiiboModel } from '../models/AmiiboModel';

export interface AmiiboListItemProps {
  amiibo: AmiiboModel;
}

export default function AmiiboListItem(props: AmiiboListItemProps) {
  const [checked, setChecked] = useState(false);

  return (
    <>
      <List.Item
        title={props.amiibo.displayName}
        description={props.amiibo.series.displayName}
        right={() => <Switch value={checked} onValueChange={() => setChecked(!checked)} />}
      />
      <Divider />
    </>
  );
}