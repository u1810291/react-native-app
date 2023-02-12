import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { TabNavigator } from './TabNavigator'
//
// export const AppNavigation = () => (
//   <NavigationContainer>
//     <TabNavigator/>
//   </NavigationContainer>
// );

import { StyleSheet } from 'react-native';
import { BottomNavigation, BottomNavigationTab, Icon } from '@ui-kitten/components';

const PersonIcon = (props) => (
  <Icon {...props} name='person-outline'/>
);

const BellIcon = (props) => (
  <Icon {...props} name='bell-outline'/>
);

const EmailIcon = (props) => (
  <Icon {...props} name='email-outline'/>
);

const useBottomNavigationState = (initialState = 0) => {
  const [selectedIndex, setSelectedIndex] = React.useState(initialState);
  return { selectedIndex, onSelect: setSelectedIndex };
};

export const AppNavigation = () => {

  const topState = useBottomNavigationState();
  const bottomState = useBottomNavigationState();

  return (
    <React.Fragment>
      <BottomNavigation style={styles.bottomNavigation} {...topState}>
        <BottomNavigationTab title='USERS' icon={PersonIcon}/>
        <BottomNavigationTab title='ORDERS' icon={BellIcon}/>
        <BottomNavigationTab title='TRANSACTIONS' icon={EmailIcon}/>
      </BottomNavigation>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  bottomNavigation: {
    marginVertical: 8,
  },
});