// 元のコード
// import React from 'react';
// import { StyleSheet, View } from 'react-native';

// 追加分
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// 元のコード
// import Appbar from './src/components/Appbar';
// import SignupScreen from './src/screens/SignupScreen';

// 追加分
import MemoListScreen from './src/screens/MemoListScreen';


// 元のコード
// export default class App extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Appbar />
//         <SignupScreen />
//       </View>
//     );
//   }
// }

// 追加分
createStackNavigator({
  Home: { screen: MemoListScreen },
});




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
export default createAppContainer(App);

