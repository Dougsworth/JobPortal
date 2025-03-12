import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { View, Text } from "react-native";

// Import theme
import { COLORS, FONTS } from "../constants/theme";

// Import screens
import WelcomeScreen from "../screens/WelcomeScreen";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import SearchScreen from "../screens/SearchScreen";

// Import additional screens (these would need to be created)
import JobDetailsScreen from "../screens/jobs/JobDetailsScreen";
import SavedJobsScreen from "../screens/jobs/SavedJobsScreen";
import EditProfileScreen from "../screens/profile/EditProfileScreen";
import ResumeScreen from "../screens/profile/ResumeScreen";

// Create Tab and Stack navigators
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Home Stack
const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: COLORS.primary,
        },
        headerTintColor: COLORS.card,
        headerTitleStyle: {
          ...FONTS.h3,
        },
      }}
    >
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ title: "Job Feed" }}
      />
      <Stack.Screen
        name="JobDetails"
        component={JobDetailsScreen}
        options={{ title: "Job Details" }}
      />
      <Stack.Screen
        name="SavedJobs"
        component={SavedJobsScreen}
        options={{ title: "Saved Jobs" }}
      />
    </Stack.Navigator>
  );
};

// Search Stack
const SearchStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: COLORS.primary,
        },
        headerTintColor: COLORS.card,
        headerTitleStyle: {
          ...FONTS.h3,
        },
      }}
    >
      <Stack.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{ title: "Search Jobs" }}
      />
      <Stack.Screen
        name="JobDetails"
        component={JobDetailsScreen}
        options={{ title: "Job Details" }}
      />
    </Stack.Navigator>
  );
};

// Profile Stack
const ProfileStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: COLORS.primary,
        },
        headerTintColor: COLORS.card,
        headerTitleStyle: {
          ...FONTS.h3,
        },
      }}
    >
      <Stack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{ title: "My Profile" }}
      />
      <Stack.Screen
        name="EditProfile"
        component={EditProfileScreen}
        options={{ title: "Edit Profile" }}
      />
      <Stack.Screen
        name="Resume"
        component={ResumeScreen}
        options={{ title: "My Resume" }}
      />
    </Stack.Navigator>
  );
};

// Tab Navigator
const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.textSecondary,
        tabBarStyle: {
          backgroundColor: COLORS.card,
          borderTopColor: COLORS.border,
          height: 60,
          paddingBottom: 10,
          paddingTop: 5,
        },
        tabBarLabelStyle: {
          ...FONTS.body5,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              {/* Replace with your icon component */}
              <Text style={{ fontSize: 20, color }}>🏠</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchStack}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              {/* Replace with your icon component */}
              <Text style={{ fontSize: 20, color }}>🔍</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStack}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              {/* Replace with your icon component */}
              <Text style={{ fontSize: 20, color }}>👤</Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

// Auth Stack (Welcome screen)
const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
    </Stack.Navigator>
  );
};

// Main Navigator
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Auth" component={AuthStack} />
        <Stack.Screen name="Main" component={TabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
