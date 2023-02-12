import { BottomTabBar } from './BottomBar'
import { SearchScreen } from '../Search'
import { MainScreen } from '../Main'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { SettingsScreen } from '../Settings'
import { LibraryScreen } from '../Library'
import { Icon } from '@ui-kitten/components'

const { Navigator, Screen } = createBottomTabNavigator();

export const TabNavigator = () => (
  <Navigator tabBar={props => {
    return <BottomTabBar {...props} />
  }}>
    <Screen name='Main' component={MainScreen} options={() => <Icon name='person-outline'/>}/>
    <Screen name='Search' component={SearchScreen} options={() => <Icon name='bell-outline'/>}/>
    <Screen name='Settings' component={SettingsScreen} options={() => <Icon name='email-outline'/>}/>
    <Screen name='Library' component={LibraryScreen} options={() => <Icon name='email-outline'/>}/>
  </Navigator>
);

