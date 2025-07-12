import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import TimetableHeader from '@/components/TimetableHeader';
import CalendarView from '@/components/CalendarView';
import TaskSchedule from '@/components/TaskSchedule';

export default function TimetableScreen() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [viewMode, setViewMode] = useState<'week' | 'month'>('week');

  return (
    <SafeAreaView style={styles.container}>
      <TimetableHeader viewMode={viewMode} onViewModeChange={setViewMode} />
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <CalendarView 
          selectedDate={selectedDate}
          onDateSelect={setSelectedDate}
          viewMode={viewMode}
        />
        <TaskSchedule selectedDate={selectedDate} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 32,
  },
});