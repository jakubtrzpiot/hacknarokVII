import React, {useState, useEffect} from 'react';
import {ActivityIndicator, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import LogIn from './screens/LogIn';
import MainNavigator from './navigators/MainNavigator';

const App = () => {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState(null);

  // Handle user state changes
  const onAuthStateChanged = user => {
    setUser(user);
    if (initializing) setInitializing(false);
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing)
    return <ActivityIndicator className="flex-1" size={70} color="#fff" />;

  // if (!user) {
  //   return <LogIn />;
  // }

  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <MainNavigator />
    </NavigationContainer>
  );
};

export default App;
