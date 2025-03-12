import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants/theme";
const JobCard = ({ job, onPress }) => {
  return (
    <TouchableOpacity
      style={[styles.jobCard, { backgroundColor: job.color }]}
      activeOpacity={0.9}
      onPress={() => onPress(job)}
    >
      <View style={styles.jobCardContent}>
        <View style={styles.companyLogoContainer}>
          {job.logo ? (
            <Text style={styles.companyLogoText}>{job.logo}</Text>
          ) : (
            <View style={styles.companyLogoPlaceholder} />
          )}
        </View>

        <View style={styles.jobTitleContainer}>
          <Text style={styles.jobTitle}>{job.title}</Text>
          <Text style={styles.companyName}>{job.company}</Text>
        </View>

        <TouchableOpacity style={styles.viewButton}>
          <Text style={styles.viewButtonText}>View</Text>
          <Text style={styles.viewButtonIcon}>↗</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.jobTagsContainer}>
        <View style={styles.jobTag}>
          <Text style={styles.locationIcon}>📍</Text>
          <Text style={styles.jobTagText}>{job.location}</Text>
        </View>

        <View style={styles.jobTag}>
          <Text style={styles.experienceIcon}>📚</Text>
          <Text style={styles.jobTagText}>{job.experience}</Text>
        </View>

        <View style={styles.jobTag}>
          <Text style={styles.typeIcon}>🕒</Text>
          <Text style={styles.jobTagText}>{job.type}</Text>
        </View>
      </View>

      <View style={styles.jobDescriptionContainer}>
        <Text style={styles.jobDescription} numberOfLines={2}>
          {job.description}
        </Text>
        <TouchableOpacity>
          <Text style={styles.readMoreText}>Read More</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.jobCardFooter}>
        <View style={styles.postedDateContainer}>
          <Text style={styles.postedIcon}>🕒</Text>
          <Text style={styles.postedText}>Posted {job.postedDate}</Text>
        </View>

        <Text style={styles.salaryText}>{job.salary}</Text>
      </View>
    </TouchableOpacity>
  );
};

const JobList = ({
  data,
  onJobPress,
  ListHeaderComponent,
  ListEmptyComponent,
}) => {
  if (!data || data.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        {ListEmptyComponent || (
          <Text style={styles.emptyText}>No jobs found</Text>
        )}
      </View>
    );
  }

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <JobCard job={item} onPress={onJobPress} />}
      contentContainerStyle={styles.list}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={ListHeaderComponent}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    padding: 20,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  emptyText: {
    fontSize: 16,
    color: COLORS.textSecondary,
    textAlign: "center",
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

export default JobList;
