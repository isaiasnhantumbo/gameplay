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
    { id: '3', name: 'Legendários', icon: null, owner: false },
    { id: '4', name: 'Legendários', icon: null, owner: false },
    { id: '5', name: 'Legendários', icon: null, owner: false },
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
        contentContainerStyle={{ paddingBottom: 68, paddingTop: 103 }}
        ListHeaderComponent={() => <ListDivider isCentered />}
        ItemSeparatorComponent={() => <ListDivider isCentered />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
