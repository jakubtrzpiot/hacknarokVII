import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';

const Challenges = () => {
  return (
    <View className="flex-col flex-1 items-center justify-center bg-black gap-y-8">
      <View>
        <Text className="text-3xl">Hot Streak</Text>
      </View>
      <Text className="text-4xl">Daily Challanges</Text>
      <Icon name="trophy-outline" size={300} color="#7f5a83" />
    </View>
  );
};

export default Challenges;
