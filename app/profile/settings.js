import React, { useState } from "react";
import { View, Text, SafeAreaView, Image, Switch } from "react-native";
import { Stack, router } from "expo-router";
import { icons, COLORS } from "../../constants/index";
import styles from "../../styles/settings";
import { ScreenHeaderBtn } from "../../components";
import { useTheme } from "../../app/_layout";

const Settings = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
    setTheme(theme === "light" ? "dark" : "light");
  };

  const { theme, setTheme } = useTheme();
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
      <View style={styles.option(theme)}>
        {/* Card */}
        <View style={styles.optionInfo}>
          <Image
            source={icons.moon}
            resizeMode="contain"
            style={styles.optionImage(theme)}
          ></Image>
          <Text style={styles.optionText(theme)}>Dark mode</Text>
        </View>
        <View style={styles.switchContainer}>
          <Switch
            trackColor={{ false: COLORS.gray2, true: COLORS.gray2 }}
            thumbColor={isEnabled ? COLORS.secondary : "#f4f3f4"}
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Settings;
