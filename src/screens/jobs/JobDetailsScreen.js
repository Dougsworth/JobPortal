import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { COLORS, FONTS, SIZES, SHADOWS } from '../../constants/theme';

// Sample data - in a real app, you'd fetch based on the jobId
const JOB_DATA = {
  id: '1',
  title: 'Sr. UX Designer',
  company: 'Google',
  location: 'Kingston',
  type: 'One-off',
  experience: '3 years exp.',
  salary: 'TBA',
  color: '#5B3DF8', // Purple background
  logo: 'G',
  postedDate: 'Just Now',
  description: 'UX Designers are the synthesis of design and development. They take Google\'s most innovative product concepts and make them intuitive and easy to use for billions of people around the world. Throughout the design process—from creating user flows and wireframes to building user interface mockups and prototypes—you'll envision how people will experience our products, and bring that vision to life.',
  responsibilities: [,

    'Lead the design of Google products across platforms.',
    'Create wireframes, user flows, and interactive prototypes.',
    'Collaborate with engineers, product managers, and other designers.',
    'Conduct user research and testing to validate design decisions.',
    'Advocate for users and ensure designs meet their needs.',
  ],
  requirements: [
    'Bachelor\'s degree in Design, HCI, or related field.',
    '3+ years of experience in UX/UI design.',
    'Strong portfolio demonstrating user-centered design processes.',
    'Expertise in design tools like Figma, Sketch, or Adobe XD.',
    'Experience with design systems and component libraries.',
  ],
  benefits: [
    'Competitive salary and equity package.',
    'Health, dental, and vision insurance.',
    'Flexible work arrangements.',
    'Professional development opportunities.',
    'Free meals and snacks.',
  ],
};

const JobDetailsScreen = ({ route, navigation }) => {
  const { jobId } = route.params;
  const [saved, setSaved] = useState(false);
  const [applied, setApplied] = useState(false);
  
  // In a real app, you would fetch the job details based on jobId
  const job = JOB_DATA;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={job.color} />
      
      <View style={[styles.header, { backgroundColor: job.color }]}>
        <View style={styles.headerActions}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.backButtonText}>←</Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            style={styles.saveButton}
            onPress={() => setSaved(!saved)}
          >
            <Text style={styles.saveButtonText}>{saved ? '★' : '☆'}</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.companyInfo}>
          <View style={styles.logoContainer}>
            <Text style={styles.logoText}>{job.logo}</Text>
          </View>
          
          <Text style={styles.jobTitle}>{job.title}</Text>
          <Text style={styles.companyName}>{job.company}</Text>
        </View>
        
        <View style={styles.jobTags}>
          <View style={styles.jobTag}>
            <Text style={styles.jobTagText}>{job.location}</Text>
          </View>
          
          <View style={styles.jobTag}>
            <Text style={styles.jobTagText}>{job.experience}</Text>
          </View>
          
          <View style={styles.jobTag}>
            <Text style={styles.jobTagText}>{job.type}</Text>
          </View>
        </View>
      </View>
      
      <ScrollView style={styles.content}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Description</Text>
          <Text style={styles.descriptionText}>{job.description}</Text>
        </View>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Responsibilities</Text>
          {job.responsibilities.map((item, index) => (
            <View key={index} style={styles.listItem}>
              <Text style={styles.listItemBullet}>•</Text>
              <Text style={styles.listItemText}>{item}</Text>
            </View>
          ))}
        </View>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Requirements</Text>
          {job.requirements.map((item, index) => (
            <View key={index} style={styles.listItem}>
              <Text style={styles.listItemBullet}>•</Text>
              <Text style={styles.listItemText}>{item}</Text>
            </View>
          ))}
        </View>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Benefits</Text>
          {job.benefits.map((item, index) => (
            <View key={index} style={styles.listItem}>
              <Text style={styles.listItemBullet}>•</Text>
              <Text style={styles.listItemText}>{item}</Text>
            </View>
          ))}
        </View>
        
        <View style={styles.salarySection}>
          <Text style={styles.salaryLabel}>Salary</Text>
          <Text style={styles.salaryValue}>{job.salary}</Text>
        </View>
      </ScrollView>
      
      <View style={styles.footer}>
        <TouchableOpacity
          style={[styles.applyButton, applied && styles.appliedButton]}
          onPress={() => setApplied(!applied)}
        >
          <Text style={styles.applyButtonText}>
            {applied ? 'Applied ✓' : 'Apply Now'}
          </Text>
        </TouchableOpacity>
      </View>
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
    paddingTop: 40,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  headerActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButtonText: {
    color: COLORS.text,
    fontSize: 20,
  },
  saveButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  saveButtonText: {
    color: COLORS.text,
    fontSize: 20,
  },
  companyInfo: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logoContainer: {
    width: 60,
    height: 60,
    borderRadius: 15,
    backgroundColor: COLORS.text,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  logoText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.background,
  },
  jobTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.text,
    marginBottom: 5,
    textAlign: 'center',
  },
  companyName: {
    fontSize: 16,
    color: COLORS.text,
    opacity: 0.8,
    textAlign: 'center',
  },
  jobTags: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  jobTag: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    marginHorizontal: 5,
    marginBottom: 5,
  },
  jobTagText: {
    color: COLORS.text,
    fontSize: 14,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  section: {
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.text,
    marginBottom: 15,
  },
  descriptionText: {
    fontSize: 14,
    lineHeight: 22,
    color: COLORS.text,
    opacity: 0.8,
  },
  listItem: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  listItemBullet: {
    fontSize: 16,
    color: COLORS.text,
    marginRight: 10,
  },
  listItemText: {
    flex: 1,
    fontSize: 14,
    lineHeight: 20,
    color: COLORS.text,
    opacity: 0.8,
  },
  salarySection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLORS.card,
    borderRadius: 15,
    padding: 20,
    marginBottom: 30,
  },
  salaryLabel: {
    fontSize: 16,
    color: COLORS.text,
    opacity: 0.7,
  },
  salaryValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.primary,
  },
  footer: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
  },
  applyButton: {
    backgroundColor: COLORS.primary,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
  },
  appliedButton: {
    backgroundColor: COLORS.primaryDark,
  },
  applyButtonText: {
    color: COLORS.text,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default JobDetailsScreen;