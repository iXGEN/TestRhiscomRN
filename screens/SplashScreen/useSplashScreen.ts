import {useCallback} from 'react';

const useSplashScreen = (navigation: any) => {
  const onPressContinue = useCallback(() => {
    navigation.navigate('LoginScreen');
  }, [navigation]);

  return {
    onPressContinue,
  };
};

export default useSplashScreen;
