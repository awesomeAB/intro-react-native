import React from 'react';
import { View, Text, Image, Button } from 'react-native';
import ImagePicker from 'react-native-image-picker';

export default class App extends React.Component {
  state = {
    photo: null,
  };

  handleChoosePhoto = () => {
    const options = {
      noData: true,
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
        const source = {response};

        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };

        this.setState({
          photo: source,
        });
      }
    });
  };

  render() {
    const { photo } = this.state;
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          {photo && (
              <Image
                  source={{ uri: photo.uri }}
                  style={{ width: 300, height: 300 }}
              />
          )}
          <Button title="Choose Photo" onPress={this.handleChoosePhoto} />
        </View>
    );
  }
}