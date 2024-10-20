import React from 'react';
import {View, Button} from 'react-native';

const HomeScreen: React.FC<{navigation: any}> = ({navigation}) => {
  return (
    <View style={{padding: 20}}>
      <Button title="Tasks" onPress={() => navigation.navigate('Tasks')} />
      <Button title="List" onPress={() => navigation.navigate('List')} />
    </View>
  );
};

export default HomeScreen;
