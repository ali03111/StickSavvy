import { View, Text, ScrollView, FlatList } from 'react-native'
import React from 'react'
import BackHeader from '../../Components/BackHeader'
import { filterIcon, icon } from '../../Assets'
import { certifiedPhl } from '../../Utils/localDB'
import PhlebotomistsCard from '../../Components/PhlebotomistsCard'
import { styles } from './style'
import { Colors } from '../../Theme/Variables'
import { wp, hp } from '../../Config/responsive'

export default function PhlebotomistDetails() {
  const renderItem = ({item, index}) => {
    return (
      <PhlebotomistsCard
        cardStyle={{
          backgroundColor: index % 2 == 0 ? Colors.bgLBlue : Colors.bgLPink,
          width: wp('92'),
          marginHorizontal: wp('4'),
          marginBottom: hp('1.5'),
        }}
        image={item?.image}
        location={item?.location}
        name={item?.name}
        ratings={item?.ratings}
      />
    );
  };
  return (
    <>
        <ScrollView style={{flex:1, backgroundColor: Colors.white}}>
        <BackHeader headerTitle={'Details'} isBack={true} rightIcon={filterIcon}/>
        <FlatList
            data={certifiedPhl}
            renderItem={renderItem}
            contentContainerStyle={styles.flatlistStyleOne}
            keyExtractor={item => item.id}
          />
        </ScrollView>

    </>
  )
}