import { BottomNavigation, BottomNavigationTab, Icon } from '@ui-kitten/components'
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  bottomNavigation: {
    marginTop: 2,
  },
});

export const BottomTabBar = ({ navigation, state, ...props }) => {
  const tab = props.descriptors
  const tabs = Object.keys(tab)?.map((key) => <BottomNavigationTab key={key} icon={tab[key]?.options} title={tab[key]?.route?.name}/>)
  return(
    <BottomNavigation
      style={styles.bottomNavigation}
      selectedIndex={state?.index}
      onSelect={index => navigation?.navigate(state?.routeNames[index])}>
      {tabs}
    </BottomNavigation>
  )
};