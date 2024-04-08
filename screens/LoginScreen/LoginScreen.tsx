import React, {useEffect} from 'react';
import {View, Button, Alert} from 'react-native';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';

const LoginScreen = ({navigation}: any) => {
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '649533092887-ncrpa99jjogab452s1niopjnm6jetu00.apps.googleusercontent.com',
    });
  }, []);

  async function onGoogleButtonPress() {
    try {
      // Check if your device supports Google Play
      await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
      // Get the users ID token
      const {idToken, user} = await GoogleSignin.signIn();
      /*  console.log('idToken', idToken); */
      console.log('user', user);
      Alert.alert('Success!');

      // Create a Google credential with the token
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);

      await auth().signInWithCredential(googleCredential);

      // Navigate to NameListScreen
      navigation.navigate('NameListScreen');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View>
      <Button
        title="Google Sign-In"
        onPress={() =>
          onGoogleButtonPress().then(() =>
            console.log('Signed in with Google!'),
          )
        }
      />
    </View>
  );
};

export default LoginScreen;
