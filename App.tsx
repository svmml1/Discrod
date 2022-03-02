import 'react-native-gesture-handler';
import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './src/hooks/useCachedResources';
import useColorScheme from './src/hooks/useColorScheme';
import Navigation from './src/navigation';
import { StreamChat } from 'stream-chat';
import { OverlayProvider, Chat, Theme, DeepPartial, ChannelList } from "stream-chat-expo";
import AuthContext from './src/contexts/AuthContext';


const API_KEY = "nputxey5nvux";
const client = StreamChat.getInstance(API_KEY);

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();


  useEffect(() => {
    // this is done when component mounts

    return () => {
      // this is done when component unmounts
      client.disconnectUser();
    };
  }, []);

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <AuthContext>     
        <OverlayProvider>
          <Chat client={client}>
          <Navigation colorScheme={colorScheme} />        
          </Chat>
        </OverlayProvider>
        <StatusBar />
        </AuthContext>
      </SafeAreaProvider>
    );
  }
}
