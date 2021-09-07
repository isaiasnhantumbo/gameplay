import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { Guild } from '../../components/Guild';
import { ListDivider } from '../../components/ListDivider';

import { styles } from './styles';

interface GuildsProps {
  handleGuildSelect: (guild: Guild) => void;
}

export function Guilds({ handleGuildSelect }: GuildsProps) {
  const guilds = [
    { id: '1', name: 'Lendários', icon: 'imgae', owner: true },
    { id: '2', name: 'Legendários', icon: null, owner: false },
  ];
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.guilds}
        data={guilds}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Guild data={item} onPress={() => handleGuildSelect(item)} />
        )}
        ItemSeparatorComponent={() => <ListDivider />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
