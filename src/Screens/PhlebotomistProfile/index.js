import {View, Text, ScrollView, Image, FlatList, TextInput} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from './style';
import BackHeader from '../../Components/BackHeader';
import {icon, star, stars, userImage} from '../../Assets';
import {TextComponent} from '../../Components/TextComponent';
import Reviews from '../../Components/Reviews';
import {hp} from '../../Config/responsive';
import {reviewsData} from '../../Utils/localDB';
import {useRoute} from '@react-navigation/native';
import {useMutation, useQuery} from '@tanstack/react-query';
import {doctorsById, doctorsUrl, imageURL} from '../../Utils/Urls';
import API from '../../Utils/helperFunc';
import useReduxStore from '../../Hooks/UseReduxStore';
import usePhlebotomistProfile from './usePhlebotomistProfile';
import ThemeButton from '../../Components/ThemeButton';
import Icon from 'react-native-vector-icons/AntDesign';
import {Touchable} from '../../Components/Touchable';
import { successMessage } from '../../Config/NotificationMessage';

export default function PhlebotomistProfile({navigation}) {
  const {addUserReview} = usePhlebotomistProfile(navigation);
  const {getState} = useReduxStore();
  const {userData} = getState('Auth');
  console.log(userData, 'userData >>');
  
  const route = useRoute();
  const {profileId} = route.params || {}; // Destructure profileId from route params
  const userID = profileId;

  if (!profileId) {
    console.error('Profile ID is missing from navigation parameters');
    return null; // Optionally render some fallback content here
  }

  // Fetch data using profileId
  const doctorId = `${doctorsById}/${profileId}`;

  const {data, isLoading, error} = useQuery({
    queryKey: ['doctorData', profileId], // query key should include profileId
    queryFn: () => API.get(doctorId), // API call with dynamic ID
    enabled: !!profileId, // Only run the query if profileId is available
  });

  console.log(data?.data?.doctor, 'doctor');

  const [rating, setRating] = useState(0); // Rating state
  const [comment, setComment] = useState(''); // Comment state

  // Using useMutation to handle the POST request
  const {mutate} = useMutation({
    mutationFn: addUserReview,
    onSuccess: data => {
      console.log('Review added successfully:', data);
      setRating(0);
      setComment('');
      successMessage('Review added.')
    },
    onError: error => {
      console.error('Error adding review:', error);
    },
  });

  // Handle submit review
  const handleSubmit = () => {
    mutate({userID, rating, comment});
  };

  const renderItem = ({item}) => {
    return (
      <Reviews
        date={item?.created_at.split('T')[0]} // Formatting the date
        user={item?.user} // Pass the user object
        reviewText={item?.comment} // The review comment
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
            source={{uri: imageURL + data?.data?.doctor?.profile_image}}
            resizeMode="cover"
            style={styles.userProfileImg}
          />
          <TextComponent
            text={`${data?.data?.doctor?.first_name} ${data?.data?.doctor?.last_name}`}
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
                text={data?.data?.doctor?.avg_rating}
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
              text={'Score'}
              styles={{...styles.headingStyle, width: 'auto', marginBottom: 0}}
            />
          </View>
          <View style={{width: '100%'}}>
            <View style={styles.starsContainer}>
              {[1, 2, 3, 4, 5].map(star => (
                <Touchable
                  key={star}
                  onPress={() => setRating(star)} // Set rating when star is selected
                  style={styles.starTouchable}>
                  <Icon                  
                    name={star <= rating ? 'star' : 'staro'} // Filled or empty star based on rating
                    size={30}
                    color="#FFCB4B" // Customize the color
                  />
                </Touchable>
              ))}
            </View>

            <TextInput
              style={{borderWidth: 0.5, borderRadius: 10, marginBottom: 20, color: 'black'}}
              value={comment}
              onChangeText={setComment}
              placeholder="Review:"
            />

            <ThemeButton title="Post" onPress={handleSubmit} />
          </View>

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
              <TextComponent
                text={data?.data?.doctor?.reviews_count}
                styles={styles.numOfReviewText}
              />
            </View>
          </View>
          <View style={{marginBottom: hp('2'), flex: 1, width: '100%'}}>
            <FlatList
              renderItem={renderItem}
              data={data?.data?.doctor?.reviews}
              keyExtractor={item => item.id}
            />
          </View>
        </View>
      </ScrollView>
    </>
  );
}
