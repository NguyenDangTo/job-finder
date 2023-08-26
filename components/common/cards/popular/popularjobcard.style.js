import { StyleSheet } from "react-native";

import { COLORS, FONT, SHADOWS, SIZES } from "../../../../constants";

const styles = StyleSheet.create({
  container: (selectedJob, item) => ({
    width: 250,
    height: 180,
    padding: SIZES.xLarge,
    backgroundColor: selectedJob === item.job_id ? COLORS.primary : "#FFFFFF",
    borderRadius: SIZES.medium,
    justifyContent: "space-between",
    ...SHADOWS.medium,
    shadowColor: COLORS.white,
    borderWidth: selectedJob === item.job_id ? 0 : 1,
    borderColor: COLORS.gray2,
  }),
  logoContainer: (selectedJob, item) => ({
    width: 50,
    height: 50,
    backgroundColor: selectedJob === item.job_id ? "#FFF" : COLORS.white,
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
  }),
  logoImage: {
    width: "70%",
    height: "70%",
  },
  companyName: {
    fontSize: SIZES.medium,
    fontFamily: FONT.bold,
    color: COLORS.gray,
    marginTop: SIZES.small / 1.5,
  },
  infoContainer: {
    marginTop: SIZES.medium / 1.5,
  },
  jobName: (selectedJob, item) => ({
    fontSize: SIZES.medium,
    fontFamily: FONT.medium,
    color: selectedJob === item.job_id ? COLORS.white : COLORS.primary,
  }),
  infoWrapper: {
    flexDirection: "row",
    marginTop: 5,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  location: {
    fontSize: SIZES.medium,
    fontFamily: FONT.medium,
    color: COLORS.gray,
  },
  dash: {
    marginHorizontal: SIZES.small,
    color: COLORS.gray,
  },
  salary: {
    fontSize: SIZES.medium - 1,
    fontFamily: FONT.medium,
    color: COLORS.gray,
  },
});

export default styles;
