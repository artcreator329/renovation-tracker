import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AnimatedCard from './AnimatedCard';
import { LinearGradient } from 'expo-linear-gradient';

export default function OverallProgress() {
  const progressPercentage = 65;

  return (
    <AnimatedCard style={styles.container} delay={100}>
      <View style={styles.header}>
        <Text style={styles.title}>Overall Progress</Text>
        <Text style={styles.percentage}>{progressPercentage}%</Text>
      </View>
      
      <View style={styles.progressBarContainer}>
        <View style={styles.progressBarBackground}>
          <LinearGradient
            colors={['#22C55E', '#16A34A', '#059669']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={[
              styles.progressBarFill, 
              { width: `${progressPercentage}%` }
            ]}
          />
        </View>
      </View>
      
      <View style={styles.stats}>
        <View style={styles.stat}>
          <Text style={styles.statValue}>23</Text>
          <Text style={styles.statLabel}>Completed</Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.statValue}>15</Text>
          <Text style={styles.statLabel}>In Progress</Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.statValue}>9</Text>
          <Text style={styles.statLabel}>Remaining</Text>
        </View>
      </View>
      
      <Text style={styles.estimate}>
        Estimated completion: December 15, 2024
      </Text>
    </AnimatedCard>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginBottom: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
  },
  percentage: {
    fontSize: 24,
    fontWeight: '700',
    color: '#2563EB',
  },
  progressBarContainer: {
    marginBottom: 20,
  },
  progressBarBackground: {
    height: 8,
    backgroundColor: '#E5E7EB',
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    borderRadius: 4,
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
  },
  stat: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 20,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: '#6B7280',
    fontWeight: '500',
  },
  estimate: {
    fontSize: 14,
    color: '#6B7280',
    textAlign: 'center',
    fontStyle: 'italic',
  },
});