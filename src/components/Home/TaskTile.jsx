import React, {useState} from 'react';
import {View, Pressable, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const TaskTile = ({taskName, description}) => {
  const [starColor, setStarColor] = useState(null);
  const [checkColor, setCheckColor] = useState(null);
  return (
    <View className="flex flex-row justify-between p-6 mb-3 rounded-3xl bg-secondary">
      <View className="gap-y-1 w-64">
        <Text className="text-xl font-bold text-black">{taskName}</Text>
        <Text>{description}</Text>
      </View>
      <View className="gap-y-8">
        <Pressable
          onPress={() =>
            starColor == null ? setStarColor('#dc0') : setStarColor(null)
          }>
          <Icon name="star" size={28} color={starColor} />
        </Pressable>
        <Pressable
          onPress={e =>
            checkColor == null ? setCheckColor('#090') : setCheckColor(null)
          }>
          <Icon name="check" size={28} color={checkColor} />
        </Pressable>
      </View>
    </View>
  );
};

export default TaskTile;
