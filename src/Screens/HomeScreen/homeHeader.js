import React from 'react';
import {View, Text, Image, Platform} from 'react-native';
import {Colors, FontSize} from '../../Theme/Variables';
import {hp, wp} from '../../Config/responsive';
import {TextComponent} from '../../Components/TextComponent';
import {userImage, handShakeLottie, setting, notification} from '../../Assets';
import {styles} from './styles';
import {Touchable} from '../../Components/Touchable';
import Lottie from 'lottie-react-native';
import {CircleImage} from '../../Components/CircleImage';
import AppStatusBar from '../../Components/AppBarStatus';
import {useNavigation} from '@react-navigation/native';
import useReduxStore from '../../Hooks/UseReduxStore';

const HomeHeader = () => {
  const {getState} = useReduxStore();
  const {userData} = getState('Auth');
  console.log(userData, 'userData ??');

  const navigation = useNavigation();
  const handlePress = () => {
    console.log(navigation, '>>>'); // Confirm navigation object
    navigation.navigate('SettingScreen');
  };
  

  return (
    <>
      <View style={styles.headerView}>
        <AppStatusBar
          backgroundColor={Colors.secondary}
          barStyle="light-content"
        />

        <View style={styles.firstView}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              width: wp('70'),
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View>
                <CircleImage image={userData?.profile_image || userImage} styles={styles.imgStyle} />
              </View>
              <View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <TextComponent
                    omponent
                    text={'Hello ' + userData?.first_name ||'Hello Melaa'}
                    styles={styles.nameText}
                  />
                  <Lottie
                    source={handShakeLottie}
                    resizeMode="contain"
                    style={{width: wp('10'), height: hp('4')}}
                    loop
                    autoPlay
                  />
                </View>
                <TextComponent
                  text={'Welcome Back to StickSavvy'}
                  styles={{top: hp('0'), ...styles.subText}}
                />
              </View>
            </View>
          </View>
          <Touchable>
            {/* <Image
              source={notification}
              resizeMode="contain"
              style={styles.notiIcon}
            /> */}
          </Touchable>
          <Touchable onPress={handlePress}>
            <Image
              source={setting}
              resizeMode="contain"
              style={styles.setIcon}
            />
          </Touchable>
        </View>
      </View>
    </>
  );
};
export default HomeHeader;
