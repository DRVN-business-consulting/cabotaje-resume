import { StatusBar } from 'expo-status-bar';
import { Image, SafeAreaView, ScrollView, SectionList, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const skills = [
    {
      title: 'Backend',
      data: [
        { name: 'Phalcon' },
        { name: 'Codeigniter 3'},
        { name: 'Lumen'},
        { name: 'Laravel'},
      ]
    },
    {
      title: 'Fronted',
      data: [
        { name: 'AngularJS' },
        { name: 'Vue 2' },
        { name: 'Bootstrap Vue' }
      ]
    },
    {
      title: 'Database',
      data: [
        { name: 'Sqlite' },
        { name: 'MySQL' },
      ]
    }
  ]
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container}>
        <View style={styles.personalInfo}>
            <View>
              <Text style={styles.bigText}>Jayford Cabotaje</Text>
              <Text style={[styles.title, { marginBottom: 0, marginTop: 5}]}>Software Engineer</Text>
              <Text  style={styles.defaultText}>12115 16th Ave S</Text>
              <Text  style={styles.defaultText}>Burnsville, Minnesota</Text>
            </View>
            <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmkgAP5-5BW9HaaPKIQ9SiomY1l3ZGS_KMVw&s'}} style={styles.photo} />
        </View>
        <View style={styles.section}>
          <Text style={styles.title}>PROFILE</Text>
          <Text style={styles.defaultText}>I’m a Software Engineer seeking opportunity for professional growth and self-improvement. I am eager to learn and explore new ideas about present-day technologies, be diligent and work well under pressure without sacrificing output quality. I believe that I can be an asset to the company and contribute my skills for its growth and success.</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.title}>TECHNICAL SKILLS</Text>
          {
            skills.map(skill => {
              return [ <Text style={[styles.header]} key={skill.title}>{skill.title}</Text>, ...skill.data.map(item => <Text style={styles.item} key={item.name}>{item.name} </Text>)]
            })
          }
          {/* <SectionList 
            style={{ marginTop: 10}}
            sections={skills}
            renderSectionHeader={
              ({ section: { title}}) => (
                <Text style={[styles.header, styles.title]}>{title}</Text>
              )
            }
            
            renderItem={({item}) => <Text style={{ fontSize: 18, paddingVertical: 10, paddingHorizontal: 10 }}>{item.name} </Text>}
            /> */}
        </View>
        <View style={styles.section}>
          <Text style={styles.title}>EDUCATIONAL ATTAINMENT</Text>
          <Text style={styles.subtitle}>Tertiary</Text>
          <Text style={[styles.defaultText]}>- Bachelor of Science in Information Technology</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    marginVertical: 25,
    //backgroundColor: '#fff',
    width: '100%',
    height: '100%',
    backgroundColor: 'teal',
  },
  personalInfo: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 2,
    borderBottomColor: 'white',
    paddingVertical: 10,
  },
  bigText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'white'
  },
  subtitle: {
    fontStyle: 'italic',
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white'
  },
  photo: {
    width: 125,
    height: 120
  },
  section: {
    marginVertical: 10
  },
  header: {
    paddingVertical: 5, paddingHorizontal: 10,
    backgroundColor: '#26a69a',
    fontSize: 19,
    fontWeight: 'bold',
    color: 'white'
  },
  item: { color: 'white', fontSize: 18, paddingVertical: 10, paddingHorizontal: 12, borderBottomColor: '#4db6ac', borderBottomWidth: 2 },
  defaultText: {
    fontSize: 17,
    color: 'white'
  }
});
