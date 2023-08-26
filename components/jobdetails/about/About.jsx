import React from "react";
import { View, Text } from "react-native";

import styles from "./about.style";
import { useTheme } from "../../../app/_layout";

const JobAbout = ({ title, content }) => {
  const { theme } = useTheme();
  return (
    <View style={styles.container(theme)}>
      <Text style={styles.headText}>{title}</Text>
      <View style={styles.contentBox}>
        <Text style={styles.contextText(theme)}>{content}</Text>
      </View>
    </View>
  );
};

export default JobAbout;
