import React from "react";
import { View, Text, Image, SafeAreaView } from "react-native";
import { Link, Stack } from "expo-router";
import { images } from "../constants/index";
import styles from "../styles/index";
import { icons } from "../constants/index";
import { Pressable } from "react-native";
import { useTheme } from "./_layout";
const index = () => {
  const { theme } = useTheme();
  return (
    <SafeAreaView style={styles.container(theme)}>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      ></Stack.Screen>
      <Image
        source={images.welcomeImage}
        resizeMode="contain"
        style={styles.image}
      ></Image>
      <View style={styles.textContainer(theme)}>
        <Text style={styles.title(theme)}>Finding a perfect job match</Text>
        <Text style={styles.description(theme)}>
          Finding your dream job is now much easier and faster like never before
        </Text>
        <Link href="/home" asChild style={styles.btnContainer(theme)}>
          <Pressable>
            <Text style={styles.textBtn}>
              Let's Get Started{"  "}
              <Image source={icons.right} style={styles.rightArrow} />
            </Text>
          </Pressable>
        </Link>
      </View>
    </SafeAreaView>
  );
};

export default index;
