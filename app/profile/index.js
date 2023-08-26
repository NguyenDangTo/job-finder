import React from "react";
import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { Stack, router } from "expo-router";
import { icons, COLORS, images } from "../../constants/index";
import styles from "../../styles/profile";
import { ScreenHeaderBtn } from "../../components/index";
import { useTheme } from "../_layout";
const Profile = () => {
  const { theme } = useTheme();

  return (
    <SafeAreaView style={styles.container(theme)}>
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
          headerRight: () => null,
          headerTitle: "",
        }}
      ></Stack.Screen>
      <View style={styles.imageContainer}>
        <Image
          source={images.profile}
          resizeMode="contain"
          style={styles.image}
        ></Image>
      </View>
      <View style={styles.profileContainer}>
        <Text style={styles.username(theme)}>Alexander Nguyen</Text>
        <View style={styles.contactInfo}>
          <Text style={styles.key}>Phone</Text>
          <Text style={styles.context(theme)}>+84 23 456 789</Text>
        </View>
        <View style={styles.contactInfo}>
          <Text style={styles.key}>Mail</Text>
          <Text style={styles.context(theme)}>tonguyen@gmail.com</Text>
        </View>
      </View>
      <View style={styles.optionContainer(theme)}>
        <TouchableOpacity style={styles.option(theme)}>
          {/* Card */}
          <View style={styles.optionInfo}>
            <Image
              source={icons.creditCard}
              resizeMode="contain"
              style={styles.optionImage(theme)}
            ></Image>
            <Text style={styles.optionText(theme)}>Card</Text>
          </View>
          <View style={styles.rightContainer}>
            <Image
              source={icons.chevronRight}
              resizeMode="contain"
              style={styles.right(theme)}
            ></Image>
          </View>
        </TouchableOpacity>
        {/* Profile details */}

        <TouchableOpacity style={styles.option(theme)}>
          <View style={styles.optionInfo}>
            <Image
              source={icons.user}
              resizeMode="contain"
              style={styles.optionImage(theme)}
            ></Image>
            <Text style={styles.optionText(theme)}>Profile details</Text>
          </View>
          <View style={styles.rightContainer}>
            <Image
              source={icons.chevronRight}
              resizeMode="contain"
              style={styles.right(theme)}
            ></Image>
          </View>
        </TouchableOpacity>
        {/* Setting */}
        <TouchableOpacity
          style={styles.option(theme)}
          onPress={() => router.push("/profile/settings")}
        >
          <View style={styles.optionInfo}>
            <Image
              source={icons.settings}
              resizeMode="contain"
              style={styles.optionImage(theme)}
            ></Image>
            <Text style={styles.optionText(theme)}>Settings</Text>
          </View>
          <View style={styles.rightContainer}>
            <Image
              source={icons.chevronRight}
              resizeMode="contain"
              style={styles.right(theme)}
            ></Image>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
