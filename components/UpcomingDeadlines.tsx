import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Calendar } from 'lucide-react-native';

export default function UpcomingDeadlines() {
  const deadlines = [
    { id: 1, title: 'Plumbing inspection', date: 'Nov 28', urgent: true },
    { id: 2, title: 'Electrical rough-in', date: 'Dec 2', urgent: false },
    { id: 3, title: 'Flooring delivery', date: 'Dec 5', urgent: false },
  ];

  return (
    <View style={styles.container}>
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    flex: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
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
    color: '#111827',
  },
  deadlineDate: {
    fontSize: 12,
    color: '#6B7280',
    marginTop: 2,
  },
  urgentDate: {
    color: '#DC2626',
    fontWeight: '600',
  },
});