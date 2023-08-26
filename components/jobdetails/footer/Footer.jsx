import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import * as Linking from "expo-linking";

import styles from "./footer.style";
import { icons } from "../../../constants/index";
import { useTheme } from "../../../app/_layout";
const JobFooter = ({ url }) => {
  const { theme } = useTheme();
  return (
    <View style={styles.container(theme)}>
      <TouchableOpacity style={styles.likeBtn}>
        <Image style={styles.likeBtnImage} source={icons.heartOutline} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.applyBtn}
        onPress={() => Linking.openURL(url)}
      >
        <Text style={styles.applyBtnText(theme)}>Apply for this Job</Text>
      </TouchableOpacity>
    </View>
  );
};

export default JobFooter;
