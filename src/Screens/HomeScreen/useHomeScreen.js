import { View, Text } from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux'
import useReduxStore from '../../Hooks/UseReduxStore'
import { logOutUser } from '../../Redux/Action/AuthAction'
import { doctorsUrl } from '../../Utils/Urls'
import { useQuery } from '@tanstack/react-query'
import API from '../../Utils/helperFunc'

export default function useHomeScreen() {
  const {dispatch} = useReduxStore();
  

  const logoutHandle =  () =>{
  dispatch(logOutUser())
  }

  const { data } = useQuery({
    queryKey: ['homeData'],
    queryFn: () => API.get(doctorsUrl),
  });
  
  console.log(data?.data, 'data for doctor');
  
  

  return {
    logoutHandle,
    data,
  }
}