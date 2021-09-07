import React from 'react';

import { Text, View } from 'react-native';
import { theme } from '../../global/styles/theme';
import { Avatar } from '../Avatar';

import { styles } from './styles';

export interface Member {
  id: string;
  username: string;
  avatar_url: string;
  status: string;
}

interface MemberProps {
  data: Member;
}

export function Member({ data }: MemberProps) {
  const { on, primary } = theme.colors;
  const isOnline = data.status === 'online';
  return (
    <View style={styles.container}>
      <Avatar urlImage={data.avatar_url} />
      <View>
        <Text style={styles.title}>{data.username}</Text>
        <View style={styles.status}>
          <View
            style={[
              styles.bullterStatus,
              { backgroundColor: isOnline ? on : primary },
            ]}
          />
          <Text style={styles.nameStatus}>
            {isOnline ? 'Disponível' : 'Ocupado'}
          </Text>
        </View>
      </View>
    </View>
  );
}
