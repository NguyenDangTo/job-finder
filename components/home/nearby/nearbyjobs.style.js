import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.medium,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: SIZES.small,
  },
  headerTitle: (theme) => ({
    fontSize: SIZES.large,
    fontFamily: FONT.medium,
    color: theme === "light" ? COLORS.primary : COLORS.quinary,
  }),
  headerBtn: (theme) => ({
    fontSize: SIZES.medium,
    fontFamily: FONT.medium,
    color: theme === "light" ? COLORS.gray : COLORS.quaternary,
  }),
  cardsContainer: {
    marginTop: SIZES.medium,
    gap: SIZES.small,
  },
});

export default styles;
