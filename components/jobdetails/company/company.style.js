import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    marginVertical: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
  },
  logoBox: {
    width: 80,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF",
    borderRadius: SIZES.large,
  },
  logoImage: {
    width: "80%",
    height: "80%",
  },
  jobTitleBox: {
    marginTop: SIZES.small,
  },
  jobTitle: (theme) => ({
    fontSize: SIZES.large,
    color: theme === "light" ? COLORS.primary : COLORS.quinary,
    fontFamily: FONT.bold,
    textAlign: "center",
  }),
  companyInfoBox: {
    marginTop: SIZES.small / 2,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  companyName: (theme) => ({
    fontSize: SIZES.medium,
    color: theme === "light" ? COLORS.primary : COLORS.quinary,
    fontFamily: FONT.bold,
  }),
  locationBox: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  locationImage: (theme) => ({
    width: 14,
    height: 14,
    tintColor: theme === "light" ? COLORS.primary : COLORS.quaternary,
  }),
  locationName: (theme) => ({
    fontSize: SIZES.medium,
    color: theme === "light" ? COLORS.primary : COLORS.quaternary,
    fontFamily: FONT.medium,
    marginLeft: 2,
  }),
});

export default styles;
