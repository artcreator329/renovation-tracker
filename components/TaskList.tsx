import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import TaskItem from './TaskItem';

interface TaskListProps {
  filter: 'all' | 'pending' | 'completed' | 'overdue';
  searchQuery: string;
}

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

export default function TaskList({ filter, searchQuery }: TaskListProps) {
  const allTasks: Task[] = [
    {
      id: 1,
      title: 'Install Kitchen Cabinets',
      description: 'Mount upper and lower cabinets, ensure proper alignment',
      status: 'in-progress',
      priority: 'high',
      assignee: 'John Smith',
      dueDate: '2024-11-28',
      phase: 'Kitchen',
    },
    {
      id: 2,
      title: 'Paint Living Room Walls',
      description: 'Apply primer and two coats of paint',
      status: 'completed',
      priority: 'medium',
      assignee: 'Sarah Wilson',
      dueDate: '2024-11-25',
      phase: 'Living Room',
    },
    {
      id: 3,
      title: 'Install Electrical Outlets',
      description: 'Install GFCI outlets in kitchen and bathroom areas',
      status: 'overdue',
      priority: 'high',
      assignee: 'Mike Johnson',
      dueDate: '2024-11-20',
      phase: 'Electrical',
    },
    {
      id: 4,
      title: 'Tile Backsplash',
      description: 'Install subway tile backsplash in kitchen',
      status: 'pending',
      priority: 'medium',
      assignee: 'David Brown',
      dueDate: '2024-12-01',
      phase: 'Kitchen',
    },
    {
      id: 5,
      title: 'Install Flooring',
      description: 'Install hardwood flooring in main areas',
      status: 'pending',
      priority: 'low',
      assignee: 'Tom Anderson',
      dueDate: '2024-12-05',
      phase: 'Flooring',
    },
  ];

  const filteredTasks = allTasks.filter(task => {
    const matchesFilter = filter === 'all' || 
      (filter === 'pending' && task.status === 'pending') ||
      (filter === 'completed' && task.status === 'completed') ||
      (filter === 'overdue' && task.status === 'overdue');
    
    const matchesSearch = searchQuery === '' || 
      task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      task.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      task.assignee.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesFilter && matchesSearch;
  });

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {filteredTasks.map(task => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});