import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import { router } from "expo-router";
import styles from "./welcome.style";
import { icons, SIZES } from "../../../constants";
import { useTheme } from "../../../app/_layout";
const Welcome = () => {
  const jobTypes = ["FullTime", "PartTime", "Intern", "Contractor"];
  const [activeJobType, setActiveJobType] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const { theme } = useTheme();

  const handleSearch = () => {
    setSearchTerm("");
    setActiveJobType("");
    router.push(`/search/${searchTerm}`);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.userName(theme)}>Hello ABCXYZ</Text>
      <Text style={styles.welcomeMessage(theme)}>Find your Perfect Job</Text>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            onChangeText={(text) => setSearchTerm(text)}
            value={searchTerm}
            placeholder="What are you looking for?"
          ></TextInput>
        </View>
        <TouchableOpacity style={styles.searchBtn} onPress={handleSearch}>
          <Image source={icons.search} style={styles.searchBtnImage}></Image>
        </TouchableOpacity>
      </View>
      <View style={styles.tabsContainer}>
        <FlatList
          data={jobTypes}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.tab(activeJobType, item, theme)}
              onPress={() => {
                setActiveJobType(item);
                router.push(`/search/${item}`);
              }}
            >
              <Text style={styles.tabText(activeJobType, item, theme)}>
                {item}
              </Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item}
          horizontal={true}
          contentContainerStyle={{ columnGap: SIZES.small }}
          showsHorizontalScrollIndicator={false}
        ></FlatList>
      </View>
    </View>
  );
};

export default Welcome;
