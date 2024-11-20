import React from 'react';
import {View, Text, FlatList, ActivityIndicator} from 'react-native';
import {useQuery} from '@tanstack/react-query'; // or `react-query` based on your setup
import API from '../../Utils/helperFunc';
import {doctorsUrl, imageURL} from '../../Utils/Urls';
import BackHeader from '../../Components/BackHeader';
import {styles} from './styles';
import PhlebotomistsCard from '../../Components/PhlebotomistsCard';
import {Colors} from '../../Theme/Variables';
import {hp} from '../../Config/responsive';

const SearchResultsScreen = ({route}) => {
  // Get the rating parameter passed from the previous screen
  const {rating, searchText} = route.params || {};
  console.log(rating, searchText, 'searchText or rating');

  const {data, isLoading, error} = useQuery({
    queryKey: ['homeData', {rating, searchText}],
    queryFn: () =>
      API.get(
        `${doctorsUrl}?${searchText ? `first_name=${searchText}` : ''}${
          searchText && rating ? '&' : ''
        }${rating ? `rating=${rating}` : ''}`,
      ),
  });
  console.log(data?.data, 'data >>>>> sss');

  const renderItem = ({item, index}) => {
    return (
      <PhlebotomistsCard
        cardStyle={{
          backgroundColor: index % 2 == 0 ? Colors.bgLBlue : Colors.bgLPink,
        }}
        image={imageURL + item?.profile_image}
        location={item?.location || 'N/A'}
        name={item?.last_name}
        ratings={item?.avg_rating}
        profileId={item?.id}
      />
    );
  };

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Error fetching data. Please try again.</Text>
      </View>
    );
  }
  const doctors = data?.data?.doctors || [];
  // Render search results
  return (
    <View style={{flex: 1}}>
      <BackHeader isBack={true} headerTitle={'Search Result'} />
      {doctors.length === 0 ? (
        <View
          style={{
            marginTop: hp('3'),
            marginBottom: hp('2'),
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: 'grey'}}>No results found</Text>
        </View>
      ) : (
        <FlatList
          data={doctors}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
          contentContainerStyle={styles.listStyle}
        />
      )}
    </View>
  );
};

export default SearchResultsScreen;
