import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import CircleButton from '../elements/CircleButton';
import firebase from 'firebase';

class MemoCreateScreen extends React.Component {
    state = {
        body: '',
    }

    handlePress() {
        const db = firebase.firestore();
        const { currentUser } = firebase.auth();
        // const uid = 'hVN6W5Ze51UIatFVnypd79XrD9Q2';
        db.collection(`users/${currentUser.uid}/memos`).add({
            body: this.state.body,
            createdOn: new Date(),
        })
            .then(() => {
                this.props.navigation.goBack();
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput style={styles.MemoEditInput}
                    multiline value="Hi"
                    value={this.state.body}
                    onChangeText={(text) => { this.setState({ body: text }); }}
                />
                <CircleButton name='check' color='white' onPress={this.handlePress.bind(this)} />
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

export default MemoCreateScreen;
