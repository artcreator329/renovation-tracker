import React, { useEffect } from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import Animated, { 
  useSharedValue, 
  useAnimatedStyle, 
  withSpring, 
  withTiming,
  interpolate,
  Easing 
} from 'react-native-reanimated';
import { LinearGradient } from 'expo-linear-gradient';

interface AnimatedCardProps {
  children: React.ReactNode;
  style?: ViewStyle;
  delay?: number;
  useGradient?: boolean;
  gradientColors?: string[];
  borderGradient?: boolean;
}

export default function AnimatedCard({ 
  children, 
  style, 
  delay = 0, 
  useGradient = false,
  gradientColors = ['rgba(34, 197, 94, 0.15)', 'rgba(34, 197, 94, 0.05)'],
  borderGradient = true
}: AnimatedCardProps) {
  const opacity = useSharedValue(0);
  const translateY = useSharedValue(20);
  const scale = useSharedValue(0.95);

  useEffect(() => {
    const config = {
      duration: 800,
      easing: Easing.bezier(0.25, 0.1, 0.25, 1), // Slow-in-slow-out
    };

    setTimeout(() => {
      opacity.value = withTiming(1, config);
      translateY.value = withSpring(0, {
        damping: 15,
        stiffness: 100,
        mass: 1,
      });
      scale.value = withSpring(1, {
        damping: 12,
        stiffness: 120,
        mass: 0.8,
      });
    }, delay);
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [
      { translateY: translateY.value },
      { scale: scale.value }
    ],
  }));

  if (useGradient) {
    return (
      <Animated.View style={[animatedStyle]}>
        <LinearGradient
          colors={gradientColors}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={[styles.gradientCard, style]}
        >
          {borderGradient && (
            <LinearGradient
              colors={['rgba(34, 197, 94, 0.4)', 'rgba(34, 197, 94, 0.1)']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.borderGradient}
            />
          )}
          <View style={styles.content}>
            {children}
          </View>
        </LinearGradient>
      </Animated.View>
    );
  }

  return (
    <Animated.View style={[styles.card, style, animatedStyle]}>
      {borderGradient && (
        <LinearGradient
          colors={['rgba(34, 197, 94, 0.4)', 'rgba(34, 197, 94, 0.1)']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.borderGradient}
        />
      )}
      <View style={styles.content}>
        {children}
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'rgba(34, 197, 94, 0.1)',
    borderRadius: 12,
    position: 'relative',
    overflow: 'hidden',
  },
  gradientCard: {
    borderRadius: 12,
    position: 'relative',
    overflow: 'hidden',
  },
  borderGradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 12,
    padding: 1,
  },
  content: {
    flex: 1,
    backgroundColor: 'rgba(15, 15, 15, 0.8)',
    borderRadius: 11,
    margin: 1,
  },
});