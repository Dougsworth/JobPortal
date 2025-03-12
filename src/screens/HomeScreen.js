import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  TextInput,
  Image,
} from "react-native";
import { COLORS, FONTS, SIZES, SHADOWS } from "../constants/theme";

// Sample data - in a real app, you'd fetch from an API
const JOBS_DATA = [
  {
    id: "1",
    title: "Sr. UX Designer",
    company: "Google",
    location: "Kingston",
    type: "One-off",
    experience: "3 years exp.",
    salary: "TBA",
    color: "#5B3DF8", // Purple background
    logo: "G",
    postedDate: "Just Now",
    description:
      "UX Designers are the synthesis of design and development. They take Google's most innovative product concepts...",
  },
  {
    id: "2",
    title: "Project Manager",
    company: "CIBC, HWT Rd., Kingston",
    location: "Montego Bay",
    type: "Part-time",
    experience: "1-5 years exp.",
    salary: "$25K/mo",
    color: "#FF3B3B", // Red background
    logo: null,
    postedDate: "5 days ago",
    description:
      "Airbnb was born in 2007 when two Hosts welcomed three guests to their San Francisco home...",
  },
  {
    id: "3",
    title: "Landscaper",
    company: "HOPE GARDENS",
    location: "Kingston",
    type: "One-off",
    experience: "3 years exp.",
    salary: "TBA",
    color: "#5B3DF8", // Purple background
    logo: "G",
    postedDate: "1 week ago",
    description:
      "Looking for skilled landscapers to maintain our garden spaces...",
  },
];

// Job status categories
const JOB_TABS = [
  { id: "discover", title: "Discover", active: true },
  { id: "saved", title: "Saved", active: false },
  { id: "applied", title: "Applied", active: false },
  { id: "closed", title: "Closed", active: false },
  { id: "discard", title: "Discard", active: false },
];

