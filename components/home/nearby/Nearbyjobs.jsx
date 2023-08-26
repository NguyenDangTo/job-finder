import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import { SIZES, COLORS } from "../../../constants";
import { FlatList } from "react-native-gesture-handler";
import { router } from "expo-router";
import NearbyJobCard from "../../common/cards/nearby/NearbyJobCard";
import styles from "./nearbyjobs.style";
import useFetch from "../../../hook/useFetch";
import testData from "../../../testData";
import { useTheme } from "../../../app/_layout";
const Nearbyjobs = ({ city }) => {
  const { data, isLoading, error } = useFetch("search", {
    query: `Software Engineer in ${city}`,
    num_pages: 1,
    pages: 1,
  });
  const [selectedJob, setSelectedJob] = useState();

  const { theme } = useTheme();

  const handleCardPress = (item) => {
    router.push(`/job-details/${item.job_id}`);
    setSelectedJob(item.job_id);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle(theme)}>Jobs in {city}</Text>
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
          data?.map((item, index) => (
            <NearbyJobCard
              key={index}
              job={item}
              selectedJob={selectedJob}
              handleCardPress={handleCardPress}
            />
          ))
        )} */}
        {/* Test Data */}
        {testData.data?.map((item, index) => (
          <NearbyJobCard
            key={index}
            job={item}
            selectedJob={selectedJob}
            handleCardPress={handleCardPress}
          />
        ))}
      </View>
    </SafeAreaView>
  );
};

export default Nearbyjobs;
