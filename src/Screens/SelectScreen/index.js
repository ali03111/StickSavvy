import { View, Text, Image } from 'react-native';
import React, { useState } from 'react';
import { styles } from './styles';
import { MainLogo } from '../../Assets';
import { TextComponent } from '../../Components/TextComponent';
import ThemeButton from '../../Components/ThemeButton';
import { Colors } from '../../Theme/Variables';
import { useNavigation } from '@react-navigation/native'; // Import navigation hook

export default function SelectScreen() {
  const navigation = useNavigation(); // Initialize navigation
  const [selectedRole, setSelectedRole] = useState(null); // Track selected role

  const handleSelection = (role) => {
    setSelectedRole(role);
    if (role === 'User') {
      navigation.navigate('RegisterScreen', { role: 'User' }); // Navigate to signup for User
    } else if (role === 'Doctor') {
      navigation.navigate('RegisterScreen', { role: 'Doctor' }); // Navigate to signup for Phlebotomist
    }
  };

  return (
    <View style={styles.bannerImg}>
      <View style={styles.centerMainView}>
        <Image source={MainLogo} resizeMode="contain" style={styles.splashImg} />
        <TextComponent text={'Select Below'} styles={styles.hdStyle} />
        <TextComponent
          text={`Your platform for rating phlebotomists and improving healthcare experiences.`}
          styles={styles.descStyle}
        />
        <ThemeButton
          title={'User'}
          onPress={() => handleSelection('User')} // Handle user selection
          style={styles.userBtn}
          textStyle={styles.userBtnText}
        />
        <ThemeButton
          title={'Phlebotomist'}
          onPress={() => handleSelection('Doctor')} // Handle phlebotomist selection
        />
      </View>
    </View>
  );
}
