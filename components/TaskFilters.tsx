import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, ScrollView } from 'react-native';

interface TaskFiltersProps {
  activeFilter: 'all' | 'pending' | 'completed' | 'overdue';
  onFilterChange: (filter: 'all' | 'pending' | 'completed' | 'overdue') => void;
}

export default function TaskFilters({ activeFilter, onFilterChange }: TaskFiltersProps) {
  const filters = [
    { key: 'all' as const, label: 'All Tasks', count: 47 },
    { key: 'pending' as const, label: 'Pending', count: 21 },
    { key: 'completed' as const, label: 'Completed', count: 23 },
    { key: 'overdue' as const, label: 'Overdue', count: 3 },
  ];

  return (
    <ScrollView 
      horizontal 
      showsHorizontalScrollIndicator={false}
      style={styles.container}
      contentContainerStyle={styles.content}
    >
      {filters.map((filter) => (
        <TouchableOpacity
          key={filter.key}
          style={[
            styles.filterButton,
            activeFilter === filter.key && styles.activeFilter
          ]}
          onPress={() => onFilterChange(filter.key)}
        >
          <Text style={[
            styles.filterLabel,
            activeFilter === filter.key && styles.activeFilterLabel
          ]}>
            {filter.label}
          </Text>
          <View style={[
            styles.countBadge,
            activeFilter === filter.key && styles.activeCountBadge
          ]}>
            <Text style={[
              styles.countText,
              activeFilter === filter.key && styles.activeCountText
            ]}>
              {filter.count}
            </Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  content: {
    paddingRight: 16,
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F4F6',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginRight: 12,
  },
  activeFilter: {
    backgroundColor: '#2563EB',
  },
  filterLabel: {
    fontSize: 14,
    fontWeight: '500',
    color: '#6B7280',
    marginRight: 8,
  },
  activeFilterLabel: {
    color: '#FFFFFF',
  },
  countBadge: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    paddingHorizontal: 8,
    paddingVertical: 2,
    minWidth: 24,
    alignItems: 'center',
  },
  activeCountBadge: {
    backgroundColor: '#1D4ED8',
  },
  countText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#6B7280',
  },
  activeCountText: {
    color: '#FFFFFF',
  },
});