import React, {useState} from 'react';
import {View, Pressable, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const TaskTile = ({taskName, description}) => {
  const [starColor, setStarColor] = useState('black');
  const [checkColor, setCheckColor] = useState('black');
  return (
    <View className="flex flex-row justify-between px-6 py-4 mb-3 rounded-3xl border-4 border-accent/80 bg-accent/60">
      <View className="gap-y-1 w-64">
        <Text className="text-xl font-bold text-black">{taskName}</Text>
        <Text className="text-white/80">{description}</Text>
      </View>
      <View className="gap-y-8">
        <Pressable
          onPress={() =>
            starColor == 'black' ? setStarColor('#dc0') : setStarColor('black')
          }>
          <Icon name="star" size={28} color={starColor} />
        </Pressable>
        <Pressable
          onPress={e =>
            checkColor == 'black'
              ? setCheckColor('#090')
              : setCheckColor('black')
          }>
          <Icon name="check" size={28} color={checkColor} />
        </Pressable>
      </View>
    </View>
  );
};

export default TaskTile;
