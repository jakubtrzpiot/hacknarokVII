import React from 'react';
import { View, Text } from 'react-native';

const Header = () => {
  let date = new Date();
  let WeekDay = date.toLocaleString('pl-PL', { weekday: 'long' }).split(',')[0];
  WeekDay = WeekDay[0].toUpperCase() + WeekDay.substring(1, WeekDay.length);
  let Month = date.toLocaleString('pl-PL', { month: 'long' }).split(',')[0];
  return (
    <View className="flex-col justify-between items-center bg-prussianblue h-screen h-2/5 p-3">
      <View className="flex-1 items-center justify-center w-screen w-4/5 border-b border-white/20 p-1">
        <Text className="text-3xl text-white">{WeekDay}</Text>
      </View>
      <View className="flex-1 items-end justify-center">
        <Text className="text-sm text-white">{Month}</Text>
      </View>
      <View className="flex-row items-end justify-center"></View>
    </View>
  );
};

export default Header;
