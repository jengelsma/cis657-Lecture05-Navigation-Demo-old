import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { Card } from 'react-native-elements';
const ProfileScreen = ({ route,navigation }) => {

  console.log("Profile rendered with ", route.params);
  

  const [name, setName] = useState('Hudsonville Honey');
  const [imageUrl, setImageUrl] = useState(
    'https://hudsonvillehoney.com//wp-content/uploads/2014/03/PB285718.jpg'
  );
  const [description, setDescription] = useState(
    'Welcome to the wonderfully fascinating and sweet world of beekeeping!'
  );

  useEffect(() => {
    console.log('Profile: called anytime a specific state variable changes')
    if (route.params?.name) {
      setName(route.params.name)
    }
    if (route.params?.imageUrl) {
      setImageUrl(route.params.imageUrl);
    }
    if (route.params?.description) {
      setDescription(route.params.description);
    }
  }, [route.params?.name, route.params?.imageUrl, route.params?.description]);

  return (
    <View>
      <Card
        title={name}
        image={{
          uri:
            imageUrl,
        }}
      >
        <Text style={{ marginBottom: 10 }}>
          {description}
        </Text>
      </Card>
      <Button
        title="Go to Edit Profile"
        onPress={() => navigation.navigate(
          'ProfileEdit',
          {name, imageUrl, description}
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ProfileScreen;
