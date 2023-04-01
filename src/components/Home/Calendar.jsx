import { View, StyleSheet } from 'react-native';
import CalendarStrip from 'react-native-calendar-strip';

const Calendar = () => (
  <View style={styles.container}>
    <CalendarStrip
      scrollable
      daySelectionAnimation={{
        type: 'border',
        duration: 2,
        borderWidth: 1,
        borderHighlightColor: 'white',
      }}
      style={{ height: 150, paddingTop: 20, paddingBottom: 10 }}
      selectedDate={new Date()}
      calendarHeaderStyle={{ color: 'white' }}
      calendarColor={'#0D324D'}
      dateNumberStyle={{ color: 'white' }}
      dateNameStyle={{ color: 'white' }}
      highlightDateNumberStyle={{ color: '#a188a6' }}
      highlightDateNameStyle={{ color: '#a188a6' }}
      disabledDateNameStyle={{ color: 'white' }}
      disabledDateNumberStyle={{ color: 'white' }}
      iconContainer={{ flex: 0.1 }}
    />
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1 },
});

export default Calendar;
