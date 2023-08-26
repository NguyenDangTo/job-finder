import React from "react";
import { View, Text } from "react-native";

import styles from "./specifics.style";
import { useTheme } from "../../../app/_layout";
const Specifics = ({ title, points }) => {
  const { theme } = useTheme();
  return (
    <View style={styles.container(theme)}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.pointContainer}>
        {points.map((point, index) => (
          <View style={styles.pointWrapper} key={index + point}>
            <Text style={styles.pointDot(theme)}></Text>
            <Text style={styles.pointText}>{point}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default Specifics;
