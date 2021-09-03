import React from 'react';

import { Image } from 'react-native';

import { styles } from './styles';

export function GuildIcon() {
  const uri = 'https://via.placeholder.com/150';
  return <Image source={{ uri }} style={styles.image} resizeMode="cover" />;
}
