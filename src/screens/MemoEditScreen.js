import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';

import CircleButton from '../elements/CircleButton';
import firebase from 'firebase';


class MemoEditScreen extends React.Component {

  state = {
    body: '',
    key: '',
  }

  componentWillMount() {
    console.log(this.props.navigation.state.params);
    const { params } = this.props.navigation.state;
    this.setState({ body: params.memo.body, key: params.memo.key });
  }

  handlePress() {
    console.log('pressed');

    const { currentUser } = firebase.auth();
    const db = firebase.firestore();
    db.collection(`users/${currentUser.uid}/memos`).doc(this.state.key)
      .update({
        body: this.state.body,
      })
      .then(() => {
        console.log('success');

      })
      .catch((error) => {
        console.log(error);

      })
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.MemoEditInput}
          multiline
          value={this.state.body}
          onChangeText={(text) => { this.setState({ body: text }); }}
        />
        <CircleButton
          name='check'
          color='white'
          onPress={this.handlePress.bind(this)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  MemoEditInput: {
    backgroundColor: '#fff',
    flex: 1,
    paddingTop: 32,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 16,
    fontSize: 16,
  },
})

export default MemoEditScreen;
