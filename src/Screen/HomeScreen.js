import React from 'react'
import { View, Text, SafeAreaView, Button } from 'react-native'
import {useSelector ,useDispatch} from 'react-redux';
import {add ,remove,namechang} from '../redux/Action/action';

const HomeScreen = ({navigation}) => {
   const data = useSelector(((state)=>state.counter));
   const name=useSelector(((state)=>state.name));

   const dispatch=useDispatch();

    return (
        <SafeAreaView>
            <View>
                <Button  title='ADD' onPress={()=>dispatch(add())}/>
                <Text style={{alignSelf:'center'}}>count :{data} </Text>
                <Button  title='REMOVE' onPress={()=>dispatch(remove())}/>
                <Text >Name is  :{name}</Text>
                <Button title='ChangeName' onPress={()=>dispatch(namechang())}/>
                <Button  title='nextScreen' onPress={()=>navigation.navigate('IndexScreen')}/>
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen;
