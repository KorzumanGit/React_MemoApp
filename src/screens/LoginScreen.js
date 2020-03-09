import React from 'react';
import { StyleSheet, View, TextInput, Text, TouchableHighlight } from 'react-native';

class LoginScreen extends React.Component {
    state = {
        email: '',
        Password: '',
    }

    handleChangeText(text) {
        this.setState({ email: text });

    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>
                    ログイン
                </Text>
                <TextInput style={styles.input} value={this.state.email} onChangeText={this.handleChangeText.bind(this)} />
                <TextInput style={styles.input} value={this.state.password} />
                <TouchableHighlight style={styles.button} onPress={() => { this.props.navigation.navigate('Home') }} underlayColor="#C70F66">
                    <Text style={styles.buttonTitle}>ログインする</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        padding: 24,
        backgroundColor: '#fff',
    },
    input: {
        backgroundColor: '#eee',
        height: 48,
        marginBottom: 16,
        borderColor: '#ddd',
        borderWidth: 1,
        padding: 8,
    },
    title: {
        fontSize: 24,
        alignSelf: "center",
        marginBottom: 28,
    },
    button: {
        backgroundColor: '#E31676',
        height: 48,
        borderRadius: 4,
        justifyContent: "center",
        alignItems: "center",
        width: '70%',
        alignSelf: "center",
    },
    buttonTitle: {
        color: '#fff',
        fontSize: 18,
    },
});

export default LoginScreen;
