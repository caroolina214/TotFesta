import React from 'react';
import LoginPage from './src/app/LoginPage';
import { Provider as PaperProvider } from 'react-native-paper';
import { View } from 'react-native';
import { styles } from './src/app/styles';
import BackgroundShapes from './src/components/backgroundExample';

export default function App() {
  return (
    <PaperProvider>
      <View style={styles.body}>
        <BackgroundShapes>
          <LoginPage />
        </BackgroundShapes>
      </View>
    </PaperProvider>
  );
}