import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import useSplashScreen from './useSplashScreen';

const SplashScreen = ({navigation}: any) => {
  const {onPressContinue} = useSplashScreen(navigation);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rhiscom React Test</Text>
      <TouchableOpacity onPress={onPressContinue} style={styles.button}>
        <Text style={styles.buttonText}>Continuar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SplashScreen;
