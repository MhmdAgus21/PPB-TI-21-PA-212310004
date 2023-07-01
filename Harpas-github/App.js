import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import Splash from './components/Splash';
import SignUp from './components/SignUp';
import OnBoard from './components/OnBoard';
import SignIn from './components/SignIn';
import Home from './components/Home';
import Profile from './components/Profile';
import Profile2 from './components/Profile2';
import ContactUs from './components/ContactUs';
import CommunityInfo from './components/CommunityInfo';
import TransactionHistory from './components/TransactionHistory';
import EventPhotos from './components/EventPhotos';
import EventVideos from './components/EventVideos';

import ButtonTab from './components/Navigation/ButtonTab';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
         {/* <NavigationContainer>
         <Stack.Navigator>
           <Stack.Screen name='OnBoard' component={OnBoard} options={{headerShown : false}}/>
           <Stack.Screen name='SignIn' component={SignIn} options={{headerShown : false}}/>
           <Stack.Screen name='SignUp' component={SignUp} options={{headerShown : false}}/>
           <Stack.Screen name='HomeScreen' component={ButtonTab} options={{headerShown : false}}/>
         </Stack.Navigator>
       </NavigationContainer> */}

       {/* <Splash />  */}
       {/* <OnBoard/> */}
       {/* <SignUp />  */}
       {/* <SignIn/>  */}
       {/* <Home/>  */}
       {/* <Profile/> */}
       {/* <Profile2 />  */}
       {/* <ContactUs/> */}
       {/* <CommunityInfo/> */}
       {/* <TransactionHistory/> */}
       {/* <EventPhotos/> */}
       <EventVideos/>

    </SafeAreaView>
  );
};