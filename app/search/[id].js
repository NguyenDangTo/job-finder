import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  TouchableOpacity,
  View,
} from "react-native";
import { Stack, useGlobalSearchParams, useRouter } from "expo-router";
import { Text, SafeAreaView } from "react-native";
import axios from "axios";

import { ScreenHeaderBtn, NearbyJobCard } from "../../components";
import { COLORS, icons, SIZES } from "../../constants";
import styles from "../../styles/search";
import { useTheme } from "../_layout";

const JobSearch = () => {
  const params = useGlobalSearchParams();
  const router = useRouter();
  const { theme } = useTheme();

  const [searchResult, setSearchResult] = useState([]);
  const [searchLoading, setSearchLoading] = useState(false);
  const [searchError, setSearchError] = useState(null);

  const [page, setPage] = useState(1);

  const handleSearch = async () => {
    setSearchLoading(true);
    setSearchResult([]);

    try {
      const options = {
        method: "GET",
        url: `https://jsearch.p.rapidapi.com/search`,
        headers: {
          "X-RapidAPI-Key": "",
          "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
        },
        params: {
          query: params.id,
          page: page.toString(),
        },
      };

      const response = await axios.request(options);
      setSearchResult(response.data.data);
      console.log("Search done");
    } catch (error) {
      setSearchError(error);
      console.log(error);
    } finally {
      setSearchLoading(false);
    }
  };

  const handlePagination = (direction) => {
    if (direction === "left" && page > 1) {
      setPage(page - 1);
      handleSearch();
    } else if (direction === "right") {
      setPage(page + 1);
      handleSearch();
    }
  };

  useEffect(() => {
    handleSearch();
  }, [params, params.id, page]);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor:
          theme === "light" ? COLORS.lightWhite : COLORS.lightBlack,
      }}
    >
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor:
              theme === "light" ? COLORS.lightWhite : COLORS.lightBlack,
          },
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn
              iconUrl={icons.left}
              dimension="60%"
              handlePress={() => router.back()}
            />
          ),
          headerTitle: "",
        }}
      />

      <FlatList
        data={searchResult}
        renderItem={({ item }) => (
          <NearbyJobCard
            job={item}
            handleCardPress={() =>
              router.replace(`/job-details/${item.job_id}`)
            }
          />
        )}
        keyExtractor={(item) => item.job_id}
        contentContainerStyle={{ padding: SIZES.medium, rowGap: SIZES.medium }}
        ListHeaderComponent={() => (
          <>
            <View style={styles.container}>
              <Text style={styles.searchTitle(theme)}>{params.id}</Text>
              <Text style={styles.noOfSearchedJobs(theme)}>
                {searchResult.length} Job Opportunities
              </Text>
            </View>
            <View style={styles.loaderContainer}>
              {searchLoading ? (
                <ActivityIndicator
                  size="large"
                  color={theme === "light" ? COLORS.primary : COLORS.quinary}
                />
              ) : (
                searchError && (
                  <Text
                    style={{
                      color:
                        theme === "light" ? COLORS.primary : COLORS.lightWhite,
                    }}
                  >
                    Oops something went wrong
                  </Text>
                )
              )}
            </View>
          </>
        )}
        ListFooterComponent={() => (
          <View style={styles.footerContainer}>
            <TouchableOpacity
              style={styles.paginationButton}
              onPress={() => handlePagination("left")}
            >
              <Image
                source={icons.chevronLeft}
                style={styles.paginationImage(theme)}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <View style={styles.paginationTextBox}>
              <Text style={styles.paginationText}>{page}</Text>
            </View>
            <TouchableOpacity
              style={styles.paginationButton}
              onPress={() => handlePagination("right")}
            >
              <Image
                source={icons.chevronRight}
                style={styles.paginationImage(theme)}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default JobSearch;
