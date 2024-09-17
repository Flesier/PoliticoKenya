import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';

function NewsScreen() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch('https://newsapi.org/v2/top-headlines?country=ke&apiKey=YOUR_API_KEY')
      .then(response => response.json())
      .then(data => setNews(data.articles));
  }, []);

  return (
    <View>
      <FlatList
        data={news}
        keyExtractor={(item) => item.url}
        renderItem={({ item }) => (
          <View>
            <Text>{item.title}</Text>
            <Text>{item.description}</Text>
          </View>
        )}
      />
    </View>
  );
}

export default NewsScreen;
