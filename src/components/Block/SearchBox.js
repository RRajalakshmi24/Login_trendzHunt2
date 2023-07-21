import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SearchBox = () => {
  return (
    <View style={styles.container}>
      <Ionicons name="ios-search" size={24} color="gray" style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder="Search..."
        placeholderTextColor="gray"
      />
      <Ionicons name="ios-mic" size={20} color="gray" style={styles.icon} />
      <Ionicons name="ios-camera" size={20} color="gray" style={styles.icon} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffff',
    borderRadius: 5,
    padding: 10,
  },
  icon: {
    marginRight: 15,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
});

export default SearchBox;
