import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Image, TouchableOpacity} from 'react-native';
import { Item, Input, Container, Button } from 'native-base';
import ImagePicker from 'react-native-image-picker';


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
        this.state = {
            text: '',
            photo: null,
            isPhoto: false,
        };
    }

    handleChoosePhoto = () => {
        const options = {

        };
        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                // We can directly load the image on the app:
                const source = {uri:response.uri};

                // Or we can get the image in base64 encoding using data:
                // const source = { uri: 'data:image/jpeg;base64,' + response.data };

                this.setState({
                    photo: source, isPhoto:true,
                });
            }
        });
    };

    render() {
        const { photo } = this.state;
        return (

            <View style={styles.container}>
                <View style={styles.topBar}>
                    <Text style={{fontSize: 15, marginLeft: 16, ...styles.saveCancel}}> Cancel</Text>
                    <Text style={{fontSize: 22, ...styles.saveCancel}}> Group</Text>
                    <Text style={{fontSize: 15, marginRight: 16, ...styles.saveCancel}}> Save </Text>
                </View>



                <View style={{margin:40}}>
                    <Item style={styles.groupName}>
                        <Input placeholder='Group Name' placeholderTextColor='#ffffff' style={{color: '#ffffff'}} />
                    </Item>
                </View>

                <TouchableOpacity onPress={() => this.handleChoosePhoto()}>
                <View style={styles.uploadPhoto}>
                    {photo && (
                        <Image
                            source={{ uri: photo.uri }}
                            style={{ width: 250, height: 250, borderRadius: 125}}
                        />
                    )}
                    {!this.state.isPhoto ? <Text style={{ fontSize: 25, fontWeight: '800', color: '#97979795'}}> Upload</Text> : null}
                    {!this.state.isPhoto ? <Text style={{ fontSize: 25, fontWeight: '800', color: '#97979795'}}> Photo</Text> : null}
                </View>
                </TouchableOpacity>

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
