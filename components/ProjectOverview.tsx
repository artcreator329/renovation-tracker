import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Calendar, Clock, Users, DollarSign } from 'lucide-react-native';

export default function ProjectOverview() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Project Overview</Text>
      <View style={styles.grid}>
        <View style={[styles.card, styles.primaryCard]}>
          <View style={styles.cardHeader}>
            <Calendar size={24} color="#FFFFFF" />
            <Text style={styles.primaryCardTitle}>Days Remaining</Text>
          </View>
          <Text style={styles.primaryCardValue}>42</Text>
          <Text style={styles.primaryCardSubtitle}>Est. completion: Dec 15</Text>
        </View>
        
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Clock size={20} color="#059669" />
            <Text style={styles.cardTitle}>Time Spent</Text>
          </View>
          <Text style={styles.cardValue}>186h</Text>
        </View>
        
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Users size={20} color="#7C3AED" />
            <Text style={styles.cardTitle}>Team Members</Text>
          </View>
          <Text style={styles.cardValue}>8</Text>
        </View>
        
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <DollarSign size={20} color="#EA580C" />
            <Text style={styles.cardTitle}>Budget Used</Text>
          </View>
          <Text style={styles.cardValue}>$12.5k</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 24,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#FFFFFF',
    marginBottom: 16,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  card: {
    backgroundColor: 'rgba(34, 197, 94, 0.1)',
    borderWidth: 1,
    borderColor: 'rgba(34, 197, 94, 0.2)',
    borderRadius: 12,
    padding: 16,
    flex: 1,
    minWidth: '47%',
  },
  primaryCard: {
    background: 'linear-gradient(135deg, #22C55E 0%, #16A34A 100%)',
    backgroundColor: '#22C55E',
    width: '100%',
    minWidth: '100%',
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  cardTitle: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.8)',
    marginLeft: 8,
    fontWeight: '500',
  },
  primaryCardTitle: {
    fontSize: 14,
    color: '#FFFFFF',
    marginLeft: 8,
    fontWeight: '500',
  },
  cardValue: {
    fontSize: 24,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  primaryCardValue: {
    fontSize: 32,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  primaryCardSubtitle: {
    fontSize: 12,
    color: '#FFFFFF',
    opacity: 0.9,
    marginTop: 4,
  },
});