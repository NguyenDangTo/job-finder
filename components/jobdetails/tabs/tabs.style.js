import { StyleSheet } from "react-native";

import { COLORS, SHADOWS, SIZES, FONT } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.small,
    marginBottom: SIZES.small / 2,
    justifyContent: "space-between",
  },
  btn: (name, activeTab, theme) => ({
    paddingVertical: SIZES.medium,
    paddingHorizontal: SIZES.large + 2,
    backgroundColor:
      name === activeTab
        ? theme === "light"
          ? COLORS.secondary
          : COLORS.quaternary
        : theme === "light"
        ? COLORS.gray3
        : COLORS.gray2,
    borderRadius: SIZES.medium,
    marginLeft: 2,
    ...SHADOWS.medium,
    shadowColor: COLORS.white,
  }),
  btnText: (name, activeTab, theme) => ({
    fontFamily: FONT.medium,
    fontSize: SIZES.medium - 1,
    color:
      name === activeTab
        ? theme === "light"
          ? COLORS.lightWhite
          : COLORS.lightBlack
        : theme === "light"
        ? COLORS.gray
        : COLORS.black,
  }),
});

export default styles;
