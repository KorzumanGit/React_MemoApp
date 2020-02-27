// import React from 'react';
// import { StyleSheet, View } from 'react-native';

// 追加分
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Appbar from './src/components/Appbar';
import SignupScreen from './src/screens/SignupScreen';
import MemoListScreen from './src/screens/MemoListScreen';


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

