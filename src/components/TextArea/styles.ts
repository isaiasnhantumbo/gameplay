import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 95,
    borderRadius: 8,
    backgroundColor: theme.colors.secondary40,
    color: theme.colors.heading,
    fontFamily: theme.fonts.text400,
    fontSize: 13,
    marginLeft: 4,
    paddingTop: 16,
    paddingHorizontal: 16,
    textAlignVertical: 'top',
    borderWidth: 1,
    borderColor: theme.colors.secondary50,
  },
});
