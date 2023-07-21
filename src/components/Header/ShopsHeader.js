import React from 'react';
import { StyleSheet, View, Text } from 'react-native'; // Import the Text component
import UiIconButton from '../UI/IconButton';
import { MaterialIcons } from '@expo/vector-icons';
import COLORS from '../../constants/COLORS';

const ShopsHeaderBlock = ({ navigation }) => {
  return (
    <View style={Styles.container}>
      <View style={Styles.leftContent}>
        <UiIconButton
          onPress={() => {
            // Add the navigation action for navigating back to the previous screen or any other desired action
            navigation.goBack(); // Assuming you want to navigate back when the back button is pressed
          }}
        >
          <MaterialIcons name="arrow-back" size={25} color={COLORS.primaryColor} />
        </UiIconButton>
      </View>
      <View style={Styles.centerContent}>
        {/* Wrap the header text "Shops" with the Text component */}
        <Text style={Styles.headerText}>Shops</Text>
      </View>
      <View style={Styles.rightContent}>
        {/* You can add any additional content on the right side if needed */}
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'absolute',
    width: '100%',
    top: 30,
    zIndex: 30,
  },

  headerText: {
    fontFamily: 'Nunito-Bold',
    fontSize: 20,
    color: COLORS.primaryColor,
  },
  leftContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rightContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ShopsHeaderBlock;
