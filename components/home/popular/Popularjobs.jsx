import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { SIZES, COLORS } from "../../../constants";
import { FlatList } from "react-native-gesture-handler";
import { router } from "expo-router";
import PopularJobCard from "../../common/cards/popular/PopularJobCard";
import styles from "./popularjobs.style";
import useFetch from "../../../hook/useFetch";
import testData from "../../../testData";
import { useTheme } from "../../../app/_layout";

const Popularjobs = () => {
  const { data, isLoading, error } = useFetch("search", {
    query: "Software Engineer in Vietnam",
    num_pages: 1,
    pages: 1,
  });
  const [selectedJob, setSelectedJob] = useState();

  const handleCardPress = (item) => {
    router.push(`/job-details/${item.job_id}`);
    setSelectedJob(item.job_id);
  };
  const { theme } = useTheme();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle(theme)}>Popular Jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn(theme)}>Show All</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardsContainer}>
        {/* TODO: Comment by lock 200 request per monthr} */}
        {/* {isLoading ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : (
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <PopularJobCard
                item={item}
                selectedJob={selectedJob}
                handleCardPress={handleCardPress}
              />
            )}
            keyExtractor={(item) => item.job_id}
            contentContainerStyle={{ columnGap: SIZES.medium }}
            horizontal
          />
        )} */}
        {/* Test Data */}
        <FlatList
          data={testData.data}
          renderItem={({ item }) => (
            <PopularJobCard
              item={item}
              selectedJob={selectedJob}
              handleCardPress={handleCardPress}
            />
          )}
          keyExtractor={(item) => item.job_id}
          contentContainerStyle={{ columnGap: SIZES.medium }}
          horizontal
        />
      </View>
    </SafeAreaView>
  );
};

export default Popularjobs;
