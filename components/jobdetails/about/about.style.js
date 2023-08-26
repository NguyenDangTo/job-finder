import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: (theme) => ({
    marginTop: SIZES.large,
    backgroundColor: theme === "light" ? COLORS.lightWhite : COLORS.gray2,
    borderRadius: SIZES.medium,
    padding: SIZES.medium,
  }),
  headText: {
    fontSize: SIZES.large,
    color: COLORS.primary,
    fontFamily: FONT.bold,
  },
  contentBox: {
    marginVertical: SIZES.small,
  },
  contextText: (theme) => ({
    fontSize: SIZES.medium,
    color: theme === "light" ? COLORS.gray : COLORS.black,
    fontFamily: FONT.medium,
    marginVertical: SIZES.small / 1.25,
  }),
});

export default styles;
