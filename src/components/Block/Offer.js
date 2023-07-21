import React, { useEffect, useState } from 'react';
import { Image, ScrollView, StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { PanGestureHandler, State } from 'react-native-gesture-handler';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
  runOnJS,
} from 'react-native-reanimated';
import COLORS from '../../constants/COLORS';
import UiText from '../UI/Text';

const OFFER_ITEMS = [
  {
    text: 'Get 10% off',
    code: 'Use code RISH10',
    colors: [COLORS.pink, COLORS.pinkLight],
    image: require('../../assets/icons/Giftbox.png'),
  },
  {
    text: 'Get 50% off',
    code: 'Use code SUMMER50',
    colors: [COLORS.blue, COLORS.blueLight],
    image: require('../../assets/icons/Discount.png'),
  },
];

const OFFER_DISPLAY_TIME = 8000; // 8 seconds
const ANIMATION_DURATION = 500; // 0.5 seconds

const OfferBlock = () => {
  const [currentItemIndex, setCurrentItemIndex] = useState(0);
  const offsetX = useSharedValue(0);

  const onGestureEvent = Animated.event([{ nativeEvent: { translationX: offsetX } }], {
    useNativeDriver: true,
  });

  const onGestureStateChange = ({ nativeEvent }) => {
    if (nativeEvent.state === State.END) {
      if (nativeEvent.translationX > 0) {
        // User swiped right
        setCurrentItemIndex((prevIndex) => (prevIndex - 1 + OFFER_ITEMS.length) % OFFER_ITEMS.length);
      } else {
        // User swiped left
        setCurrentItemIndex((prevIndex) => (prevIndex + 1) % OFFER_ITEMS.length);
      }
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      runOnJS(setCurrentItemIndex)((prevIndex) => (prevIndex + 1) % OFFER_ITEMS.length);
    }, OFFER_DISPLAY_TIME);

    return () => clearTimeout(timer);
  }, [currentItemIndex]);

  const currentOffer = OFFER_ITEMS[currentItemIndex];

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <PanGestureHandler
        onGestureEvent={onGestureEvent}
        onHandlerStateChange={onGestureStateChange}
      >
        <Animated.View style={styles.offerContainer}>
          <OfferItem
            text={currentOffer.text}
            code={currentOffer.code}
            colors={currentOffer.colors}
            image={currentOffer.image}
            offsetX={offsetX}
          />
        </Animated.View>
      </PanGestureHandler>
    </ScrollView>
  );
};

const OfferItem = ({ text, code, colors, image, offsetX }) => {
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: offsetX.value },
        {
          rotate: `${offsetX.value / 100}rad`, // Adjust rotation based on the offset
        },
      ],
    };
  });

  return (
    <Animated.View style={[styles.offer, animatedStyle]}>
      <LinearGradient colors={colors} start={{ x: 0.9, y: 0.3 }} style={styles.offerContent}>
        <View>
          <UiText style={styles.offerText}>{text}</UiText>
          <UiText style={styles.offerCodeText}>{code}</UiText>
        </View>
        <Image source={image} style={styles.giftBox} />
      </LinearGradient>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    marginHorizontal: 15,
    marginTop: 20,
    marginBottom: 10,
  },
  offerContainer: {
    height: 70,
    marginBottom: 10,
    borderRadius: 10,
    overflow: 'hidden',
  },
  offer: {
    flex: 1,
  },
  offerContent: {
    paddingHorizontal: 15,
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  offerText: {
    color: COLORS.white,
    fontFamily: 'Nunito-Bold',
    fontSize: 20,
  },
  offerCodeText: {
    fontFamily: 'Nunito-SemiBold',
    fontSize: 15,
    color: COLORS.white,
  },
  giftBox: {
    maxHeight: 80,
    maxWidth: 80,
  },
});

export default OfferBlock;