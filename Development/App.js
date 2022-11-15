import { StatusBar } from 'expo-status-bar';
import { QueryClientProvider,QueryClient } from 'react-query';
import { StyleSheet, Text, View } from 'react-native';
import Navigator from './src/Navigator';

export default function App() {

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider  client={queryClient}>
      <Navigator/>
    </QueryClientProvider>
  );
}


