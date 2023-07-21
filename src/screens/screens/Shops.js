import React from 'react';
import { StyleSheet, View } from 'react-native';
import UiText from '../components/UI/Text';
import UiView from '../components/UI/View';
import ShopsHeaderBlock from '../components/Header/ShopsHeader'; 


const ShopsScreen = ({ navigation }) => { 
  return (
    <View style={styles.container}>
      <ShopsHeaderBlock navigation={navigation} /> 
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1, 
  },
});

export default ShopsScreen; 
