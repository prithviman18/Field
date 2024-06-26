import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from "@expo/vector-icons";
import { StyleSheet } from 'react-native';
import { View, Text,TouchableOpacity } from 'react-native';


const Header = ({ title }) => {
  const navigation = useNavigation();

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={handleBackPress} style={styles.touchable}>
        {/* <MaterialIcons name="arrow-left" size={34} color="white" /> */}
        <AntDesign name="left" size={22} color="white" />
      </TouchableOpacity>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Add Leads</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    marginTop: 40,
    flexDirection: 'row',
    alignItems: 'center', // Added to align items vertically
    backgroundColor: 'red',
    width: '100%',
    paddingHorizontal: 16,
    height: 50,
  },
  titleContainer: {
    flex: 1,
    marginLeft: 16,
  },
  title: {
    fontSize: 18,
    color: 'white',
    fontStyle: "italic",
  },
  touchable: {
    marginTop: 3,
    marginRight: 10,
  }
});

export default Header;
