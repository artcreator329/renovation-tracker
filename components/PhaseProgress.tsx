import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function PhaseProgress() {
  const phases = [
    { name: 'Planning & Design', progress: 100, color: '#059669', status: 'Completed' },
    { name: 'Demolition', progress: 100, color: '#059669', status: 'Completed' },
    { name: 'Electrical & Plumbing', progress: 80, color: '#EA580C', status: 'In Progress' },
    { name: 'Kitchen Installation', progress: 45, color: '#EA580C', status: 'In Progress' },
    { name: 'Flooring', progress: 0, color: '#6B7280', status: 'Not Started' },
    { name: 'Final Touches', progress: 0, color: '#6B7280', status: 'Not Started' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Phase Progress</Text>
      <ScrollView style={styles.phaseList} showsVerticalScrollIndicator={false}>
        {phases.map((phase, index) => (
          <View key={index} style={styles.phaseItem}>
            <View style={styles.phaseHeader}>
              <Text style={styles.phaseName}>{phase.name}</Text>
              <Text style={[styles.phaseStatus, { color: phase.color }]}>
                {phase.status}
              </Text>
            </View>
            
            <View style={styles.progressContainer}>
              <View style={styles.progressBar}>
                <View 
                  style={[
                    styles.progressFill, 
                    { 
                      width: `${phase.progress}%`,
                      backgroundColor: phase.color
                    }
                  ]} 
                />
              </View>
              <Text style={styles.progressText}>{phase.progress}%</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
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
  phaseList: {
    maxHeight: 300,
  },
  phaseItem: {
    marginBottom: 16,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  phaseHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  phaseName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#111827',
    flex: 1,
  },
  phaseStatus: {
    fontSize: 12,
    fontWeight: '500',
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  progressBar: {
    flex: 1,
    height: 6,
    backgroundColor: '#E5E7EB',
    borderRadius: 3,
    marginRight: 12,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    borderRadius: 3,
  },
  progressText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#6B7280',
    minWidth: 35,
    textAlign: 'right',
  },
});