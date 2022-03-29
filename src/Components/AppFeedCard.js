import React,{useState} from 'react'
import { Text,Box, Center,Image, FormControl,Input,AspectRatio, Stack,Heading,HStack ,Button,Modal, FlatList} from 'native-base'
import { addDoc, collection,getDocs,where,query } from "firebase/firestore"; 
import { db } from '../../Config/FireBase';

function AppFeedCard(props) {
    const [showModal, setShowModal] = useState(false);
    const [comment,setComment] = useState('');
    const [comments,setComments]=useState();

    const getComment=async()=>{
        setShowModal(true)
        console.log('getting comment for',props.id)
        try {

            const col = collection(db, "comment");
            const q = query(col, where("id", "==", props.id));
            const querySnapshot = await getDocs(q);
            let array=[];
            querySnapshot.forEach((doc) => {
            array.push(doc.data())
            console.log(doc.id, " => ", doc.data());
            });
            setComments(array);
          } catch (error) {
            console.error("Error querying document: ", error);
          }
    }

    const handleComment=async ()=>{
        console.log('update database ke',props.id,comment);
        try {
            const docRef = await addDoc(collection(db, "comment"), {
              comment: comment,
              id:props.id
            });
            console.log("Document written with ID: ", docRef.id);
          } catch (error) {
            console.error("Error adding document: ", error);
          }
        setShowModal(false);
    }

  return (
    <Box alignItems="center" p={1} >
    <Box maxW="80" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" 
    _dark={{borderColor: "coolGray.600",backgroundColor: "gray.700"}} 
    _web={{shadow: 2,borderWidth: 0}} 
    _light={{backgroundColor: "gray.50"}}>
    <Box>
      <AspectRatio w="100%" ratio={16 / 9}>
        <Image source={{ 
            uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg"
            }} alt="image" />
      </AspectRatio>
      <Center bg="violet.500" _dark={{
      bg: "violet.400"
    }} _text={{
      color: "warmGray.50",
      fontWeight: "700",
      fontSize: "xs"
    }} position="absolute" bottom="0" px="3" py="1.5">
        PHOTOS
      </Center>
    </Box>
    <Stack p="4" space={3}>
      <Stack space={2}>
        <Heading size="md" ml="-1">
          The Garden City {props.id}
        </Heading>
        <Text fontSize="xs" _light={{
        color: "violet.500"
      }} _dark={{
        color: "violet.400"
      }} fontWeight="500" ml="-0.5" mt="-1">
          The Silicon Valley of India.
        </Text>
      </Stack>
      <Text fontWeight="400">
        Bengaluru (also called Bangalore) is the center of India's high-tech
        industry. The city is also known for its parks and nightlife.
      </Text>
      <HStack alignItems="center" space={4} justifyContent="space-between">
        <HStack alignItems="center">
          <Text color="coolGray.600" _dark={{color: "warmGray.200"}} fontWeight="400">
            6 mins ago
          </Text>
          <Button onPress={()=>setShowModal(true)}>Lihat</Button>
          <Button onPress={()=>getComment()}>Lihat comment</Button>
          <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
            <Modal.Content maxWidth="400px">
            <Modal.CloseButton />
            <Modal.Header>Comment</Modal.Header>
            <Modal.Body>
            {
            comments?
                <FlatList
                data={comments}
                renderItem={({
                    item
                    }) =><Text keyExtractor={item.id}>{item.comment}</Text>
                }
                />
                :
                <></>
            }
                <FormControl>
                    <Input onChangeText={(text)=>setComment(text)}/>
                </FormControl>
            </Modal.Body>
            <Modal.Footer>
                <Button.Group space={2}>
                <Button variant="ghost" colorScheme="blueGray" onPress={() => {setShowModal(false)}}>
                    Cancel
                </Button>
                <Button onPress={() => {handleComment()}}>
                    Save
                </Button>
                </Button.Group>
            </Modal.Footer>
            </Modal.Content>
        </Modal>
        </HStack>
      </HStack>
    </Stack>
  </Box>
</Box>
  )
}

export default AppFeedCard