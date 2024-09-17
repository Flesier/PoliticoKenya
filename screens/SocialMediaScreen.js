import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';

function SocialMediaScreen() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://api.twitter.com/2/tweets/search/recent?query=Kenya&tweet.fields=created_at&expansions=author_id&user.fields=username', {
      headers: {
        'Authorization': `Bearer YOUR_TWITTER_BEARER_TOKEN`
      }
    })
      .then(response => response.json())
      .then(data => setPosts(data.data));
  }, []);

  return (
    <View>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <Text>{item.text}</Text>
          </View>
        )}
      />
    </View>
  );
}

export default SocialMediaScreen;
