import React from 'react';
import { StyleSheet, View } from 'react-native';

import MemoList from '../components/MemoList';
import CircleButton from '../elements/CircleButton';
import firebase from 'firebase';

class MemoListScreen extends React.Component {
  handlePress() {
    const db = firebase.firestore();
    // db.settings({ timestampsInSnapshots: true });

    db.collection('memos').add({
      body: 'test memo',
      createdOn: '2020-03-10',
    })
      .then((docRef) => {
        console.log(docRef.id);
      })
      .catch((error) => {
        console.log(error);
      });
  }


  render() {
    return (
      <View style={styles.container}>
        <MemoList navigation={this.props.navigation} />
        <CircleButton name="plus" onPress={this.handlePress.bind(this)} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#FFFFF6',
  },
});

export default MemoListScreen;
