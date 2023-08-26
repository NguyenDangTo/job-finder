import { StyleSheet } from "react-native";

import { FONT, COLORS, SHADOWS, SIZES } from "../../../../constants";

const styles = StyleSheet.create({
  container: (selectedJob, item) => ({
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    padding: SIZES.medium,
    backgroundColor: selectedJob === item.job_id ? COLORS.primary : "#FFFFFF",
    borderRadius: SIZES.small,
    ...SHADOWS.medium,
    shadowColor: COLORS.white,
    borderWidth: 1,
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
  textContainer: {
    flex: 1,
    marginHorizontal: SIZES.medium,
  },
  jobCompany: (selectedJob, item) => ({
    width: "85%",
    fontSize: SIZES.medium,
    fontFamily: FONT.bold,
    color: selectedJob === item.job_id ? COLORS.white : COLORS.primary,
  }),
  jobName: (selectedJob, item) => ({
    marginVertical: SIZES.small / 3,
    fontSize: SIZES.medium,
    fontFamily: FONT.medium,
    color: selectedJob === item.job_id ? COLORS.white : COLORS.primary,
  }),
  infoWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  jobType: {
    fontSize: SIZES.medium - 1,
    fontFamily: FONT.medium,
    color: COLORS.gray,
    textTransform: "capitalize",
  },
  jobSalary: {
    fontSize: SIZES.medium - 1,
    fontFamily: FONT.medium,
    color: COLORS.gray,
  },
  postedTime: {
    position: "absolute",
    top: SIZES.medium,
    right: SIZES.medium,
    width: 60,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  postedTimeText: (selectedJob, item) => ({
    fontFamily: FONT.bold,
    color: selectedJob === item.job_id ? COLORS.white : COLORS.primary,
  }),
});

export default styles;
