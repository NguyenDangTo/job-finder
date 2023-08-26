import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES, SHADOWS } from "../constants/index";

const styles = StyleSheet.create({
  container: (theme) => ({
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme === "light" ? COLORS.white : COLORS.lightBlack,
  }),
  imageContainer: {
    width: "100%",
  },
  image: {
    width: "100%",
    height: "55%",
  },
  textContainer: (theme) => ({
    backgroundColor: theme === "light" ? COLORS.lightWhite : COLORS.black,
    borderTopLeftRadius: SIZES.large,
    borderTopRightRadius: SIZES.large,
    width: "100%",
    height: "45%",
    padding: SIZES.xxLarge,
    boxShadow: SHADOWS.medium,
  }),
  title: (theme) => ({
    fontSize: SIZES.xLarge,
    width: "60%",
    fontFamily: FONT.bold,
    marginTop: SIZES.medium,
    color: theme === "light" ? COLORS.black : COLORS.lightWhite,
  }),
  description: (theme) => ({
    fontSize: SIZES.large,
    fontFamily: FONT.regular,
    marginTop: SIZES.medium,
    marginBottom: SIZES.medium,
    color: theme === "light" ? COLORS.black : COLORS.lightWhite,
  }),
  btnContainer: (theme) => ({
    width: "100%",
    backgroundColor: theme === "light" ? COLORS.tertiary : COLORS.tertiary,
    padding: SIZES.medium,
    borderRadius: SIZES.medium,
  }),
  textBtn: {
    fontSize: SIZES.large,
    fontFamily: FONT.bold,
    textAlign: "center",
    color: COLORS.lightWhite,
  },
  rightArrow: {
    width: 20,
    height: 20,
    marginLeft: SIZES.large,
  },
});

export default styles;
