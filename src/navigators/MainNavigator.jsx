import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Home from '../screens/Home';
import Pomodoro from '../screens/Pomodoro';
import Challenges from '../screens/Challenges';
import Profile from '../screens/Profile';
import Icon from 'react-native-vector-icons/dist/Feather';

const Tab = createMaterialBottomTabNavigator();

const MainNavigator = () => {
  return (
    <Tab.Navigator
      labeled={false}
      activeColor="#000"
      inactiveColor="#000"
      barStyle={{backgroundColor: '#000', tabBarColor: '#000'}}>
      <Tab.Screen
        name="Home"
        options={{
          tabBarIcon: () => <Icon name="calendar" size={30} />,
        }}
        component={Home}
      />
      <Tab.Screen
        name="Pomodoro"
        options={{
          tabBarColor: '#fff',
          tabBarIcon: () => <Icon name="clock" size={30} />,
        }}
        component={Pomodoro}
      />
      <Tab.Screen
        name="Challenges"
        options={{
          tabBarIcon: () => <Icon name="award" size={30} />,
        }}
        component={Challenges}
      />
      <Tab.Screen
        name="Profile"
        options={{
          tabBarIcon: () => <Icon name="user" size={30} />,
        }}
        component={Profile}
      />
    </Tab.Navigator>
  );
};

export default MainNavigator;
