import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/dist/EvilIcons';

const Challenges = () => {
  return (
    <View className="flex-col items-center justify-center my-10">
      <Text className="text-4xl">Daily Challanges</Text>
      <Icon name="trophy" size={400} color="#900" />
    </View>
  );
};

export default Challenges;
