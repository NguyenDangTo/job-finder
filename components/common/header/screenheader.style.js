import { StyleSheet } from "react-native";

import { COLORS, SIZES } from "../../../constants/index";

const styles = StyleSheet.create({
  btnContainer: (theme) => ({
    width: 40,
    height: 40,
    backgroundColor: theme === "light" ? COLORS.white : COLORS.gray2,
    borderRadius: SIZES.small / 1.25,
    justifyContent: "center",
    alignItems: "center",
  }),
  btnImg: (dimension) => ({
    width: dimension,
    height: dimension,
    borderRadius: SIZES.small / 1.25,
  }),
});

export default styles;
