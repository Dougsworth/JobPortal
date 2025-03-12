import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useRouter } from "expo-router";
import Icon from "react-native-vector-icons/MaterialIcons"; // Using Material Icons for modern, cool icons

// Define colors directly in component with modern palette
const COLORS = {
  background: "#121212", // Dark background
  card: "#1E1E1E", // Slightly lighter dark gray for cards
  primary: "#5B3DF8", // Purple accent
  secondary: "#F9C74F", // Bright yellow for buttons
  text: "#FFFFFF", // White text
  textDark: "#B0B0B0", // Light gray for secondary text
  border: "#2D2D2D", // Darker border for contrast
};

// Sample job recommendation data with modern logos (using icons)
const RECOMMENDED_JOBS = [
  {
    id: "1",
    title: "Visual Designer",
    company: "National Commercial Bank",
    location: "Kingston, Remote",
    salary: "$12K/mo",
    logo: "business", // Material Icon name for a modern logo
  },
  {
    id: "2",
    title: "UX Designer",
    company: "Tech Solutions Ltd",
    location: "Remote",
    salary: "$15K/mo",
    logo: "palette", // Modern icon for creativity
  },
  {
    id: "3",
    title: "Product Designer",
    company: "Creative Agency",
    location: "Kingston",
    salary: "$18K/mo",
    logo: "work", // Modern icon for work
  },
];

const SearchScreen = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [location, setLocation] = useState("");

  const handleSearch = () => {
    console.log("Searching for:", searchQuery, "in", location);
  };

  const navigateToJobDetails = (jobId) => {
    router.push(`/job/${jobId}`);
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}
    >
      <StatusBar barStyle="light-content" backgroundColor={COLORS.background} />

      <SafeAreaView style={styles.safeArea}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => router.back()}
          >
            <Icon name="arrow-back-ios" size={24} color={COLORS.text} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Search</Text>
          <TouchableOpacity style={styles.profileButton}>
            <Icon name="person" size={24} color={COLORS.text} />
          </TouchableOpacity>
        </View>

        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          <Text style={styles.title}>Search & Land on your{"\n"}dream job</Text>

          <View style={styles.searchCard}>
            <View style={styles.inputContainer}>
              <Icon
                name="search"
                size={20}
                color={COLORS.textDark}
                style={styles.icon}
              />
              <TextInput
                style={styles.searchInput}
                placeholder="Search Job"
                placeholderTextColor={COLORS.textDark}
                value={searchQuery}
                onChangeText={setSearchQuery}
              />
            </View>

            <View style={styles.divider} />

            <View style={styles.inputContainer}>
              <Icon
                name="location-on"
                size={20}
                color={COLORS.textDark}
                style={styles.icon}
              />
              <TextInput
                style={styles.searchInput}
                placeholder="Location"
                placeholderTextColor={COLORS.textDark}
                value={location}
                onChangeText={setLocation}
              />
            </View>

            <TouchableOpacity
              style={[styles.searchButton, styles.shadow]}
              onPress={handleSearch}
            >
              <Text style={styles.searchButtonText}>Search Job</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.recommendationHeader}>
            <Text style={styles.recommendationTitle}>Recommendations</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>See all</Text>
            </TouchableOpacity>
          </View>

          {RECOMMENDED_JOBS.map((job) => (
            <TouchableOpacity
              key={job.id}
              style={[styles.jobCard, styles.shadow]}
              onPress={() => navigateToJobDetails(job.id)}
            >
              <View style={styles.jobContent}>
                <View style={styles.logoContainer}>
                  <Icon name={job.logo} size={24} color={COLORS.primary} />
                </View>

                <View style={styles.jobInfo}>
                  <Text style={styles.companyName}>{job.company}</Text>
                  <Text style={styles.jobTitle}>{job.title}</Text>
                  <View style={styles.locationContainer}>
                    <Icon
                      name="location-on"
                      size={16}
                      color={COLORS.textDark}
                      style={styles.locationIcon}
                    />
                    <Text style={styles.locationText}>{job.location}</Text>
                  </View>
                </View>

                <View style={styles.rightContent}>
                  <Text style={styles.salaryText}>{job.salary}</Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}

          <View style={styles.popularSearches}>
            <View style={styles.chipContainer}>
              <TouchableOpacity style={[styles.chip, styles.shadow]}>
                <Text style={styles.chipText}>"Design"</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.chip, styles.shadow]}>
                <Text style={styles.chipText}>Designed</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.chip, styles.shadow]}>
                <Text style={styles.chipText}>Designer</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  safeArea: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 16,
    backgroundColor: COLORS.background,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  headerTitle: {
    color: COLORS.text,
    fontSize: 20,
    fontWeight: "700",
  },
  profileButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: COLORS.secondary,
    justifyContent: "center",
    alignItems: "center",
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 24,
    paddingBottom: 40,
    paddingTop: 16,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: COLORS.text,
    marginVertical: 32,
    lineHeight: 40,
  },
  searchCard: {
    backgroundColor: COLORS.card,
    borderRadius: 20,
    padding: 24,
    marginBottom: 24,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  icon: {
    marginRight: 12,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: COLORS.textDark,
    paddingVertical: 12,
  },
  divider: {
    height: 1,
    backgroundColor: COLORS.border,
    marginBottom: 16,
  },
  searchButton: {
    backgroundColor: COLORS.secondary,
    borderRadius: 25,
    height: 56,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 16,
  },
  searchButtonText: {
    color: COLORS.textDark,
    fontSize: 18,
    fontWeight: "600",
  },
  recommendationHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  recommendationTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: COLORS.text,
  },
  seeAllText: {
    color: COLORS.text,
    fontSize: 16,
  },
  jobCard: {
    backgroundColor: COLORS.card,
    borderRadius: 20,
    marginBottom: 16,
    padding: 20,
  },
  jobContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  logoContainer: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: "#2D2D2D",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
  },
  jobInfo: {
    flex: 1,
  },
  companyName: {
    fontSize: 14,
    color: COLORS.textDark,
    marginBottom: 4,
  },
  jobTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: COLORS.text,
    marginBottom: 8,
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  locationIcon: {
    marginRight: 6,
  },
  locationText: {
    fontSize: 14,
    color: COLORS.textDark,
  },
  rightContent: {
    alignItems: "flex-end",
  },
  salaryText: {
    fontSize: 16,
    fontWeight: "600",
    color: COLORS.secondary,
  },
  popularSearches: {
    marginTop: 24,
  },
  chipContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 12,
  },
  chip: {
    backgroundColor: "#2D2D2D",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 24,
    marginRight: 12,
    marginBottom: 12,
  },
  chipText: {
    color: COLORS.text,
    fontSize: 16,
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,
  },
});

export default SearchScreen;
