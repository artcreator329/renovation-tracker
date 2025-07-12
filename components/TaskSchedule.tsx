import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Clock, User, MapPin } from 'lucide-react-native';

interface TaskScheduleProps {
  selectedDate: Date;
}

export default function TaskSchedule({ selectedDate }: TaskScheduleProps) {
  const tasks = [
    {
      id: 1,
      title: 'Kitchen Cabinet Installation',
      time: '08:00 - 12:00',
      assignee: 'John Smith',
      location: 'Kitchen',
      status: 'scheduled',
      priority: 'high',
    },
    {
      id: 2,
      title: 'Electrical Wiring',
      time: '13:00 - 17:00',
      assignee: 'Mike Johnson',
      location: 'Kitchen',
      status: 'in-progress',
      priority: 'medium',
    },
    {
      id: 3,
      title: 'Paint Touch-ups',
      time: '09:00 - 11:00',
      assignee: 'Sarah Wilson',
      location: 'Living Room',
      status: 'scheduled',
      priority: 'low',
    },
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return '#DC2626';
      case 'medium': return '#EA580C';
      case 'low': return '#059669';
      default: return '#6B7280';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'scheduled': return '#2563EB';
      case 'in-progress': return '#EA580C';
      case 'completed': return '#059669';
      default: return '#6B7280';
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Tasks for {selectedDate.toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' })}
      </Text>
      
      <ScrollView style={styles.taskList} showsVerticalScrollIndicator={false}>
        {tasks.map((task) => (
          <View key={task.id} style={styles.taskCard}>
            <View style={styles.taskHeader}>
              <View style={styles.taskInfo}>
                <Text style={styles.taskTitle}>{task.title}</Text>
                <View style={[styles.priorityBadge, { backgroundColor: getPriorityColor(task.priority) }]}>
                  <Text style={styles.priorityText}>{task.priority.toUpperCase()}</Text>
                </View>
              </View>
              <View style={[styles.statusDot, { backgroundColor: getStatusColor(task.status) }]} />
            </View>
            
            <View style={styles.taskDetails}>
              <View style={styles.detailItem}>
                <Clock size={16} color="#6B7280" />
                <Text style={styles.detailText}>{task.time}</Text>
              </View>
              <View style={styles.detailItem}>
                <User size={16} color="#6B7280" />
                <Text style={styles.detailText}>{task.assignee}</Text>
              </View>
              <View style={styles.detailItem}>
                <MapPin size={16} color="#6B7280" />
                <Text style={styles.detailText}>{task.location}</Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 16,
  },
  taskList: {
    flex: 1,
  },
  taskCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  taskHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  taskInfo: {
    flex: 1,
    marginRight: 12,
  },
  taskTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 6,
  },
  priorityBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    alignSelf: 'flex-start',
  },
  priorityText: {
    fontSize: 10,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  statusDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginTop: 4,
  },
  taskDetails: {
    gap: 8,
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  detailText: {
    fontSize: 14,
    color: '#6B7280',
    marginLeft: 8,
  },
});