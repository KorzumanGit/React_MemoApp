// 元のコード
import React from 'react';
import { StyleSheet, View } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';

// 追加分
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// 元のコード
// import Appbar from './src/components/Appbar';
import SignupScreen from './src/screens/SignupScreen';

// 追加分
import MemoListScreen from './src/screens/MemoListScreen';


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
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFDF6',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 78,
  },
});


// 追加分
// export default createAppContainer(App);
export default createAppContainer(AppContainer);
