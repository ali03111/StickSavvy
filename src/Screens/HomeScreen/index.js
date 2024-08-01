import React, {useCallback, useRef, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  FlatList,
  ScrollView,
} from 'react-native';
import useReduxStore from '../../Hooks/UseReduxStore';

import useHomeScreen from './useHomeScreen';
import {styles} from './styles';
import HomeHeader from './homeHeader';
import AppStatusBar from '../../Components/AppBarStatus';
import {Colors} from '../../Theme/Variables';
import {TextComponent} from '../../Components/TextComponent';
import {filter, searchIcon, users} from '../../Assets';
import {Touchable} from '../../Components/Touchable';
import PhlebotomistsCard from '../../Components/PhlebotomistsCard';
import PhlebotomistsWithCta from '../../Components/PhlebotomistsWithCta';
import {certifiedPhl, certifiedPhlWithCta} from '../../Utils/localDB';
import {hp, wp} from '../../Config/responsive';
import ThemeButton from '../../Components/ThemeButton';

const HomeScreen = ({navigation}) => {
  const {dispatch} = useReduxStore();
  const {homeScreenBtns, onPress} = useHomeScreen(navigation);

  const renderItem = ({item, index}) => {
    return (
      <PhlebotomistsCard
        cardStyle={{
          backgroundColor: index % 2 == 0 ? Colors.bgLBlue : Colors.bgLPink,
        }}
        image={item?.image}
        location={item?.location}
        name={item?.name}
        ratings={item?.ratings}
      />
    );
  };
  const renderItemCard = ({item, index}) => {
    return (
      <PhlebotomistsWithCta
        onPress={() => navigation.navigate('PhlebotomistDetails')}
        cardStyle={{
          backgroundColor: index % 2 == 0 ? Colors.bgLBlue : Colors.bgLPink,
        }}
        image={item?.image}
        cta={item?.cta}
        name={item?.name}
        ratings={item?.ratings}
      />
    );
  };
  return (
    <>
      <HomeHeader settingOnPress={() => navigation.navigate('SettingScreen')} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        bounces={false}
        style={styles.homeMain}>
        <View style={styles.searchContainer}>
          <View style={styles.searchBar}>
            <Image
              source={searchIcon}
              resizeMode="contain"
              style={styles.searchIconStyle}
            />
            <TextComponent
              text={'Search by name'}
              numberOfLines={1}
              onPress={() => {}}
              styles={styles.searchText}
            />
          </View>
          <Image
            source={filter}
            resizeMode="contain"
            style={styles.filterIconStyle}
          />
        </View>
        <View style={styles.certifiedStyle}>
          <View style={styles.certifiedTopStyle}>
            <TextComponent
              text={'Certified Phlebotomists'}
              numberOfLines={1}
              styles={styles.certifiedTitle}
            />
            <Touchable>
              <TextComponent
                text={'View All'}
                numberOfLines={1}
                styles={styles.viewAll}
              />
            </Touchable>
          </View>

          <FlatList
            showsHorizontalScrollIndicator={false}
            data={certifiedPhl}
            renderItem={renderItem}
            horizontal
            contentContainerStyle={styles.flatlistStyleOne}
            keyExtractor={item => item.id}
          />
        </View>
        <View style={styles.subscribeCardMain}>
          <View style={styles.subscribeCard}>
            <TextComponent
              text={`buy subscription to unlock our various features...`}
              numberOfLines={2}
              styles={styles.subscribeHeading}
            />
            <TextComponent
              text={
                'Your platform for rating phlebotomists and improving healthcare experiences.'
              }
              styles={styles.viewAll}
            />
            <View style={styles.cardBottom}>
              <Image
                source={users}
                resizeMode="contain"
                style={styles.userStyles}
              />
              <ThemeButton title={'Subscribe'} style={styles.btnStyle} />
            </View>
          </View>
        </View>
        <View style={styles.certifiedTopStyle}>
          <TextComponent
            text={'Certified Phlebotomists'}
            numberOfLines={1}
            styles={styles.certifiedTitle}
          />
          <Touchable>
            <TextComponent
              text={'View All'}
              numberOfLines={1}
              styles={styles.viewAll}
            />
          </Touchable>
        </View>
        <View style={{marginBottom: hp('2')}}>
          <FlatList
            data={certifiedPhlWithCta}
            renderItem={renderItemCard}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.flatlistStyleOne}
            keyExtractor={item => item.id}
          />
        </View>
      </ScrollView>
    </>
  );
};

export default HomeScreen;
