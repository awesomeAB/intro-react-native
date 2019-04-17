/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Image} from 'react-native';
// import {Button} from "native-base";
const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {text: ''};
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.topBar}>
                    <Text style={{fontSize: 15, marginLeft: 16, ...styles.saveCancel}}> Cancel</Text>
                    <Text style={{fontSize: 22, ...styles.saveCancel}}> Group</Text>
                    <Text style={{fontSize: 15, marginRight: 16, ...styles.saveCancel}}> Save </Text>
                </View>



                <View style={{margin:40}}>
                <TextInput
                        style={styles.groupName}
                        placeholder={'Group Name'}
                        placeholderTextColor = {'#FFFFFF'}
                        onChangeText={(text) => this.setState({text})}
                        value={this.state.text}
                />
                </View>

                <View style={styles.uploadPhoto}>
                    <Text style={{ fontSize: 25, fontWeight: '800', color: '#97979795'}}> Upload</Text>
                    <Text style={{ fontSize: 25, fontWeight: '800', color: '#97979795'}}> Photo</Text>
                </View>

                <View style={styles.backButton}>
                    <Image style={styles.btn} source={require('./assets/shareIcon.png')} />
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3454cd',
        alignItems: 'center',
        letterSpacing: 2,
    },

    topBar: {
        height: 50,
        width: "100%",
        alignItems: "flex-end",
        flexDirection: "row",
        justifyContent: "space-between",
        ...Platform.select({
            ios: {
                marginTop: 20,
            },
            android: {

            },
        })
    },
    saveCancel: {
        color: '#FFFFFF',
        fontWeight: '800',
    },
    groupName: {
        height: 40,
        width: 300,
        backgroundColor: 'rgba(240, 243, 245, 0.3)',
        fontSize:18,
        color: '#FFFFFF',
        paddingLeft: 20,
    },
    uploadPhoto: {
        height: 250,
        width: 250,
        borderWidth: 3,
        borderColor: '#97979795',
        borderStyle: 'dashed',
        borderRadius: 125,
        justifyContent: 'center',
        alignItems: 'center',
    },
    backButton: {
        flexDirection: 'column',
        flex: 1,
        justifyContent: 'flex-end',
        marginLeft: 250,
    },
    btn: {
        height: 50,
        width: 50,
        position: 'absolute',
        bottom: 20,
    }
});
