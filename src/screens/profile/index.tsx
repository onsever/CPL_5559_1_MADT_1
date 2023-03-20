import {View, Text, TextInput, Image, TouchableOpacity} from 'react-native';
import React,{useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AuthStackNavigatorProps} from '../../navigators/AuthStackNavigator';
import {styles} from './styles';
import Input from '../../components/Input';
import MainTitle from '../../components/MainTitle';
import Button from '../../components/Button';
import Colors from '../../utilities/Colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useDispatch, useSelector} from 'react-redux';
import {
  getSingleUserProfile,
  updateUserProfile,
} from '../../store/userProfile/userProfileActions';
import {supabase, SUPBASE_STORAGE_URL} from '../../utilities/Supabase';
import {getSessionInfoFromLocal} from '../../helpers/common';

type ProfileScreenProps = NativeStackScreenProps<
  AuthStackNavigatorProps,
  'Profile'
>;

const ProfileScreen = ({navigation}: ProfileScreenProps) => {
  const [firstname, setFirstname] = React.useState('');
  const [lastname, setLastname] = React.useState('');
  const [contact, setContact] = React.useState('');
  const [birthDate, setBirthDate] = React.useState('');
  const {selectedUserProfile, error, updatedUserProfile} = useSelector(
    state => state.userProfileReducer,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const checkSession = async () => {
      let session = await getSessionInfoFromLocal();
      if (session) {
        dispatch(getSingleUserProfile(session.user.id));
      }
    };
    checkSession();
  }, []);

  useEffect(() => {
    if (selectedUserProfile) {
      setFirstname(selectedUserProfile.first_name);
      setLastname(selectedUserProfile.last_name);
      setContact(selectedUserProfile.contact);
      setBirthDate(selectedUserProfile.birth_date);
    }
  }, [selectedUserProfile]);

  useEffect(() => {
    if (updatedUserProfile) {
      navigation.navigate("Home");
    }
  }, [updatedUserProfile]);

  useEffect(() => {
    if (error) {
      Alert.alert(error);
    }
  }, [error]);

  const handleSave = () => {
    dispatch(
      updateUserProfile({
        id: selectedUserProfile.id,
        first_name: firstname,
        last_name: lastname,
        contact: contact,
        birth_date: birthDate
      }),
    );
  };
  return (
    <SafeAreaView>
      <View style={styles.wrapper}>
        {/* <MainTitle title="Welcome, abc" fontSize={30} color={Colors.purple} /> */}
        <View
          style={{
            alignItems: 'flex-start',
            width: '100%',
            marginTop: 20,
            paddingHorizontal: 40,
          }}>
          <Text
            style={{
              fontSize: 30,
              color: Colors.purple,
            }}>
            Welcome, {firstname}
          </Text>
        </View>
        <View style={styles.profileContainer}>
          <Image
            //source={require('../../../assets/profile.png')}
            source={{uri: SUPBASE_STORAGE_URL + "/profile/" + selectedUserProfile.image}}
            style={{
              resizeMode: 'contain',
              height: 100,
              width: 100,
            }}
          />
          <View
            style={{
              justifyContent: 'center',
            }}>
            <TouchableOpacity
              style={styles.actionButton}
              onPress={() => {
                console.log('Upload Photo');
              }}>
              <Text>Take Photo</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.actionButton}
              onPress={() => {
                console.log('Upload Photo');
              }}>
              <Text>Upload Photo</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.inputContainer}>
            <Text style={styles.inputText}>First Name:</Text>
            <Input
              placeholder=""
              value={firstname}
              onChangeText={setFirstname}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputText}>Last Name:</Text>
            <Input placeholder="" value={lastname} onChangeText={setLastname} />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputText}>Contact:</Text>
            <Input placeholder="" value={contact} onChangeText={setContact} />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputText}>Date of Birth:</Text>
            <View style={styles.dateContainer}>
              <TextInput
                style={{
                  backgroundColor: '#fff',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderColor: Colors.primary,
                  borderWidth: 1,
                  borderRadius: 5,
                  padding: 3,
                  width: '100%',
                }}
                value={birthDate}
                onChangeText={a => setBirthDate(a)}
              />
              <Icon
                name="calendar"
                size={30}
                style={{position: 'absolute', right: 10, top: 2}}
              />
            </View>
          </View>
        </View>

        <Button onPress={handleSave}>
          <Text style={styles.buttonText}>Save</Text>
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;
