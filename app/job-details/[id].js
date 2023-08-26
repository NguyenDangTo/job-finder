import React, { useCallback, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  ActivityIndicator,
  RefreshControl,
  Linking,
} from "react-native";
import { COLORS, icons, images, SIZES } from "../../constants/index";
import { Stack, router, useGlobalSearchParams } from "expo-router";
import {
  Company,
  JobTabs,
  JobAbout,
  JobFooter,
  Specifics,
  ScreenHeaderBtn,
} from "../../components/index";
import useFetch from "../../hook/useFetch";
import { useTheme } from "../_layout";
import testData from "../../testData";
const Home = () => {
  const params = useGlobalSearchParams();

  const { data, isLoading, error, refetch } = useFetch("job-details", {
    job_id: params.id,
  });

  const [refreshing, onRefreshing] = useState(false);
  const onRefresh = useCallback(() => {
    onRefreshing(true);
    setTimeout(() => {
      refetch();
      onRefreshing(false);
    }, 2000);
  });
  const tabs = ["About", "Responsibilities", "Benefits"];
  const [activeTab, setActiveTab] = useState("About");
  const displayTabContent = () => {
    switch (activeTab) {
      case "About":
        return (
          <>
            <JobAbout
              title={"About the job"}
              content={testData.data[0].job_description ?? ["N/A"]}
            />
            <Specifics
              title={"Qualifications"}
              points={
                testData.data[0].job_highlights?.Qualifications ?? ["N/A"]
              }
            />
          </>
        );
      case "Responsibilities":
        return (
          <Specifics
            title={"Responsibilities"}
            points={
              testData.data[0].job_highlights?.Responsibilities ?? ["N/A"]
            }
          />
        );
      case "Benefits":
        return (
          <Specifics
            title={"Benefits"}
            points={testData.data[0].job_highlights?.Benefits ?? ["N/A"]}
          />
        );
      default:
        break;
    }
  };

  const { theme } = useTheme();
  const shareOptions = {
    message: testData.data[1].job_title,
  };
  const handleSharePress = async () => {};
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
          headerRight: () => (
            <ScreenHeaderBtn
              iconUrl={icons.share}
              dimension="60%"
              handlePress={handleSharePress}
            />
          ),
          headerTitle: "",
        }}
      ></Stack.Screen>

      <ScrollView
        showsVerticalScrollIndicator={true}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {/* TODO: Comment by lock 200 request per monthr} */}
        {/* {isLoading ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : data.length === 0 ? (
          <Text>No data</Text>
        ) : (
          <View style={{ padding: SIZES.medium }}>
            <Company
              companyLogo={data[0].employer_logo}
              companyName={data[0].employer_name}
              jobTitle={data[0].job_title}
              jobCity={data[0].job_city}
              jobCountry={data[0].job_country}
            />
            <JobTabs
              tabs={tabs}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
            {displayTabContent()}
          </View>
        )} */}
        <View style={{ padding: SIZES.medium }}>
          <Company
            companyLogo={testData.data[1].employer_logo}
            companyName={testData.data[1].employer_name}
            jobTitle={testData.data[1].job_title}
            jobCity={testData.data[1].job_city}
            jobCountry={testData.data[1].job_country}
          />
          <JobTabs
            tabs={tabs}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          {displayTabContent()}
        </View>
      </ScrollView>
      <JobFooter
        url={testData.data[1].job_google_link ?? "Something went wrong"}
      />
    </SafeAreaView>
  );
};

export default Home;
