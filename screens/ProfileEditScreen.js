import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { Feather } from '@expo/vector-icons';

const ProfileEditScreen = ({route, navigation}) => {

  const initialName = route.params.name;
  const initialImageUrl = route.params.imageUrl;
  const initialDescription = route.params.description;
  const [name, setName] = useState(initialName);
  const [imageUrl, setImageUrl] = useState(initialImageUrl);
  const [description, setDescription] = useState(initialDescription);

  navigation.setOptions({
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
        <Text> Cancel </Text>
      </TouchableOpacity>
    ),
    headerLeft: () => (
      <TouchableOpacity
        onPress={() => {
          // navigate back with new settings.
          navigation.navigate('Profile', {
            name,
            imageUrl,
            description
          });
        }}
      >
        <Text> Save </Text>
      </TouchableOpacity>
    ),
  });

  return (
    <View>
      <Input 
        placeholder='Enter name'
        value={name}
        onChangeText={setName} 
      />
      <Input 
        placeholder='Enter image URL'
        value={imageUrl}
        onChangeText={setImageUrl} 
      />
      <Input 
        placeholder='Enter description' 
        value={description}
        onChangeText={setDescription}
        multiline={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ProfileEditScreen;
