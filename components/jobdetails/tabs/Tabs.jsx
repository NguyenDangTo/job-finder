import React from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";

import styles from "./tabs.style";
import { SIZES } from "../../../constants";
import { useTheme } from "../../../app/_layout";

const JobTabs = ({ tabs, activeTab, setActiveTab }) => {
  const { theme } = useTheme();
  return (
    <View style={styles.container}>
      <FlatList
        data={tabs}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.btn(item, activeTab, theme)}
            onPress={() => setActiveTab(item)}
          >
            <Text style={styles.btnText(item, activeTab, theme)}>{item}</Text>
          </TouchableOpacity>
        )}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item}
        contentContainerStyle={{
          columnGap: SIZES.small - 1,
        }}
        ItemSeparatorComponent={() => <View style={{ width: SIZES.padding }} />}
        horizontal
      />
    </View>
  );
};

export default JobTabs;
