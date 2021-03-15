import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {datafatch} from '../redux/Action/action';

const IndexScreen = () => {
  const name = useSelector((state) => state.name);
  const username = useSelector((state) => state.username);
  const email = useSelector((state) => state.email);
  const phone = useSelector((state) => state.phone);
  const street = useSelector((state) => state.street);
  const suite = useSelector((state) => state.suite);
  const city = useSelector((state) => state.city);
  const zipcode = useSelector((state) => state.zipcode);
  const website = useSelector((state) => state.website);
  const dispatch = useDispatch();
  return (
    <View>
      <Button title="add to data" onPress={() => dispatch(datafatch())} />
      <View style={styles.card}>
        <Text>Name : {name} </Text>
        <Text>UserName :{username}</Text>
        <Text>Email :{email}</Text>
        <Text>MoblieNo :{phone}</Text>
        <Text>
          Address :{street},{suite},{city},{zipcode}
        </Text>
        <Text>Website :{website}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  card: {
    margin: 10,
    padding: 10,
    backgroundColor: '#E8E8E8',
    borderRadius: 20,
    borderWidth: 2,
    shadowOpacity: 10,
  },
});
export default IndexScreen;
