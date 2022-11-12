import { StatusBar } from 'expo-status-bar';
import { QueryClientProvider,QueryClient } from 'react-query';
import { StyleSheet, Text, View } from 'react-native';
import Navigator from './src/Navigator';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient()

export default function App() {
  const queryClient = new QueryClient();
  return (
<<<<<<< HEAD
    <QueryClientProvider  client={queryClient}>
    <Navigator/>
    </QueryClientProvider>
=======
    <QueryClientProvider client={queryClient}>
       <Navigator/>
    </QueryClientProvider>
    // <Navigator/>
>>>>>>> f2884b508cc3733bfaf3a76643c133faa10cab33
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
