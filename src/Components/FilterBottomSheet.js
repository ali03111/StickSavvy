import React, {useEffect, useState} from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  Image,
  ScrollView,
} from 'react-native';
import {Slider} from '@react-native-community/slider';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {arrDown} from '../Assets';
import {TextComponent} from './TextComponent';
import ThemeButton from './ThemeButton';
import {hp, wp} from '../Config/responsive';
import {Colors} from '../Theme/Variables';

export const FilterBottomSheet = ({ToggleFunction, isVisible, onFilter}) => {
  const [selectedRating, setSelectedRating] = useState(3);
  // const [distanceRange, setDistanceRange] = useState({min: 0, max: 5});

  //  Reset filters when modal is closed
  useEffect(() => {
    if (!isVisible) {
      setSelectedRating(3);
      // setDistanceRange({min: 0, max: 5});
    }
  }, [isVisible]);

  const handleRatingPress = rating => {
    setSelectedRating(rating);
  };

  const handleApply = () => {
    if (isVisible) {
      onFilter(selectedRating);
      ToggleFunction(false);
    }
  };

  return (
    <>
      <Modal
        animationType="fade"
        transparent={true}
        visible={isVisible}
        onRequestClose={() => ToggleFunction(false)}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Pressable
              onPress={() => ToggleFunction(false)}
              style={styles.closeBtn}>
              <Text>Close</Text>
            </Pressable>
            <TextComponent text="Filter Search" styles={styles.modalTitle} />

            <ScrollView
              contentContainerStyle={{flexGrow: 1}}
              showsVerticalScrollIndicator={false}>
              {/* Rating Section */}
              <TextComponent text="By Rating" styles={styles.catName} />
              <View style={styles.ratingContainer}>
                {[1, 2, 3, 4, 5].map((star, index) => (
                  <Pressable
                    key={index}
                    onPress={() => handleRatingPress(star)}>
                    <FontAwesome
                      name="star"
                      size={30}
                      color={index < selectedRating ? '#FFD700' : '#E0E0E0'}
                      style={styles.star}
                    />
                  </Pressable>
                ))}
              </View>

              {/* Distance Slider Section */}
              {/* <TextComponent text="By Distance" styles={styles.catName} /> */}
              <View style={styles.distanceContainer}>
                {/* <Slider
                  style={{width: '100%', height: 40}}
                  minimumValue={0}
                  maximumValue={10}
                  step={1}
                  minimumTrackTintColor="#FF0000"
                  maximumTrackTintColor="#E0E0E0"
                  thumbTintColor="#FF0000"
                  onValueChange={value =>
                    setDistanceRange(prevState => ({...prevState, max: value}))
                  }
                  value={10}
                /> */}

                <View style={styles.distanceLabels}>
                  {/* <Text style={styles.distanceText}>
                    {distanceRange.min.toString()+  'km'}
                  </Text>
                  <Text style={styles.distanceText}>
                    {distanceRange.max.toString() 
                    + 'km'}
                  </Text> */}
                </View>
              </View>
            </ScrollView>

            <ThemeButton
              title="Apply"
              style={styles.applyButton}
              onPress={handleApply}
            />
          </View>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  modalView: {
    width: '100%',
    backgroundColor: 'white',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    paddingHorizontal: wp('4'),
    paddingVertical: hp('1.5'),
    paddingBottom: hp('3'),
    shadowColor: '#000',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 10,
  },
  CloseBtn: {
    alignSelf: 'flex-end',
    marginTop: hp('0.3'),
  },
  closeIcon: {
    width: wp('6'),
    height: hp('3'),
    resizeMode: 'contain',
  },
  modalTitle: {
    fontSize: hp('2.7'),
    fontWeight: '600',
    alignSelf: 'center',
    marginBottom: hp('2'),
  },
  catName: {
    fontSize: hp('2'),
    fontWeight: '600',
    marginTop: hp('3'),
    marginBottom: hp('2'),
  },
  ratingContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: hp('2'),
  },
  star: {
    marginHorizontal: wp('1'),
  },
  distanceContainer: {
    marginVertical: hp('2'),
  },
  distanceLabels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: wp('2'),
  },
  distanceText: {
    fontSize: hp('2'),
    color: '#000',
  },
  applyButton: {
    backgroundColor: Colors.themeRed,
    marginTop: hp('2'),
  },
});
