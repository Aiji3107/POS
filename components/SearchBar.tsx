import React from 'react';
import { TextInput, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Styles from '@/components/style/SearchBarStyle';

export default function SearchBars() {
  return (
    <View style={Styles.container}>
      <Feather name="search" style={Styles.icon} size={20} />
      <TextInput
        style={Styles.input}
        placeholder="Search..."
        placeholderTextColor="#7E8A8C"
      />
    </View>
  );
}
