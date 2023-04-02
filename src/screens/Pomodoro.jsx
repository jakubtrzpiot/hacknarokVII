import { useState } from 'react';
import { Text, View, Pressable } from 'react-native';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';
import Icon from 'react-native-vector-icons/dist/Feather';

const Pomodoro = () => {
  const [play, setPlay] = useState(false);

  return (
    <View className="flex-1 items-center justify-center gap-y-10">
      <CountdownCircleTimer
        isPlaying={play}
        duration={1500}
        size={300}
        strokeWidth={40}
        trailStrokeWidth={40}
        strokeLinecap={'butt'}
        colors={['#004777']}
        colorsTime={[1]}
      >
        {({ remainingTime }) => (
          <Text className="text-5xl font-bold">
            {Math.floor(remainingTime / 60)}:
            {(remainingTime % 60 < 10 ? '0' : null) + (remainingTime % 60)}
          </Text>
        )}
      </CountdownCircleTimer>
      <Pressable onPress={() => setPlay(!play)}>
        <Icon name={!play ? 'play' : 'pause'} size={60} color="#900" />
      </Pressable>
    </View>
  );
};
export default Pomodoro;
