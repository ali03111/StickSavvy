import React, {useCallback, useRef, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  FlatList,
  ScrollView,
  TextInput,
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
import {logOutUser} from '../../Redux/Action/AuthAction';
import {imageURL} from '../../Utils/Urls';
import {useNavigation} from '@react-navigation/native';
import {InputComponent} from '../../Components/InputComponent';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {FilterBottomSheet} from '../../Components/FilterBottomSheet';
import ThemeButtonWithIcon from '../../Components/ThemeButtonWithIcon';
// import FilterBottomSheet from '../../Components/FilterBottomSheet';

const HomeScreen = ({navigation}) => {
  const {dispatch} = useReduxStore();
  const {homeScreenBtns, onPress, logoutHandle, data} =
    useHomeScreen(navigation);

  const [searchText, setSearchText] = useState('');
  const [isFilterVisible, setFilterVisible] = useState(false); // Control modal visibility

  const [filters, setFilters] = useState({
    rating: 3,
    // distance: {min: 0, max: 5},
  });

  const handleApplyFilter = selectedRating => {
    setFilters({rating: selectedRating});
    console.log('Applied Filters:', {rating: selectedRating});

    // Navigate to the Search Results screen and pass the rating filter
    navigation.navigate('SearchResultsScreen', {rating: selectedRating});
  };

  const handleSearch = () => {
    if (searchText) {
      navigation.navigate('SearchResultsScreen', {searchText}); // Pass search text to results screen
      setSearchText('');
    }
  };

  const renderItem = ({item, index}) => {
    return (
      <PhlebotomistsCard
        cardStyle={{
          backgroundColor: index % 2 == 0 ? Colors.bgLBlue : Colors.bgLPink,
        }}
        image={imageURL + item?.profile_image}
        location={item?.location || 'N/A'}
        name={item?.first_name + ' ' + item?.last_name}
        ratings={item?.avg_rating}
        profileId={item?.id}
        isRight={true}
      />
    );
  };
  const renderItemCard = ({item, index}) => {
    return (
      <PhlebotomistsWithCta
        cardStyle={{
          backgroundColor: index % 2 == 0 ? Colors.bgLBlue : Colors.bgLPink,
        }}
        image={imageURL + item?.profile_image}
        cta={item?.cta}
        name={item?.first_name}
        ratings={item?.avg_rating}
        profileId={item?.id} // Pass the id for navigation
      />
    );
  };
  return (
    <>
      <GestureHandlerRootView style={{flex: 1}}>
        <ScrollView style={styles.homeMain}>
          <HomeHeader />
          {/* <ThemeButton onPress={NavHandle} title={'navigate'} /> */}

          <View style={styles.searchContainer}>
            <View style={styles.searchBar}>
              {/* <InputComponent placeholder={'Search by name'} type={'text'} styles={styles.searchText} defaultValue={'search'} /> */}
              <TextInput
                placeholderTextColor={'grey'}
                placeholder="Search by name"
                numberOfLines={1}
                value={searchText}
                onChangeText={setSearchText} // Update search text
                onSubmitEditing={handleSearch} // Trigger search on submit
                style={styles.searchTextStyle}
              />
              <Touchable onPress={handleSearch}>
                <Image
                  source={searchIcon}
                  resizeMode="contain"
                  style={styles.searchIconStyle}
                />
              </Touchable>
            </View>
            <Touchable onPress={() => setFilterVisible(true)}>
              <Image
                source={filter}
                resizeMode="contain"
                style={styles.filterIconStyle}
              />
            </Touchable>
            {/* The Filter Bottom Sheet Modal */}
            <FilterBottomSheet
              isVisible={isFilterVisible}
              ToggleFunction={setFilterVisible}
              onFilter={handleApplyFilter}
            />
          </View>

          <View style={styles.certifiedStyle}>
            <View style={styles.certifiedTopStyle}>
              <TextComponent
                text={'Certified Phlebotomists'}
                numberOfLines={1}
                styles={styles.certifiedTitle}
              />
              <Touchable
                onPress={() => {
                  navigation.navigate('PhlebotomistDetails');
                }}>
                <TextComponent
                  text={'View All'}
                  numberOfLines={1}
                  styles={styles.viewAll}
                />
              </Touchable>
            </View>

            <FlatList
              data={data?.data?.doctors}
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
            <Touchable
              onPress={() => {
                navigation.navigate('PhlebotomistDetails');
              }}>
              <TextComponent
                text={'View All'}
                numberOfLines={1}
                styles={styles.viewAll}
              />
            </Touchable>
          </View>
          <View style={{marginBottom: hp('2')}}>
            <FlatList
              data={data?.data?.doctors}
              renderItem={renderItemCard}
              horizontal
              contentContainerStyle={styles.flatlistStyleOne}
              keyExtractor={item => item.id}
            />
          </View>
        </ScrollView>
      </GestureHandlerRootView>
    </>
  );
};

export default HomeScreen;
