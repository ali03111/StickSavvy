import { View, Text, ScrollView, FlatList } from 'react-native'
import React from 'react'
import BackHeader from '../../Components/BackHeader'
import { filterIcon, icon } from '../../Assets'
import { certifiedPhl } from '../../Utils/localDB'
import PhlebotomistsCard from '../../Components/PhlebotomistsCard'
import { styles } from './style'
import { Colors } from '../../Theme/Variables'
import { wp, hp } from '../../Config/responsive'
import { useQuery } from '@tanstack/react-query'
import { doctorsUrl, imageURL } from '../../Utils/Urls'
import API from '../../Utils/helperFunc'

export default function PhlebotomistDetails() {

  const { data } = useQuery({
    queryKey: ['homeData'],
    queryFn: () => API.get(doctorsUrl),
  });
  
  console.log(data?.data, 'data for doctor');

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
        isRight={false}
      />
    );
  };
  return (
    <>
        <ScrollView style={{flex:1, backgroundColor: Colors.white}}>
        <BackHeader headerTitle={'Details'} isBack={true} />
        <FlatList
            data={data?.data?.doctors}
            renderItem={renderItem}
            contentContainerStyle={styles.flatlistStyleOne}
            keyExtractor={item => item.id}
          />
        </ScrollView>

    </>
  )
}