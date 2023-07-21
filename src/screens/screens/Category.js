
import React from 'react';
import { StyleSheet, View } from 'react-native';
import UiText from '../components/UI/Text';
import UiView from '../components/UI/View';
import CategoryHeaderBlock from '../components/Header/CategoriesHeader';

const CategoriesScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Category Header Block */}
      <CategoryHeaderBlock navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    position: 'relative',
  },
});

export default CategoriesScreen;
