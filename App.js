import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry} from '@ui-kitten/components'
import { StyleSheet, View } from 'react-native';
import { default as theme } from './theme.json'
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { AppNavigation } from './View/Navigation/AppNavigation'
import { Menu } from './View/Menu/Menu'


export default () => (
  <>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider {...eva} theme={{ ...eva.dark, ...theme }}>
      <Menu />
      <AppNavigation />
    </ApplicationProvider>
  </>
);
