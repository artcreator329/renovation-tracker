import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TrendingUp, TriangleAlert as AlertTriangle, Target, Clock } from 'lucide-react-native';

export default function ProgressInsights() {
  const insights = [
    {
      icon: <TrendingUp size={20} color="#059669" />,
      title: 'On Track',
      description: 'Project is progressing as planned',
      color: '#059669',
    },
    {
      icon: <AlertTriangle size={20} color="#EA580C" />,
      title: '3 Tasks Overdue',
      description: 'Electrical inspection needs attention',
      color: '#EA580C',
    },
    {
      icon: <Target size={20} color="#2563EB" />,
      title: 'Budget Status',
      description: '75% of budget utilized',
      color: '#2563EB',
    },
    {
      icon: <Clock size={20} color="#7C3AED" />,
      title: 'Time Remaining',
      description: '42 days to completion',
      color: '#7C3AED',
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Project Insights</Text>
      <View style={styles.insightGrid}>
        {insights.map((insight, index) => (
          <View key={index} style={styles.insightCard}>
            <View style={styles.insightHeader}>
              {insight.icon}
              <Text style={styles.insightTitle}>{insight.title}</Text>
            </View>
            <Text style={styles.insightDescription}>{insight.description}</Text>
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
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 16,
  },
  insightGrid: {
    gap: 12,
  },
  insightCard: {
    backgroundColor: '#F8FAFC',
    borderRadius: 8,
    padding: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#E5E7EB',
  },
  insightHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  insightTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#111827',
    marginLeft: 8,
  },
  insightDescription: {
    fontSize: 12,
    color: '#6B7280',
    lineHeight: 16,
  },
});