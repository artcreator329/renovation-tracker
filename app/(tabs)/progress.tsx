import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ProgressHeader from '@/components/ProgressHeader';
import OverallProgress from '@/components/OverallProgress';
import PhaseProgress from '@/components/PhaseProgress';
import TimelineChart from '@/components/TimelineChart';
import ProgressInsights from '@/components/ProgressInsights';

export default function ProgressScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ProgressHeader />
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <OverallProgress />
        <PhaseProgress />
        <TimelineChart />
        <ProgressInsights />
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