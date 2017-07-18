import React, { Component } from 'react';
import { View, Image, TouchableHighlight, Share } from 'react-native';

const imageNY1 = require('../../assets/NY1.jpg');
const imageNY2 = require('../../assets/NY2.jpg');
const imageNY3 = require('../../assets/NY3.jpg');

const imgs = [
  imageNY1,
  imageNY2,
  imageNY3,
];

const INTERVAL_DELAY = 2000;

export default class SampleState extends Component {

  static onPressButton() {
    Share.share({
      message: 'Share message',
      title: 'Share Title',
    });
  }

  constructor(props) {
    super(props);

    this.state = {
      currentImage: 0,
    };

    this.startInterval();
  }

  getImage() {
    return (
      <TouchableHighlight onPress={SampleState.onPressButton}>
        <Image source={imgs[this.state.currentImage]} />
      </TouchableHighlight>
    );
  }

  startInterval() {
    setInterval(() => {
      let idx = this.state.currentImage;
      idx = (idx + 1 > imgs.length - 1) ? 0 : idx + 1;

      this.setState({ currentImage: idx });
    }, INTERVAL_DELAY);
  }

  render() {
    const image = this.getImage();
    return (
      <View>
        {image}
      </View>
    );
  }
}
