import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { SvgProps } from 'react-native-svg';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';
import { Text, View } from 'react-native';

interface CategoryProps extends RectButtonProps {
  title: string;
  icon: React.FC<SvgProps>;
  checked?: boolean;
}

export function Category({
  icon: Icon,
  title,
  checked = false,
  ...rest
}: CategoryProps) {
  const { secondary80, secondary70, secondary50, secondary40 } = theme.colors;

  return (
    <RectButton {...rest}>
      <LinearGradient
        style={styles.container}
        colors={[secondary50, secondary70]}
      >
        <LinearGradient
          style={[styles.content, { opacity: checked ? 1 : 0.5 }]}
          colors={[checked ? secondary80 : secondary50, secondary40]}
        >
          <View style={checked ? styles.checked : styles.check} />

          <Icon width={48} height={48} />

          <Text style={styles.title}>{title}</Text>
        </LinearGradient>
      </LinearGradient>
    </RectButton>
  );
}
