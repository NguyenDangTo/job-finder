import React from "react";
import { View, Text, Image } from "react-native";

import styles from "./nearbyjobcard.style";
import { checkImageURL } from "../../../../utils/checkImageURI";
import { images } from "../../../../constants/index";
import { TouchableOpacity } from "react-native-gesture-handler";
import moment from "moment";

const NearbyJobCard = ({ job, selectedJob, handleCardPress }) => {
  return (
    <TouchableOpacity
      style={styles.container(selectedJob, job)}
      onPress={() => handleCardPress(job)}
    >
      <TouchableOpacity style={styles.logoContainer(selectedJob, job)}>
        <Image
          source={{
            uri: checkImageURL(job.employer_logo)
              ? job.employer_logo
              : Image.resolveAssetSource(images.company).uri,
          }}
          resizeMode="contain"
          style={styles.logoImage}
        ></Image>
      </TouchableOpacity>
      <View style={styles.textContainer}>
        <Text style={styles.jobCompany(selectedJob, job)} numberOfLines={1}>
          {job.employer_name}
        </Text>
        <Text style={styles.jobName(selectedJob, job)} numberOfLines={1}>
          {job.job_title}
        </Text>
        <View style={styles.infoWrapper}>
          <Text style={styles.jobType} numberOfLines={1}>
            {job.job_employment_type}
          </Text>
          <Text style={styles.jobSalary} numberOfLines={1}>
            {job.job_max_salary === null && job.job_min_salary === null ? (
              <Text>Lương Thỏa Thuận</Text>
            ) : (
              <Text>
                {job.job_min_salary ? job.job_min_salary / 1000 + "M" : "XXXX"}{" "}
                -{" "}
                {job.job_max_salary ? job.job_max_salary / 1000 + "M" : "XXXX"}
              </Text>
            )}
          </Text>
        </View>
      </View>
      <View style={styles.postedTime}>
        <Text style={styles.postedTimeText(selectedJob, job)}>
          {moment
            .utc()
            .diff(moment.utc(job.job_posted_at_datetime_utc), "days") + "d"}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default NearbyJobCard;
