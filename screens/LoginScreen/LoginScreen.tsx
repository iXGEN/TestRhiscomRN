import React from 'react';
import {View, Button} from 'react-native';
import {styles} from './styles';
import useLoginScreen from './useLoginScreen';

const LoginScreen = ({navigation}: any) => {
  const {onGoogleButtonPress} = useLoginScreen(navigation);

  return (
    <View style={styles.container}>
      <Button
        title="Sign In with Google"
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
