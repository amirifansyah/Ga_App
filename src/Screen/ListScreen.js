// import { Box, Text } from 'native-base'
// import React from 'react'
import React, { useEffect, useState } from 'react'
import { Text,Box,FlatList,Input, Spinner } from 'native-base'

import AppFeedCard from '../Components/AppFeedCard'
import ApiFeed from '../Api/ApiFeed';

function ListScreen() {
    const [feed,setFeed]=useState();
    const getApi = async () =>{
        try {
            const result =  await ApiFeed.get('/posts');
            console.log(result);
            setFeed(result.data);
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getApi();
    }, [])
  return (
    <>
        <Box safeArea bg='#ffd600' width='100%' height='50' alignItems='center'>
            <Input mx="3" placeholder="Cari" w='300' height='25' maxWidth="300px" bg='white' />
            <Text>search</Text>
        </Box>
        <Box alignItems='center' flex={1}>  
        {feed?
            <FlatList data={feed} renderItem={({item}) => <AppFeedCard id={item.id}/>}/>    
            :
            <Spinner/>
        }
        </Box>
    </>
  )
}

export default ListScreen