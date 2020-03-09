import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import MemoListScreen from './src/screens/MemoListScreen';
import MemoDetailScreen from './src/screens/MemoDetailScreen';
import MemoEditScreen from './src/screens/MemoEditScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';
import firebase from 'firebase';



// 元のコード
// import { StyleSheet, View } from 'react-native';
// import Appbar from './src/components/Appbar';
// import SignupScreen from './src/screens/SignupScreen';

// 元のコード
// class App extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         {/* <Appbar /> */}
//         <SignupScreen />
//       </View>
//     );
//   }
// }

// firebaseの読み込み
const config = {
  apiKey: 'AIzaSyCwD4h0ejxW8u_zJcyS2HLP1AWSa4V-HzU',
  authDomain: 'memoapp-f4baa.firebaseapp.com',
  databaseURL: 'https://memoapp-f4baa.firebaseio.com',
  projectId: 'memoapp-f4baa',
  storageBucket: 'memoapp-f4baa.appspot.com',
  messagingSenderId: '156509281855',
  appId: '1:156509281855:web:efed1c89df20f378dfa28a',
};
firebase.initializeApp(config);

// 追加分
// 解説：レクチャー70のQAにあるよ
const AppContainer = createStackNavigator(
  {
    Login: { screen: LoginScreen },
    Home: { screen: MemoListScreen },
    MemoDetail: { screen: MemoDetailScreen },
    MemoEdit: { screen: MemoEditScreen },
    SignUp: { screen: SignupScreen },
  },
  {
    defaultNavigationOptions: {
      headerTitle: 'Memot',
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: '#265366',
      },
      headerTitleStyle: {
        color: '#fff',
      },

    },
  }
);

// 元のコード
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#FFFDF6',
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingTop: 78,
//   },
// });


// 追加分
export default createAppContainer(AppContainer);
