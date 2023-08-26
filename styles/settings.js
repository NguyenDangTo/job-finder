import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../constants/index";

const styles = StyleSheet.create({
  container: (theme) => ({
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
    height: "100%",
    backgroundColor: theme === "light" ? COLORS.lightWhite : COLORS.lightBlack,
  }),
  optionContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: COLORS.gray3,
  },
  option: (theme) => ({
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: SIZES.large,
    paddingHorizontal: SIZES.xxLarge,
    fontSize: SIZES.medium,
    borderBottomWidth: 1,
    borderBottomColor: theme === "light" ? COLORS.gray3 : COLORS.black,
  }),
  optionInfo: {
    width: "70%",
    flexDirection: "row",
    alignItems: "center",
  },
  optionImage: (theme) => ({
    height: 24,
    width: 24,
    tintColor: theme === "light" ? COLORS.gray : COLORS.gray2,
  }),
  optionText: (theme) => ({
    fontFamily: FONT.medium,
    fontSize: SIZES.large,
    color: theme === "light" ? COLORS.gray : COLORS.gray2,
    marginLeft: SIZES.medium,
  }),
  switchContainer: {
    width: "30%",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  track: {
    true: "blue",
    false: "red",
  },
});

export default styles;
