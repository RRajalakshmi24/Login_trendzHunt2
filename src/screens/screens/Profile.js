import React from 'react';
import { StyleSheet, View } from 'react-native';
import ProfileHeaderBlock from '../components/Header/ProfileHeader';

const ProfileScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ProfileHeaderBlock navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ProfileScreen;
