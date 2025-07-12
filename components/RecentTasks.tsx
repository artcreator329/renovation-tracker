import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { CircleCheck as CheckCircle, Clock, CircleAlert as AlertCircle } from 'lucide-react-native';

export default function RecentTasks() {
  const tasks = [
    { id: 1, title: 'Install kitchen cabinets', status: 'completed', time: '2 hours ago' },
    { id: 2, title: 'Paint walls', status: 'in-progress', time: '4 hours ago' },
    { id: 3, title: 'Tile backsplash', status: 'overdue', time: '1 day ago' },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle size={16} color="#059669" />;
      case 'in-progress':
        return <Clock size={16} color="#EA580C" />;
      case 'overdue':
        return <AlertCircle size={16} color="#DC2626" />;
      default:
        return <Clock size={16} color="#6B7280" />;
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recent Tasks</Text>
      <View style={styles.taskList}>
        {tasks.map((task) => (
          <View key={task.id} style={styles.taskItem}>
            <View style={styles.taskInfo}>
              {getStatusIcon(task.status)}
              <View style={styles.taskDetails}>
                <Text style={styles.taskTitle} numberOfLines={1}>
                  {task.title}
                </Text>
                <Text style={styles.taskTime}>{task.time}</Text>
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
  taskList: {
    gap: 12,
  },
  taskItem: {
    paddingVertical: 8,
  },
  taskInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  taskDetails: {
    marginLeft: 12,
    flex: 1,
  },
  taskTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#111827',
  },
  taskTime: {
    fontSize: 12,
    color: '#6B7280',
    marginTop: 2,
  },
});