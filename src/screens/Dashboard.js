import React from 'react';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Button from '../components/Button';

export default function Dashboard({ navigation }) {
  const handleShopNowPress = () => {
    navigation.navigate('StoreApp'); // Navigate to the InstructionsScreen
  };

  return (
    <Background>
      <Logo />
      <Header>Let’s start</Header>
      
      <Button mode="outlined" onPress={handleShopNowPress}>
        Shop Now
      </Button>
    </Background>
  );
}
