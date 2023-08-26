import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: (theme) => ({
    height: 80,
    padding: SIZES.small,
    backgroundColor: theme === "light" ? COLORS.lightWhite : COLORS.lightBlack,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  }),
  likeBtn: {
    width: 55,
    height: 55,
    borderWidth: 1,
    borderColor: "#F37453",
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
  },
  likeBtnImage: {
    width: "40%",
    height: "40%",
    tintColor: "#F37453",
  },
  applyBtn: {
    flex: 1,
    backgroundColor: "#FE7654",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: SIZES.medium,
    borderRadius: SIZES.medium,
  },
  applyBtnText: (theme) => ({
    fontSize: SIZES.medium,
    color: theme === "light" ? COLORS.white : COLORS.black,
    fontFamily: FONT.bold,
  }),
});

export default styles;
