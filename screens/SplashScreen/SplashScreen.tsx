import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const SplashScreen = ({navigation}: any) => {
  const onPressContinue = () => {
    navigation.navigate('LoginScreen');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rhiscom React Test</Text>
      <TouchableOpacity onPress={onPressContinue} style={styles.button}>
        <Text style={styles.buttonText}>Continuar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF', // Color de fondo blanco, puedes cambiarlo según tus preferencias
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007BFF', // Color de fondo azul, puedes cambiarlo según tus preferencias
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    color: '#FFFFFF', // Color del texto blanco, puedes cambiarlo según tus preferencias
  },
});

export default SplashScreen;
