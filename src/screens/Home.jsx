import {useState} from 'react';
import {View, ScrollView, Pressable} from 'react-native';
import CalendarStrip from 'react-native-calendar-strip';
import Tasks from '../components/Home/Tasks';

const Home = () => {
  const [selectedDate, setSelectedDate] = useState(
    new Date().toJSON().split('T')[0],
  );
  return (
    <View className="flex-1 bg-black">
      <View>
        <Pressable
          onPress={() =>
            setSelectedDate(new Date().toJSON().split('T')[0])
          }></Pressable>
        <CalendarStrip
          scrollable
          style={{height: 150, paddingTop: 20, paddingBottom: 10}}
          selectedDate={selectedDate}
          calendarHeaderStyle={{color: 'white'}}
          dateNumberStyle={{color: 'white'}}
          dateNameStyle={{color: 'white'}}
          onDateSelected={date => setSelectedDate(date.format('YYYY-MM-DD'))}
          highlightDateNumberStyle={{color: '#7f5a83'}}
          highlightDateNameStyle={{color: '#7f5a83'}}
          iconContainer={{flex: 0.1}}
          iconStyle={{width: 0, height: 0}}
        />
      </View>
      <Tasks date={selectedDate} />
    </View>
  );
};

export default Home;
