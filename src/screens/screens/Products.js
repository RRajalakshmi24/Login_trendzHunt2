import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as Location from 'expo-location';
import CategoriesBlock from '../components/Block/Categories';
import SearchBox from '../components/Block/SearchBox';
import HorizontalProductView from '../components/Block/HorizontalProductView';
import UiText from '../components/UI/Text';
import UiView from '../components/UI/View';
import COLORS from '../constants/COLORS';
import { useSelector } from 'react-redux';
import OfferBlock from '../components/Block/Offer';
import UiAlert from '../components/UI/Alert';
import Feather from 'react-native-vector-icons/Feather';



const LocationBox = () => {
  const [location, setLocation] = useState(null);

  // Inside the useEffect hook
useEffect(() => {
  const requestLocationPermission = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status === 'granted') {
        const location = await Location.getCurrentPositionAsync({ enableHighAccuracy: true });
        const { latitude, longitude } = location.coords;
        setLocation({ latitude, longitude });
      } else {
        console.log('Location permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  requestLocationPermission();
}, []);

  return (
    <View style={styles.locationContainer}>
      <Ionicons name="location-outline" size={24} color={COLORS.textColorLight} style={styles.icon} />
      <UiText style={styles.subHeading}></UiText>
      {location && (
        <UiText style={styles.locationText}>
          {`Latitude: ${location.latitude.toFixed(6)}, Longitude: ${location.longitude.toFixed(6)}`}
        </UiText>
      )}
    </View>
  );
};

const Products = ({ navigation }) => {
  const popularProducts = useSelector((state) => state.product.popularProducts);

  return (
    <View style={styles.view}>
      <UiView style={styles.screen}>
        <View style={styles.head}>
          <UiText style={styles.heading}>TrendzHunt</UiText>
          <View style={styles.iconContainer}>
            <Ionicons name="heart-outline" size={24} color={COLORS.textColorLight} style={styles.icon} />
            <Ionicons name="notifications-outline" size={24} color={COLORS.textColorLight} style={styles.icon} />
            <Feather name="shopping-bag" size={24} color={COLORS.textColorLight} style={styles.icon} />

          </View>
        </View>
        <SearchBox navigation={navigation} />
        
        {/* Location box with icon */}
        <LocationBox />

        <CategoriesBlock navigation={navigation} />
         <OfferBlock />


        <HorizontalProductView
          data={popularProducts}
          navigation={navigation}
          headTitle="Popular Products"
        />
        <View style={styles.empty}></View>
      </UiView>
      <UiAlert />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    position: 'relative',
    flex: 1,
  },
  screen: {
    paddingTop: 50,
    flex: 5, // Add flex: 1 to allow the content to take the remaining space
  },
  head: {
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  heading: {
    fontSize: 25,
    fontFamily: 'Nunito-Bold',
    color: COLORS.primaryColor,
  },
  subHeading: {
    fontSize: 16,
    color: COLORS.textColorLight,
  },
  empty: {
    minHeight: 60,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginHorizontal: 10, // Use marginHorizontal instead of marginLeft to add space on both sides of icons
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default Products;
