import React, {useEffect, useState} from 'react';
import {View, FlatList, Text, ActivityIndicator, Image} from 'react-native';
import axios from 'axios';

const ListScreen: React.FC = () => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://6172cfe5110a740017222e2b.mockapi.io/elements',
        );
        setData(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <View style={{padding: 20}}>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View>
            <Text>{item.name}</Text>
            {item.image && (
              <Image
                source={{uri: item.image}}
                style={{width: 50, height: 50}}
              />
            )}
          </View>
        )}
      />
    </View>
  );
};

export default ListScreen;
