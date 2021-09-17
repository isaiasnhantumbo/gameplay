import React from 'react';

import { Image, View } from 'react-native';
import { CDN_IMAGE } from '../../config';
import DiscordSvg from '../../assets/discord.svg';
import { styles } from './styles';

interface Props {
  guildId: string;
  iconId: string | null;
}

export function GuildIcon({ guildId, iconId }: Props) {
  const uri = `${CDN_IMAGE}/icons/${guildId}/${iconId}.png`;
  return (
    <View style={styles.container}>
      {iconId ? (
        <Image source={{ uri }} style={styles.image} resizeMode="cover" />
      ) : (
        <DiscordSvg width={40} height={40} />
      )}
    </View>
  );
}
