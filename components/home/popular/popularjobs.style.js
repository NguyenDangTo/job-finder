import { StyleSheet } from "react-native";

import { FONT, SIZES, COLORS } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    marginVertical: SIZES.medium,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerTitle: (theme) => ({
    fontSize: SIZES.large,
    fontFamily: FONT.bold,
    color: theme === "light" ? COLORS.primary : COLORS.quinary,
  }),
  headerBtn: (theme) => ({
    fontSize: SIZES.medium,
    fontFamily: FONT.medium,
    color: theme === "light" ? COLORS.gray : COLORS.quaternary,
  }),
  cardsContainer: {
    marginTop: SIZES.medium,
  },
});

export default styles;
