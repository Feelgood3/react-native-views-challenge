import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Image, Pressable, ScrollView } from 'react-native';

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
  mainContainer: {
    flex: 1,

    paddingLeft: 60,
    paddingRight: 60,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  imageContainer: {
    alignItems: 'center',
    paddingBottom: 40,
    paddingTop: 50
  },
  controlsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#f3f6f4',
    height: 60
  },
  textControls: {
    paddingTop: 30
  },
  pageTitle: {
    paddingTop: 30,
    color: '#b2b2b2',
  },
  labelText: {
    color: '#b2b2b2',
    paddingTop: 10
  },
  formQuestions: {
    height: 30,
    margin: 4,
    borderBottomWidth: 1,
  },
  profileImage: {
    // resizeMode: 'cover',
    width: 200,
    height:200,
    paddingBottom: 80,
    borderTopRightRadius: 100,
    borderBottomRightRadius: 100,
    borderBottomLeftRadius: 100,
    borderTopLeftRadius: 100,
  }
});

export default function Main() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  
  return (
    <ScrollView style={styles.appContainer}>
      <View style={styles.controlsContainer}>
        <Pressable>
          <Text style={styles.textControls}>
            Cancel
          </Text>
        </Pressable>
          <Text style={styles.pageTitle}>
            Edit Profile
          </Text>
        <Pressable>
            <Text style={styles.textControls}>
              Save
            </Text>
        </Pressable>
      </View>
      <View style={styles.mainContainer}>
        <View style={styles.imageContainer}>
          <Image 
            style={styles.profileImage}
            source={{uri: "https://avatars.githubusercontent.com/u/105378382?v=4"}} />
        </View>
        <View style={styles.formContainer}>
          <Text style={styles.labelText}>
            YOUR EMAIL
          </Text>
          <TextInput
            style={styles.formQuestions}
            onChangeText={newText => setEmail(newText)}
            defaultValue={email}
            keyboardType={'email-address'}
          />
          <Text style={styles.labelText}>
            YOUR PASSWORD
          </Text>
          <TextInput
            style={styles.formQuestions}
            onChangeText={newText => setPassword(newText)}
            defaultValue={password}
            secureTextEntry={true} 
            />
          <Text style={styles.labelText}>
            YOUR PHONE
          </Text>
          <TextInput
            style={styles.formQuestions}
            onChangeText={newText => setPhone(newText)}
            defaultValue={phone}
            keyboardType={'phone-pad'}
            />
          <Text style={styles.labelText}>
          CITY, STATE
          </Text>
          <TextInput
            style={styles.formQuestions}
            onChangeText={newText => setCity(newText)}
            defaultValue={city}
            />
          <Text style={styles.labelText}>
          COUNTRY
          </Text>
          <TextInput
            style={styles.formQuestions}
            onChangeText={newText => setCountry(newText)}
            defaultValue={country}
            />
        </View>
      </View>
    </ScrollView>
  );
}
