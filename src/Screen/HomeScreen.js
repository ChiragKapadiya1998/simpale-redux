import React, {useState} from 'react';
import {View, Text, SafeAreaView, Button} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {useSelector, useDispatch} from 'react-redux';
import {add, remove, namechang, AddName} from '../redux/Action/action';
// import {ADDTONUM} from '../redux/Action/actionTypes';

const HomeScreen = ({navigation}) => {
  const [text, setText] = useState('');
  const data = useSelector((state) => state.counter);
  const name = useSelector((state) => state.name);
  const dispatch = useDispatch();

  const buttonadd = (item) => {
    dispatch(add(item));
  };

  return (
    <SafeAreaView>
      <View>
        <Button title="ADD" onPress={() => buttonadd(data)} />
        <Text style={{alignSelf: 'center'}}>count :{data} </Text>
        <Button title="REMOVE" onPress={() => dispatch(remove(data))} />

        <Text>Name is :{name}</Text>
        <Button title="ChangeName" onPress={() => dispatch(namechang())} />
        <Button
          title="nextScreen"
          onPress={() => navigation.navigate('IndexScreen')}
        />
        <View style={{justifyContent: 'center'}}>
          <Text>Enter the name:</Text>
          <TextInput
            style={{
              borderWidth: 1,
              marginHorizontal: 20,
              padding: 10,
              fontSize: 18,
            }}
            placeholder="Enter the name"
            value={text}
            onChangeText={(value) => setText(value)}
          />
          <Button
            title="Save"
            onPress={() => dispatch(AddName(text), setText(''))}
          />
        </View>
        <Button
          title="DemoScreen"
          onPress={() => navigation.navigate('DemoScreen')}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
