import { useEffect } from 'react';
import NetInfo from '@react-native-community/netinfo';
import { useNavigation } from '@react-navigation/native';

const useNetworkListener = () => {
  const navigation = useNavigation();

  useEffect(() => {
    // Llamada a NetInfo para monitorear los cambios de la red
    const unsubscribe = NetInfo.addEventListener((state) => {
      if (!state.isConnected) {
        // Si no hay conexión, redirigir a la pantalla de error
        navigation.navigate('error/internetConnection');
      } else {
        // Si hay conexión, volver a la pantalla anterior (si es posible)
        navigation.goBack();
      }
    });

    return () => {
      // Limpiar el listener cuando el componente se desmonte
      unsubscribe();
    };
  }, [navigation]);
};

export default useNetworkListener;
