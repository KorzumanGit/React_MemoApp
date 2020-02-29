// 必要
import React from 'react';
import { StyleSheet, View } from 'react-native';

// 追加分
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// 必要
// import Appbar from './src/components/Appbar';
import SignupScreen from './src/screens/SignupScreen';

// 追加分
import MemoListScreen from './src/screens/MemoListScreen';


// 必要（ただし export default を削除）
class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <SignupScreen />
      </View>
    );
  }
}

// 変数に代入して、createAppContainerに渡します。
const AppContainer = createStackNavigator({
  Home: { screen: MemoListScreen },
});




// 必要
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFDF6',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 78,
  },
});


// こちらを export default します。
export default createAppContainer(AppContainer);

