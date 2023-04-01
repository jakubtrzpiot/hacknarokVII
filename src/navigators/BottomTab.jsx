import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Home from '../screens/Home';
import Pomodoro from '../screens/Pomodoro';
import Challenges from '../screens/Challenges';
import Profile from '../screens/Profile';

const Tab = createMaterialBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Pomodoro" component={Pomodoro} />
      <Tab.Screen name="Challenges" component={Challenges} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default BottomTab;
