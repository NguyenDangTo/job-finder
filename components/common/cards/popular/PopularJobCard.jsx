import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { checkImageURL } from "../../../../utils/checkImageURI";
import styles from "./popularjobcard.style";
import { images } from "../../../../constants/index";
const PopularJobCard = ({ item, selectedJob, handleCardPress }) => {
  return (
    <TouchableOpacity
      style={styles.container(selectedJob, item)}
      onPress={() => handleCardPress(item)}
    >
      <TouchableOpacity style={styles.logoContainer(selectedJob, item)}>
        <Image
          source={{
            uri: checkImageURL(item?.employer_logo)
              ? item.employer_logo
              : Image.resolveAssetSource(images.company).uri,
          }}
          resizeMode="contain"
          style={styles.logoImage}
        ></Image>
      </TouchableOpacity>
      <Text style={styles.companyName} numberOfLines={1}>
        {item.employer_name}
      </Text>
      <View style={styles.infoContainer}>
        <Text style={styles.jobName(selectedJob, item)} numberOfLines={1}>
          {item.job_title}
        </Text>
        <View style={styles.infoWrapper}>
          <Text style={styles.location}>{item.job_country}</Text>
          <Text style={styles.dash}> - </Text>
          <Text style={styles.salary}>
            {item.job_max_salary === null && item.job_min_salary === null ? (
              <Text>Lương Thỏa Thuận</Text>
            ) : (
              <Text>
                {item.job_min_salary
                  ? item.job_min_salary / 1000 + "M"
                  : "XXXX"}{" "}
                -{" "}
                {item.job_max_salary
                  ? item.job_max_salary / 1000 + "M"
                  : "XXXX"}
              </Text>
            )}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default PopularJobCard;
