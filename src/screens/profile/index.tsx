import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AuthStackNavigatorProps} from '../../navigators/AuthStackNavigator';
import {styles} from './styles';
import Input from '../../components/Input';
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
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import moment from 'moment';

type ProfileScreenProps = NativeStackScreenProps<
  AuthStackNavigatorProps,
  'Profile'
>;

const ProfileScreen = ({navigation}: ProfileScreenProps) => {
  const [firstname, setFirstname] = React.useState('');
  const [lastname, setLastname] = React.useState('');
  const [contact, setContact] = React.useState('');
  const [birthDate, setBirthDate] = React.useState('');
  const [image, setImage] = React.useState('');
  const [uploading, setUploading] = useState(false);
  const bucketName = 'cpl5559-project';

  const [firstNameError, setFirstNameError] = useState('');
  const [lastNameError, setLastNameError] = useState('');
  const [contactError, setContactError] = useState('');
  const [birthDateError, setBirthDateError] = useState('');

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
      setImage(selectedUserProfile.image);
    }
  }, [selectedUserProfile]);

  useEffect(() => {
    if (updatedUserProfile) {
      navigation.navigate('Home');
    }
  }, [updatedUserProfile]);

  // useEffect(() => {
  //   if (error) {
  //     Alert.alert(error);
  //   }
  // }, [error]);

  const handleSave = () => {
    var firstnameValid = false;
    if (firstname.length === 0) {
      setFirstNameError('First Name is required');
    } else {
      setFirstNameError('');
      firstnameValid = true;
    }

    var lastnameValid = false;
    if (lastname.length === 0) {
      setLastNameError('Last Name is required');
    } else {
      setLastNameError('');
      lastnameValid = true;
    }

    var contactValid = false;
    if (contact.length === 0) {
      setContactError('Contact is required');
    } else {
      setContactError('');
      contactValid = true;
    }

    var birthDateValid = false;
    var date = moment(birthDate,"YYYY-MM-DD", true);

    if (birthDate.length === 0) {
      setBirthDateError('Birth Date is required');
    } else if (!date.isValid()) {
      setBirthDateError('Birth Date is not a valid date');
    } else {
      setBirthDateError('');
      birthDateValid = true;
    }

    if (firstnameValid && lastnameValid && contactValid && birthDate) {
      dispatch(
        updateUserProfile({
          id: selectedUserProfile.id,
          first_name: firstname,
          last_name: lastname,
          contact: contact,
          birth_date: birthDate,
          image: image,
        }),
      );
    }
  };

  function onUpload(fileName) {
    setImage(fileName);
  }

  async function upload(uri, type, filename) {
    console.log(uri);
    console.log(type);
    console.log(filename);

    const photo = {
      uri: uri,
      type: type,
      name: filename,
    };

    const formData = new FormData();
    formData.append('file', photo);
    const filePath = `public/profile/${filename}`;

    let {error} = await supabase.storage
      .from(bucketName)
      .upload(filePath, formData);

    if (error) {
      throw error;
    }
    onUpload(filename);
  }

  async function uploadPhoto() {
    try {
      setUploading(true);
      let options = {
        storageOptions: {
          skipBackup: true,
          path: 'images',
        },
      };
      launchImageLibrary(options, res => {
        console.log('Response = ', res);
        if (res.didCancel) {
          console.log('User cancelled image picker');
        } else if (res.error) {
          console.log('ImagePicker Error: ', res.error);
        } else if (res.customButton) {
          console.log('User tapped custom button: ', res.customButton);
          Alerr.alert(res.customButton);
        } else {
          upload(res.assets[0].uri, res.assets[0].type, res.assets[0].fileName);
        }
      });
    } catch (error) {
      if (isCancel(error)) {
        console.warn('cancelled');
      } else if (isInProgress(error)) {
        console.warn(
          'multiple pickers were opened, only the last will be considered',
        );
      } else if (error instanceof Error) {
        Alert.alert(error.message);
      } else {
        throw error;
      }
    } finally {
      setUploading(false);
    }
  }

  async function takePhoto() {
    try {
      setUploading(true);
      let options = {
        storageOptions: {
          skipBackup: true,
          path: 'images',
        },
      };
      launchCamera(options, res => {
        console.log('Response = ', res);
        if (res.didCancel) {
          console.log('User cancelled image picker');
        } else if (res.error) {
          console.log('ImagePicker Error: ', res.error);
        } else if (res.customButton) {
          console.log('User tapped custom button: ', res.customButton);
          alert(res.customButton);
        } else {
          upload(res.assets[0].uri, res.assets[0].type, res.assets[0].fileName);
        }
      });
    } catch (error) {
      if (isCancel(error)) {
        console.warn('cancelled');
      } else if (isInProgress(error)) {
        console.warn(
          'multiple pickers were opened, only the last will be considered',
        );
      } else if (error instanceof Error) {
        Alert.alert(error.message);
      } else {
        throw error;
      }
    } finally {
      setUploading(false);
    }
  }
  return (
    <SafeAreaView>
      <View style={styles.wrapper}>
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
            source={{
              uri: SUPBASE_STORAGE_URL + '/profile/' + image,
            }}
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
            <TouchableOpacity style={styles.actionButton} onPress={takePhoto}>
              <Text>Take Photo</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton} onPress={uploadPhoto}>
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
            {firstNameError.length > 0 && (
              <Text style={styles.errorText}>{firstNameError}</Text>
            )}
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputText}>Last Name:</Text>
            <Input placeholder="" value={lastname} onChangeText={setLastname} />
            {lastNameError.length > 0 && (
              <Text style={styles.errorText}>{lastNameError}</Text>
            )}
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputText}>Contact:</Text>
            <Input placeholder="" value={contact} onChangeText={setContact} />
            {contactError.length > 0 && (
              <Text style={styles.errorText}>{contactError}</Text>
            )}
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
              {birthDateError.length > 0 && (
                <Text style={styles.errorText}>{birthDateError}</Text>
              )}
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
