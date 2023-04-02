import {View, Pressable, Text, TextInput} from 'react-native';

const LogIn = () => {
  return (
    <View className="flex-1 flex gap-y-6 items-center justify-center bg-black p-6">
      <TextInput
        className="w-[100%] px-8 py-6 mx-6 my-1 rounded-3xl bg-accent"
        placeholder="Email"
      />

      <TextInput
        className="w-[100%] px-8 py-6 mx-6 my-1 rounded-3xl bg-accent"
        placeholder="Password"
      />
      <Pressable className="w-[60%] px-8 py-6 mx-6 my-1 rounded-3xl bg-accent">
        <Text>Log In</Text>
      </Pressable>
    </View>
  );
};

export default LogIn;
