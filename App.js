import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, ImageBackground, LogBox} from 'react-native';
import MainNavigator from './src/navigation/MainNavigator';
import {logoScreen} from './src/Assets';
import Overlay from './src/Components/Overlay';
import useReduxStore from './src/Hooks/UseReduxStore';
import { Family } from './src/Theme/Variables';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

const App = () => {
  const [isVisible, setIsVisible] = useState(true);
  const Hide_Splash_Screen = () => {
    setIsVisible(false);
  };
  const {getState, dispatch} = useReduxStore();
  const {isloading} = getState('isloading');
  console.log('load', isloading);
  const time = () => {
    return 3000;
  };

  useEffect(async () => {
    GoogleSignin.configure({
      iosClientId:
        '664658424087-lcsk0ihine61evfk8n3umt9c5ot3j0ao.apps.googleusercontent.com',
      webClientId:
        Platform.OS == 'ios'
          ? '664658424087-lcsk0ihine61evfk8n3umt9c5ot3j0ao.apps.googleusercontent.com'
          : '631924608918-1q7h89bi8drpv6v9qglovivmib5phcsq.apps.googleusercontent.com',
    });
    (async () => {
      LogBox.ignoreLogs([
        'VirtualizedLists should never be nested',
        'ViewPropTypes will be removed from React Native',
        'Settings is not yet supported on Android',
        'ViewPropTypes will be removed',
        "exported from 'deprecated-react-native-prop-types'.",
        'Sending...',
        'Non-serializable values were found in the navigation state',
      ]);
      LogBox.ignoreAllLogs(true);
    })();
    // await logOutFirebase();
    setTimeout(function () {
      Hide_Splash_Screen();
    }, time());
  }, []);

  let Splash_Screen = (
    <ImageBackground
      source={logoScreen}
      style={styles.SplashScreen_RootView}></ImageBackground>
  );

  return (
    <>
      {isVisible === true ? Splash_Screen : <MainNavigator />}
      {isloading && <Overlay />}
      {/* <StackNavigatior />; */}
    </>
  );
};

const styles = StyleSheet.create({
  SplashScreen_RootView: {
    justifyContent: 'center',
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
  },
});

export default App;
