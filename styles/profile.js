import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES, SHADOWS } from "../constants/index";

const styles = StyleSheet.create({
  container: (theme) => ({
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme === "light" ? COLORS.lightWhite : COLORS.lightBlack,
  }),
  imageContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    padding: SIZES.medium,
  },
  image: {
    height: 180,
    width: 180,
    borderRadius: 90,
  },
  profileContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: SIZES.xxLarge,
    paddingVertical: SIZES.medium,
  },
  username: (theme) => ({
    marginVertical: SIZES.medium + 2,
    fontSize: SIZES.xxLarge - 2,
    fontFamily: FONT.bold,
    color: theme === "light" ? COLORS.black : COLORS.white,
  }),
  contactInfo: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: SIZES.small,
    fontSize: SIZES.medium,
  },
  key: {
    fontFamily: FONT.medium,
    fontSize: SIZES.medium + 2,
    color: COLORS.gray,
  },
  context: (theme) => ({
    fontFamily: FONT.medium,
    fontSize: SIZES.medium,
    color: theme === "light" ? COLORS.black : COLORS.white,
  }),
  optionContainer: (theme) => ({
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: theme === "light" ? COLORS.gray3 : COLORS.black,
  }),
  option: (theme) => ({
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: SIZES.large + 2,
    paddingHorizontal: SIZES.xxLarge,
    fontSize: SIZES.medium,
    borderBottomWidth: 1,
    borderBottomColor: theme === "light" ? COLORS.gray2 : COLORS.black,
  }),
  optionInfo: {
    width: "70%",
    flexDirection: "row",
    alignItems: "center",
  },
  optionImage: (theme) => ({
    height: 28,
    width: 28,
    tintColor: theme === "light" ? COLORS.gray : COLORS.gray2,
  }),
  optionText: (theme) => ({
    fontFamily: FONT.medium,
    fontSize: SIZES.large,
    color: theme === "light" ? COLORS.lightBlack : COLORS.gray2,
    marginLeft: SIZES.medium,
  }),
  rightContainer: {
    width: "30%",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  right: (theme) => ({
    height: 28,
    width: 28,
    tintColor: theme === "light" ? COLORS.gray : COLORS.gray2,
  }),
});

export default styles;
