import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    width: 48,
    height: 48,
    borderRadius: 8,
    backgroundColor: theme.colors.secondary40,
    color: theme.colors.heading,
    fontFamily: theme.fonts.text400,
    fontSize: 13,
    textAlign: 'center',
    marginLeft: 4,
    borderWidth: 1,
    borderColor: theme.colors.secondary50,
  },
});
