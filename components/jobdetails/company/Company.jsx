import React from "react";
import { View, Text, Image } from "react-native";

import styles from "./company.style";
import { icons, images } from "../../../constants";
import { checkImageURL } from "../../../utils/checkImageURI";
import { useTheme } from "../../../app/_layout";
const Company = ({
  companyLogo,
  companyName,
  jobTitle,
  jobCity,
  jobCountry,
}) => {
  const { theme } = useTheme();
  return (
    <View style={styles.container}>
      <View style={styles.logoBox}>
        {checkImageURL(companyLogo) ? (
          <Image
            source={{
              uri: companyLogo,
            }}
            resizeMode="contain"
            style={styles.logoImage}
          />
        ) : (
          <Image
            source={icons.company}
            resizeMode="contain"
            style={styles.logoImage}
          />
        )}
      </View>
      <View style={styles.jobTitleBox}>
        <Text style={styles.jobTitle(theme)}>{jobTitle}</Text>
      </View>

      <View style={styles.companyInfoBox}>
        <Text style={styles.companyName(theme)}>{companyName} / </Text>
        <View style={styles.companyLocationBox}>
          <View style={styles.locationBox}>
            <Image
              source={icons.location}
              resizeMode="contain"
              style={styles.locationImage(theme)}
            />
            <Text style={styles.locationName(theme)}>
              {jobCity}, {jobCountry}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Company;
