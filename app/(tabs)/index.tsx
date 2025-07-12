import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import DashboardHeader from '@/components/DashboardHeader';
import ProjectOverview from '@/components/ProjectOverview';
import QuickStats from '@/components/QuickStats';
import RecentTasks from '@/components/RecentTasks';
import UpcomingDeadlines from '@/components/UpcomingDeadlines';

export default function DashboardScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <DashboardHeader />
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <ProjectOverview />
        <QuickStats />
        <View style={styles.row}>
          <RecentTasks />
          <UpcomingDeadlines />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F0F0F',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 32,
  },
  row: {
    flexDirection: 'row',
    gap: 16,
    marginTop: 16,
  },
});