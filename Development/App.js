import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navigator from './src/Navigator';
import { QueryClient, QueryClientProvider } from 'react-query';

export default function App() {

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider  client={queryClient}>
      <Navigator/>
    </QueryClientProvider>
  );
}

