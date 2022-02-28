import 'react-native-gesture-handler';
import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './src/hooks/useCachedResources';
import useColorScheme from './src/hooks/useColorScheme';
import Navigation from './src/navigation';
import { StreamChat } from 'stream-chat';
import { OverlayProvider, Chat, Theme, DeepPartial, ChannelList } from "stream-chat-expo";

const API_KEY = "nputxey5nvux";
const client = StreamChat.getInstance(API_KEY);

export default function App() {
  const [isReady, setisReady] = useState(false)
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  const connectUser = async () => {
   await client.connectUser({
      id: 'yana',
      name: 'yanaCalheiros',
      image: 'https://avatars.githubusercontent.com/u/20932056?v=4',
    }, client.devToken('yana')
    );
    setisReady(true)

     //create channel
  const channel = client.channel( 'team','general',{ name: 'general',});
  await channel.create();

  }

  useEffect(() => {
    connectUser();
  }, []);

  if (!isLoadingComplete || !isReady) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <OverlayProvider>
          <Chat client={client}>
          {/* <Navigation colorScheme={colorScheme} />*/}
          <ChannelList />
          </Chat>
        </OverlayProvider>
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}
