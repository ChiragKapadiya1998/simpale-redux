import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {deleteUer} from '../redux/Action/action';

const DemoScreen = () => {
  const name = useSelector((state) => state.userData);
  const dispatch = useDispatch();

  return (
    <View>
      {name.map((item) => {
        return (
          <View
            key={item.key}
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal: 20,
              marginVertical: 20,
            }}>
            <Text>{item.names}</Text>
            <Button
              title="delete"
              onPress={() => dispatch(deleteUer(item.key))}
            />
          </View>
        );
      })}
    </View>
  );
};

export default DemoScreen;

const styles = StyleSheet.create({});
