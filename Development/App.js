import { StatusBar } from 'expo-status-bar';
import { QueryClientProvider,QueryClient } from 'react-query';
import { StyleSheet, Text, View } from 'react-native';
import Navigator from './src/Navigator';

const queryClient = new QueryClient()

export default function App() {
  return (
    <QueryClientProvider  client={queryClient}>
    <Navigator/>
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