const HomeScreen = ({ navigation }) => {
  const [jobs, setJobs] = useState(JOBS_DATA);
  const [activeTab, setActiveTab] = useState("discover");
  const [searchQuery, setSearchQuery] = useState("");

  const handleTabPress = (tabId) => {
    setActiveTab(tabId);
    // In a real app, you would filter jobs based on the tab
  };

  const renderJobCard = ({ item }) => (
    <TouchableOpacity
      style={[styles.jobCard, { backgroundColor: item.color }]}
      activeOpacity={0.9}
      onPress={() => navigation.navigate("JobDetails", { jobId: item.id })}
    >
      <View style={styles.jobCardContent}>
        <View style={styles.companyLogoContainer}>
          {item.logo ? (
            <Text style={styles.companyLogoText}>{item.logo}</Text>
          ) : (
            <View style={styles.companyLogoPlaceholder} />
          )}
        </View>

        <View style={styles.jobTitleContainer}>
          <Text style={styles.jobTitle}>{item.title}</Text>
          <Text style={styles.companyName}>{item.company}</Text>
        </View>

        <TouchableOpacity style={styles.viewButton}>
          <Text style={styles.viewButtonText}>View</Text>
          <Text style={styles.viewButtonIcon}>↗</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.jobTagsContainer}>
        <View style={styles.jobTag}>
          <Text style={styles.locationIcon}>📍</Text>
          <Text style={styles.jobTagText}>{item.location}</Text>
        </View>

        <View style={styles.jobTag}>
          <Text style={styles.experienceIcon}>📚</Text>
          <Text style={styles.jobTagText}>{item.experience}</Text>
        </View>

        <View style={styles.jobTag}>
          <Text style={styles.typeIcon}>🕒</Text>
          <Text style={styles.jobTagText}>{item.type}</Text>
        </View>
      </View>

      <View style={styles.jobDescriptionContainer}>
        <Text style={styles.jobDescription} numberOfLines={2}>
          {item.description}
        </Text>
        <TouchableOpacity>
          <Text style={styles.readMoreText}>Read More</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.jobCardFooter}>
        <View style={styles.postedDateContainer}>
          <Text style={styles.postedIcon}>🕒</Text>
          <Text style={styles.postedText}>Posted {item.postedDate}</Text>
        </View>

        <Text style={styles.salaryText}>{item.salary}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.background} />

      <View style={styles.header}>
        <View style={styles.greeting}>
          <Text style={styles.greetingText}>Hello Andre 👋</Text>
          <TouchableOpacity style={styles.profileButton}>
            <View style={styles.profileAvatar} />
          </TouchableOpacity>
        </View>

        <Text style={styles.findJobsText}>Find Jobs</Text>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.tabsContainer}
          contentContainerStyle={styles.tabsContent}
        >
          {JOB_TABS.map((tab) => (
            <TouchableOpacity
              key={tab.id}
              style={[
                styles.tabButton,
                activeTab === tab.id && styles.activeTabButton,
              ]}
              onPress={() => handleTabPress(tab.id)}
            >
              <Text
                style={[
                  styles.tabButtonText,
                  activeTab === tab.id && styles.activeTabButtonText,
                ]}
              >
                {tab.title}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <View style={styles.searchContainer}>
          <View style={styles.searchInputContainer}>
            <Text style={styles.searchIcon}>🔍</Text>
            <TextInput
              style={styles.searchInput}
              placeholder="Search for company or roles..."
              placeholderTextColor={COLORS.textSecondary}
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
          </View>

          <TouchableOpacity style={styles.filterButton}>
            <Text style={styles.filterIcon}>⚙️</Text>
          </TouchableOpacity>
        </View>
      </View>

      <FlatList
        data={jobs}
        renderItem={renderJobCard}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.jobsList}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  header: {
    padding: 20,
  },
  greeting: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  greetingText: {
    fontSize: 24,
    fontWeight: "bold",
    color: COLORS.text,
  },
  profileButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#F9D975", // Yellow background for profile avatar
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  profileAvatar: {
    width: "100%",
    height: "100%",
    backgroundColor: "#F9D975",
  },
  findJobsText: {
    fontSize: 36,
    fontWeight: "bold",
    color: COLORS.text,
    marginBottom: 20,
  },
  tabsContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  tabsContent: {
    paddingRight: 20,
  },
  tabButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    marginRight: 10,
    backgroundColor: "#DDDDDD",
  },
  activeTabButton: {
    backgroundColor: COLORS.primary,
  },
  tabButtonText: {
    color: "#333333",
    fontWeight: "600",
  },
  activeTabButtonText: {
    color: COLORS.text,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  searchInputContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#2A2A2A", // Slightly lighter than background
    borderRadius: 10,
    paddingHorizontal: 15,
    height: 50,
    marginRight: 10,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    color: COLORS.text,
    fontSize: 16,
  },
  filterButton: {
    width: 50,
    height: 50,
    borderRadius: 10,
    backgroundColor: "#2A2A2A",
    justifyContent: "center",
    alignItems: "center",
  },
  filterIcon: {
    fontSize: 20,
  },
  jobsList: {
    padding: 20,
    paddingTop: 0,
  },
  jobCard: {
    borderRadius: 15,
    marginBottom: 20,
    overflow: "hidden",
  },
  jobCardContent: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
  },
  companyLogoContainer: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },
  companyLogoText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#000000",
  },
  companyLogoPlaceholder: {
    width: "100%",
    height: "100%",
    backgroundColor: "#333333",
    borderRadius: 10,
  },
  jobTitleContainer: {
    flex: 1,
  },
  jobTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: COLORS.text,
    marginBottom: 5,
  },
  companyName: {
    fontSize: 14,
    color: COLORS.text,
    opacity: 0.8,
  },
  viewButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
  },
  viewButtonText: {
    color: COLORS.text,
    marginRight: 5,
    fontWeight: "500",
  },
  viewButtonIcon: {
    color: COLORS.text,
    fontSize: 16,
  },
  jobTagsContainer: {
    flexDirection: "row",
    paddingHorizontal: 15,
    marginBottom: 10,
  },
  jobTag: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    marginRight: 10,
  },
  locationIcon: {
    marginRight: 5,
  },
  experienceIcon: {
    marginRight: 5,
  },
  typeIcon: {
    marginRight: 5,
  },
  jobTagText: {
    color: COLORS.text,
    fontSize: 12,
  },
  jobDescriptionContainer: {
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  jobDescription: {
    color: COLORS.text,
    opacity: 0.9,
    marginBottom: 5,
  },
  readMoreText: {
    color: COLORS.text,
    fontWeight: "500",
  },
  jobCardFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 15,
    paddingVertical: 12,
  },
  postedDateContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  postedIcon: {
    marginRight: 5,
  },
  postedText: {
    color: "#333333",
    fontSize: 14,
  },
  salaryText: {
    color: "#333333",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default HomeScreen;
