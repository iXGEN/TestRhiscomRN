import {useEffect} from 'react';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import {WEB_CLIENT_ID} from '@env';
const useLoginScreen = (navigation: any) => {
  useEffect(() => {
    GoogleSignin.configure({
      webClientId: WEB_CLIENT_ID,
    });
  }, []);

  const onGoogleButtonPress = async () => {
    try {
      await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});

      const {idToken} = await GoogleSignin.signIn();

      const googleCredential = auth.GoogleAuthProvider.credential(idToken);

      await auth().signInWithCredential(googleCredential);

      navigation.navigate('NameListScreen');
    } catch (error) {
      console.log(error);
    }
  };

  return {
    onGoogleButtonPress,
  };
};

export default useLoginScreen;
