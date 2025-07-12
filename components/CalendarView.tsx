import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

interface CalendarViewProps {
  selectedDate: Date;
  onDateSelect: (date: Date) => void;
  viewMode: 'week' | 'month';
}

export default function CalendarView({ selectedDate, onDateSelect, viewMode }: CalendarViewProps) {
  const today = new Date();
  
  const getDaysInWeek = () => {
    const startOfWeek = new Date(selectedDate);
    startOfWeek.setDate(selectedDate.getDate() - selectedDate.getDay());
    
    const days = [];
    for (let i = 0; i < 7; i++) {
      const date = new Date(startOfWeek);
      date.setDate(startOfWeek.getDate() + i);
      days.push(date);
    }
    return days;
  };

  const formatDate = (date: Date) => {
    if (viewMode === 'week') {
      return {
        day: date.toLocaleDateString('en-US', { weekday: 'short' }),
        date: date.getDate().toString(),
      };
    }
    return {
      day: date.toLocaleDateString('en-US', { weekday: 'short' }),
      date: date.getDate().toString(),
    };
  };

  const isSelected = (date: Date) => {
    return date.toDateString() === selectedDate.toDateString();
  };

  const isToday = (date: Date) => {
    return date.toDateString() === today.toDateString();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.monthYear}>
        {selectedDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
      </Text>
      
      {viewMode === 'week' ? (
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.weekView}>
            {getDaysInWeek().map((date, index) => {
              const { day, date: dateNum } = formatDate(date);
              return (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.dayItem,
                    isSelected(date) && styles.selectedDay,
                    isToday(date) && styles.todayDay,
                  ]}
                  onPress={() => onDateSelect(date)}
                >
                  <Text style={[
                    styles.dayText,
                    isSelected(date) && styles.selectedDayText,
                    isToday(date) && styles.todayDayText,
                  ]}>
                    {day}
                  </Text>
                  <Text style={[
                    styles.dateText,
                    isSelected(date) && styles.selectedDateText,
                    isToday(date) && styles.todayDateText,
                  ]}>
                    {dateNum}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </ScrollView>
      ) : (
        <View style={styles.monthView}>
          <Text style={styles.comingSoon}>Month view coming soon...</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  monthYear: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 16,
    textAlign: 'center',
  },
  weekView: {
    flexDirection: 'row',
    gap: 8,
  },
  dayItem: {
    alignItems: 'center',
    padding: 12,
    borderRadius: 12,
    minWidth: 60,
    backgroundColor: '#F8FAFC',
  },
  selectedDay: {
    backgroundColor: '#2563EB',
  },
  todayDay: {
    backgroundColor: '#EFF6FF',
    borderWidth: 2,
    borderColor: '#2563EB',
  },
  dayText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#6B7280',
    marginBottom: 4,
  },
  selectedDayText: {
    color: '#FFFFFF',
  },
  todayDayText: {
    color: '#2563EB',
  },
  dateText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#111827',
  },
  selectedDateText: {
    color: '#FFFFFF',
  },
  todayDateText: {
    color: '#2563EB',
  },
  monthView: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  comingSoon: {
    fontSize: 16,
    color: '#6B7280',
    fontStyle: 'italic',
  },
});