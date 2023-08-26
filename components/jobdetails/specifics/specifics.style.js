import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: (theme) => ({
    marginTop: SIZES.large,
    backgroundColor: theme === "light" ? COLORS.lightWhite : COLORS.gray2,
    borderRadius: SIZES.medium,
    padding: SIZES.medium,
  }),
  title: {
    fontSize: SIZES.large,
    color: COLORS.primary,
    fontFamily: FONT.bold,
  },
  pointContainer: {
    marginVertical: SIZES.small,
  },
  pointWrapper: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginVertical: SIZES.small / 1.25,
    padding: SIZES.small / 1.5,
  },
  pointDot: (theme) => ({
    width: 8,
    height: 8,
    borderRadius: 999999,
    backgroundColor: theme === "light" ? COLORS.gray2 : COLORS.black,
    marginTop: SIZES.small / 2,
  }),
  pointText: {
    fontSize: SIZES.medium,
    color: COLORS.black,
    fontFamily: FONT.regular,
    marginLeft: SIZES.small,
  },
});

export default styles;
