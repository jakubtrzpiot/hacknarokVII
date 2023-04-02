import {View, Pressable, Text} from 'react-native';

const Button = ({child, onPress}) => {
  return (
    <Pressable onPress={onPress}>
      <View>{child}</View>
    </Pressable>
  );
};
