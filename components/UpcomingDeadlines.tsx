import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Calendar } from 'lucide-react-native';
import AnimatedCard from './AnimatedCard';

export default function UpcomingDeadlines() {
  const deadlines = [
    { id: 1, title: 'Plumbing inspection', date: 'Nov 28', urgent: true },
    { id: 2, title: 'Electrical rough-in', date: 'Dec 2', urgent: false },
    { id: 3, title: 'Flooring delivery', date: 'Dec 5', urgent: false },
  ];

  return (
    <AnimatedCard style={styles.container} delay={700}>
      <Text style={styles.title}>Upcoming Deadlines</Text>
      <View style={styles.deadlineList}>
        {deadlines.map((deadline) => (
          <View key={deadline.id} style={styles.deadlineItem}>
            <View style={styles.deadlineInfo}>
              <Calendar size={16} color={deadline.urgent ? '#DC2626' : '#6B7280'} />
              <View style={styles.deadlineDetails}>
                <Text style={styles.deadlineTitle} numberOfLines={1}>
                  {deadline.title}
                </Text>
                <Text style={[
                  styles.deadlineDate,
                  deadline.urgent && styles.urgentDate
                ]}>
                  {deadline.date}
                </Text>
              </View>
            </View>
          </View>
        ))}
      </View>
    </AnimatedCard>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 12,
  },
  deadlineList: {
    gap: 12,
  },
  deadlineItem: {
    paddingVertical: 8,
  },
  deadlineInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  deadlineDetails: {
    marginLeft: 12,
    flex: 1,
  },
  deadlineTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#FFFFFF',
  },
  deadlineDate: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.6)',
    marginTop: 2,
  },
  urgentDate: {
    color: '#DC2626',
    fontWeight: '600',
  },
});