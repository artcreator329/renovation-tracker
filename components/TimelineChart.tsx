import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Calendar, CircleCheck as CheckCircle, Clock } from 'lucide-react-native';

export default function TimelineChart() {
  const timelineEvents = [
    { 
      date: '2024-10-15', 
      title: 'Project Started', 
      status: 'completed',
      description: 'Initial planning and permits obtained'
    },
    { 
      date: '2024-10-20', 
      title: 'Demolition Complete', 
      status: 'completed',
      description: 'Old kitchen removed successfully'
    },
    { 
      date: '2024-11-01', 
      title: 'Electrical Rough-in', 
      status: 'completed',
      description: 'New wiring installed and inspected'
    },
    { 
      date: '2024-11-15', 
      title: 'Plumbing Installation', 
      status: 'in-progress',
      description: 'Water lines and gas connections'
    },
    { 
      date: '2024-11-28', 
      title: 'Cabinet Installation', 
      status: 'upcoming',
      description: 'Kitchen cabinets and countertops'
    },
    { 
      date: '2024-12-05', 
      title: 'Flooring Installation', 
      status: 'upcoming',
      description: 'Hardwood flooring installation'
    },
    { 
      date: '2024-12-15', 
      title: 'Project Completion', 
      status: 'upcoming',
      description: 'Final inspections and cleanup'
    },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle size={16} color="#059669" />;
      case 'in-progress':
        return <Clock size={16} color="#EA580C" />;
      default:
        return <Calendar size={16} color="#6B7280" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return '#059669';
      case 'in-progress': return '#EA580C';
      default: return '#6B7280';
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Project Timeline</Text>
      <ScrollView style={styles.timeline} showsVerticalScrollIndicator={false}>
        {timelineEvents.map((event, index) => (
          <View key={index} style={styles.timelineItem}>
            <View style={styles.timelineMarker}>
              <View style={[styles.markerDot, { backgroundColor: getStatusColor(event.status) }]} />
              {index < timelineEvents.length - 1 && <View style={styles.timelineLine} />}
            </View>
            
            <View style={styles.timelineContent}>
              <View style={styles.eventHeader}>
                <View style={styles.eventTitle}>
                  {getStatusIcon(event.status)}
                  <Text style={styles.eventName}>{event.title}</Text>
                </View>
                <Text style={styles.eventDate}>
                  {new Date(event.date).toLocaleDateString('en-US', { 
                    month: 'short', 
                    day: 'numeric' 
                  })}
                </Text>
              </View>
              <Text style={styles.eventDescription}>{event.description}</Text>
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
  timeline: {
    maxHeight: 400,
  },
  timelineItem: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  timelineMarker: {
    alignItems: 'center',
    marginRight: 16,
  },
  markerDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginBottom: 4,
  },
  timelineLine: {
    width: 2,
    flex: 1,
    backgroundColor: '#E5E7EB',
    marginTop: 4,
  },
  timelineContent: {
    flex: 1,
    paddingBottom: 8,
  },
  eventHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  eventTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  eventName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#111827',
    marginLeft: 8,
  },
  eventDate: {
    fontSize: 12,
    color: '#6B7280',
    fontWeight: '500',
  },
  eventDescription: {
    fontSize: 12,
    color: '#6B7280',
    marginTop: 2,
    lineHeight: 16,
  },
});