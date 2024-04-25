import {View, Text, ScrollView, Image, TextInput} from 'react-native';
import React, {useState} from 'react';
import BackHeader from '../../Components/BackHeader';
import {styles} from './style';
import {stars, userImage} from '../../Assets';
import {TextComponent} from '../../Components/TextComponent';
import {InputComponent} from '../../Components/InputComponent';
import {hp} from '../../Config/responsive';
import ThemeButton from '../../Components/ThemeButton';

export default function AddReview() {
  const [text, setText] = useState('Nothing here');
  return (
    <>
      <ScrollView style={styles.container}>
        <BackHeader
          isBack={true}
          saveResetText={'Cancel'}
          headerTitle={'Review'}
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
        </View>
        <View style={styles.addReviewStyleContainer}>
          <TextComponent text={'Biography'} styles={styles.headingStyle} />
          <Image source={stars} resizeMode="contain" style={styles.imgStyle} />
          {/* <TextComponent text={'Biography'} styles={styles.headingStyle} style={styles.textareaContainer} /> */}
          <View style={styles.addReviewContainer}>
            <TextComponent text={'Review:'} styles={{marginBottom: hp('0')}} />
            <TextInput
              style={styles.reviewTextStyle}
              // placeholder="Type here to translate!"
              onChangeText={newText => setText(newText)}
              defaultValue={text}
              multiline={true}
            />
          </View>
          <ThemeButton title={'Post'}/>
        </View>
      </ScrollView>
    </>
  );
}
