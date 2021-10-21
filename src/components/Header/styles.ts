import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    alignItems: 'center',
  },

  logOutButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  logOutText: {
    fontSize: 15,
    fontFamily: FONTS.REGULAR,
    color: COLORS.WHITE,
    marginRight: 20,
  },
});