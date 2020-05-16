import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Input, Button } from 'react-native-elements';

const ProfileEditScreen = ({route, navigation}) => {

  const initialName = route.params.name;
  const initialImageUrl = route.params.imageUrl;
  const initialDescription = route.params.description;
  const [name, setName] = useState(initialName);
  const [imageUrl, setImageUrl] = useState(initialImageUrl);
  const [description, setDescription] = useState(initialDescription);

  console.log('ProfileEdit: ', imageUrl);
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
      <Button 
        title='Save Changes'
        onPress={() => {
          navigation.navigate(
            'Profile', {name, imageUrl, description}
            );
        }}/>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ProfileEditScreen;
