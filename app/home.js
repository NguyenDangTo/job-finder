import React from "react";
import { View, ScrollView, SafeAreaView } from "react-native";
import { COLORS, SIZES, icons, images } from "../constants/index";
import { Stack, router } from "expo-router";
import {
  Welcome,
  Popularjobs,
  Nearbyjobs,
  ScreenHeaderBtn,
} from "../components/index";
import { useTheme } from "./_layout";
const Home = () => {
  const { theme } = useTheme();

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
              iconUrl={icons.menu}
              dimension="60%"
              handlePress={() => router.back()}
            />
          ),
          headerRight: () => (
            <ScreenHeaderBtn
              iconUrl={images.profile}
              dimension="100%"
              handlePress={() => router.push("/profile")}
            />
          ),
          headerTitle: "",
        }}
      ></Stack.Screen>

      <ScrollView showsVerticalScrollIndicator={true}>
        <View style={{ flex: 1, padding: SIZES.medium }}>
          <Welcome />
          <Popularjobs />
          <Nearbyjobs city={"Ho Chi Minh"} />
          <Nearbyjobs city={"Ha Noi"} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
