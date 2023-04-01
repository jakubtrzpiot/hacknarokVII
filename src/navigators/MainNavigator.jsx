import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Home from '../screens/Home';
import Pomodoro from '../screens/Pomodoro';
import Challenges from '../screens/Challenges';
import Profile from '../screens/Profile';
import Icon from 'react-native-vector-icons/dist/Feather';

const Tab = createMaterialBottomTabNavigator();

const MainNavigator = () => {
  return (
    <Tab.Navigator labeled={false}>
      <Tab.Screen
        name="Home"
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="calendar" size={20} color="#900" />
          ),
        }}
        component={Home}
      />
      <Tab.Screen
        name="Pomodoro"
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="clock" size={20} color="#900" />
          ),
        }}
        component={Pomodoro}
      />
      <Tab.Screen
        name="Challenges"
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="award" size={20} color="#900" />
          ),
        }}
        component={Challenges}
      />
      <Tab.Screen
        name="Profile"
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="user" size={20} color="#900" />
          ),
        }}
        component={Profile}
      />
    </Tab.Navigator>
  );
};

export default MainNavigator;
