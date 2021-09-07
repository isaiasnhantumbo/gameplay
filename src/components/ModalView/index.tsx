import React, { ReactNode } from 'react';

import { Modal, ModalProps, Text, View } from 'react-native';
import { Background } from '../Background';

import { styles } from './styles';

interface ModalViewProps extends ModalProps {
  children: ReactNode;
}

export function ModalView({ children, ...rest }: ModalViewProps) {
  return (
    <Modal {...rest} transparent animationType="slide">
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Background>
            <View style={styles.bar} />
            {children}
          </Background>
        </View>
      </View>
    </Modal>
  );
}
