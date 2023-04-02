import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/dist/EvilIcons';

const Profile = () => {
  const achievements = [
    {
      category: 'Daily Challenges',
      title: 'Fulfill 20 daily challenges.',
      icon: 'trophy',
    },
    {
      category: 'Daily Challenges',
      title: 'Get 10 day hot streak.',
      icon: 'trophy',
    },
    { category: 'Task Management', title: 'Pin a task.', icon: 'paperclip' },
    {
      category: 'Task Management',
      title: 'Bring to fruition your first task',
      icon: 'paperclip',
    },
    {
      category: 'Daily Challenges',
      title: 'Fulfill 10 daily challenges',
      icon: 'trophy',
    },
    {
      category: 'Productivity Streaks',
      title: 'Complete 5 tasks in a day',
      icon: 'gear',
    },
    {
      category: 'Productivity Streaks',
      title: 'Complete 10 tasks in a day',
      icon: 'gear',
    },
    {
      category: 'Productivity Streaks',
      title: 'Complete 20 tasks in a day',
      icon: 'gear',
    },
    {
      category: 'Task Management',
      title: 'Create a new category',
      icon: 'paperclip',
    },
    {
      category: 'Task Management',
      title: 'Add a due date to a task',
      icon: 'paperclip',
    },
  ];

  return (
    <View className="flex-col items-center justify-center my-10">
      <View>
        <Text className="text-3xl">Hot Streak</Text>
      </View>
      <View className="border-y-0 border-black w-screen items-center p-10">
        <Text className="text-3xl">Achievement</Text>
      </View>
      <ScrollView>
        {achievements.map((item, index) => (
          <View
            key={index}
            className="flex-row border-y-0 border-black w-screen items-center p-5 m-2"
          >
            <Icon name={item.icon} size={70} />
            <Text className="it">{item.title}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Profile;
