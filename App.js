import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import MemoListScreen from './src/screens/MemoListScreen';
import MemoDetailScreen from './src/screens/MemoDetailScreen';
import MemoEditScreen from './src/screens/MemoEditScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';



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


// 追加分
// 解説：レクチャー70のQAにあるよ

const AppContainer = createStackNavigator(
  {
    Home: { screen: MemoListScreen },
    MemoDetail: { screen: MemoDetailScreen },
    MemoEdit: { screen: MemoEditScreen },
    Login: { screen: LoginScreen },
    SignUp: { screen: SignupScreen },
  },
  {
    defaultNavigationOptions: {
      headerTitle: 'Memot',
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
