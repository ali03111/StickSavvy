import {View, Text, ScrollView, Image, FlatList} from 'react-native';
import React from 'react';
import {styles} from './style';
import BackHeader from '../../Components/BackHeader';
import {icon, star, stars, userImage} from '../../Assets';
import {TextComponent} from '../../Components/TextComponent';
import Reviews from '../../Components/Reviews';
import {hp} from '../../Config/responsive';
import {reviewsData} from '../../Utils/localDB';

export default function PhlebotomistProfile() {
  const renderItem = ({item, index}) => {
    return (
      <Reviews
        date={item?.date}
        reviewText={item?.text}
        userImage={item?.image}
        userName={item?.name}
      />
    );
  };
  return (
    <>
      <ScrollView style={styles.container}>
        <BackHeader
          isBack={true}
          rightIcon={icon}
          headerTitle={'Phlebotomist Profile'}
        />
        <View style={styles.innerWrapper}>
          <Image
            source={userImage}
            resizeMode="contain"
            style={styles.userProfileImg}
          />
          <TextComponent
            text={'John Doe'}
            numberOfLines={1}
            styles={styles.userTitle}
          />
          <TextComponent
            text={
              'Phlebotomist, University of Cincinnati Medical Center, Division of Infectious Diseases'
            }
            styles={styles.userAboutText}
          />
          <TextComponent
            text={'New Haven Health Department'}
            numberOfLines={1}
            styles={styles.userDepartment}
          />
          <View style={styles.expWrapper}>
            <View style={styles.blueBG}>
              <TextComponent
                text={'Exp'}
                numberOfLines={1}
                styles={styles.blueBGText}
              />
              <TextComponent
                text={'10 Yrs'}
                numberOfLines={1}
                styles={styles.blueBGHeading}
              />
            </View>
            <View style={styles.blueBG}>
              <TextComponent
                text={'Rating'}
                numberOfLines={1}
                styles={styles.blueBGText}
              />
              <TextComponent
                text={'4.74'}
                numberOfLines={1}
                styles={styles.blueBGHeading}
              />
            </View>
            <View style={styles.blueBG}>
              <TextComponent
                text={'Cases'}
                numberOfLines={1}
                styles={styles.blueBGText}
              />
              <TextComponent
                text={'1453'}
                numberOfLines={1}
                styles={styles.blueBGHeading}
              />
            </View>
          </View>
          <TextComponent text={'Biography'} styles={styles.headingStyle} />
          <TextComponent
            text={`Kevin Early is the Program Director and Clinical Coordinator of the highly-specialized Invasive Cardiovascular Technology Program at Trinity Health of New England in Hartford, Connecticut. Kevin began his career in cardiovascular technology in 1979, with prior experience at Montefiore Medical Center in New York and Danbury Health Systems in Connecticut.  `}
            styles={styles.biographyText}
          />
          <View style={styles.patientReviewMain}>
            <TextComponent
              text={'Patient Reviews'}
              styles={{...styles.headingStyle, width: 'auto', marginBottom: 0}}
            />
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                source={stars}
                resizeMode="contain"
                style={styles.starsStyle}
              />
              <TextComponent text={'( 457 )'} styles={styles.numOfReviewText} />
            </View>
          </View>
          <View style={{marginBottom: hp('2')}}>
            <FlatList
              renderItem={renderItem}
              data={reviewsData}
              keyExtractor={item => item.id}
            />
          </View>
       
        </View>
      </ScrollView>
    </>
  );
}
