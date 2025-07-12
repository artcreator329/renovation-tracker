import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function QuickStats() {
  const stats = [
    { label: 'Total Tasks', value: '47', color: '#2563EB' },
    { label: 'Completed', value: '23', color: '#059669' },
    { label: 'In Progress', value: '15', color: '#EA580C' },
    { label: 'Overdue', value: '3', color: '#DC2626' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Task Summary</Text>
      <View style={styles.statsRow}>
        {stats.map((stat, index) => (
          <View key={index} style={styles.stat}>
            <Text style={[styles.statValue, { color: stat.color }]}>
              {stat.value}
            </Text>
            <Text style={styles.statLabel}>{stat.label}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(34, 197, 94, 0.1)',
    borderWidth: 1,
    borderColor: 'rgba(34, 197, 94, 0.2)',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 16,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  stat: {
    alignItems: 'center',
    flex: 1,
  },
  statValue: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.7)',
    textAlign: 'center',
    fontWeight: '500',
  },
});