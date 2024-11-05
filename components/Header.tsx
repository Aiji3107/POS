import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome, Feather } from '@expo/vector-icons';

type HeaderProps = {
  title: string;
  leftIcon?: string;
  rightIcon?: string;
};

export default function Header({ title, leftIcon, rightIcon }: HeaderProps) {
  const color = '#193238';

  return (
    <View style={styles.container}>
      {/* Left Icon */}
      {leftIcon && (
        <TouchableOpacity style={styles.iconButton}>
          <FontAwesome name={leftIcon} size={28} color={color} />
        </TouchableOpacity>
      )}

      {/* Center Text */}
      <Text style={styles.title}>{title}</Text>

      {/* Right Icon */}
      {rightIcon && (
        <TouchableOpacity style={styles.iconButton}>
          <Feather name={rightIcon} size={28} color={color} />
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: '#F6F8F9', // Adjust background color as needed
  },
  iconButton: {
    padding: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333', // Adjust text color as needed
  },
});
