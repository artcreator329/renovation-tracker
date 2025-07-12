import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { CircleCheck as CheckCircle, Circle, User, Calendar, Flag } from 'lucide-react-native';
import AnimatedCard from './AnimatedCard';

interface Task {
  id: number;
  title: string;
  description: string;
  status: 'pending' | 'completed' | 'overdue' | 'in-progress';
  priority: 'low' | 'medium' | 'high';
  assignee: string;
  dueDate: string;
  phase: string;
}

interface TaskItemProps {
  task: Task;
}

export default function TaskItem({ task }: TaskItemProps) {
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
      case 'completed': return '#059669';
      case 'in-progress': return '#EA580C';
      case 'overdue': return '#DC2626';
      default: return '#6B7280';
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric' 
    });
  };

  const isOverdue = (dateString: string) => {
    const dueDate = new Date(dateString);
    const today = new Date();
    return dueDate < today && task.status !== 'completed';
  };

  return (
    <AnimatedCard 
      style={[
        styles.container,
        task.status === 'overdue' && styles.overdueContainer
      ]}
      delay={task.id * 100}
    >
      <View style={styles.header}>
        <View style={styles.titleSection}>
          <TouchableOpacity style={styles.checkbox}>
            {task.status === 'completed' ? (
              <CheckCircle size={24} color="#059669" />
            ) : (
              <Circle size={24} color="#6B7280" />
            )}
          </TouchableOpacity>
          <View style={styles.titleInfo}>
            <Text style={[
              styles.title,
              task.status === 'completed' && styles.completedTitle
            ]}>
              {task.title}
            </Text>
            <Text style={styles.description} numberOfLines={2}>
              {task.description}
            </Text>
          </View>
        </View>
        <View style={[styles.priorityFlag, { backgroundColor: getPriorityColor(task.priority) }]}>
          <Flag size={12} color="#FFFFFF" />
        </View>
      </View>

      <View style={styles.footer}>
        <View style={styles.metadata}>
          <View style={styles.metaItem}>
            <User size={14} color="#6B7280" />
            <Text style={styles.metaText}>{task.assignee}</Text>
          </View>
          <View style={styles.metaItem}>
            <Calendar size={14} color={isOverdue(task.dueDate) ? '#DC2626' : '#6B7280'} />
            <Text style={[
              styles.metaText,
              isOverdue(task.dueDate) && styles.overdueText
            ]}>
              {formatDate(task.dueDate)}
            </Text>
          </View>
        </View>
        <View style={styles.badges}>
          <View style={styles.phaseBadge}>
            <Text style={styles.phaseText}>{task.phase}</Text>
          </View>
          <View style={[styles.statusBadge, { backgroundColor: getStatusColor(task.status) }]}>
            <Text style={styles.statusText}>{task.status.replace('-', ' ')}</Text>
          </View>
        </View>
      </View>
    </AnimatedCard>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    marginBottom: 12,
  },
  overdueContainer: {
    borderLeftWidth: 4,
    borderLeftColor: '#DC2626',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  titleSection: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'flex-start',
  },
  checkbox: {
    marginRight: 12,
    marginTop: 2,
  },
  titleInfo: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 4,
  },
  completedTitle: {
    textDecorationLine: 'line-through',
    color: '#6B7280',
  },
  description: {
    fontSize: 14,
    color: '#6B7280',
    lineHeight: 20,
  },
  priorityFlag: {
    padding: 6,
    borderRadius: 6,
    marginLeft: 12,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  metadata: {
    gap: 8,
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  metaText: {
    fontSize: 12,
    color: '#6B7280',
    marginLeft: 6,
  },
  overdueText: {
    color: '#DC2626',
    fontWeight: '600',
  },
  badges: {
    flexDirection: 'row',
    gap: 8,
  },
  phaseBadge: {
    backgroundColor: '#F3F4F6',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  phaseText: {
    fontSize: 10,
    fontWeight: '600',
    color: '#6B7280',
  },
  statusBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  statusText: {
    fontSize: 10,
    fontWeight: '600',
    color: '#FFFFFF',
    textTransform: 'uppercase',
  },
});