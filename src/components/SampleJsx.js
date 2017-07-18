import React from 'react';
import { Image, ScrollView } from 'react-native';

const imageSource = require('../../assets/NY1.jpg');
const imageNY1 = require('../../assets/NY1.jpg');
const imageNY2 = require('../../assets/NY2.jpg');
const imageNY3 = require('../../assets/NY3.jpg');

export default function SampleJsx() {
  const monComposant = (
    <Image source={imageSource} />
  );

  const images = [
    <Image key="1" source={imageNY1} />,
    <Image key="2" source={imageNY2} />,
    <Image key="3" source={imageNY3} />,
    <Image key="4" source={imageNY1} />,
    <Image key="5" source={imageNY2} />,
    <Image key="6" source={imageNY3} />,
  ];

  return (
    <ScrollView horizontal>
      {monComposant}
      {images}
    </ScrollView>
  );
}
