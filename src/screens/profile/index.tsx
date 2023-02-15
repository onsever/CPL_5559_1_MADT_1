import {View, Text, TextInput, Image} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AuthStackNavigatorProps} from '../../navigators/AuthStackNavigator';
import {styles} from './styles';
import Input from '../../components/Input';
import MainTitle from '../../components/MainTitle';
import Button from '../../components/Button';
import Colors from '../../utilities/Colors';
import Icon from 'react-native-vector-icons/FontAwesome';

type ProfileScreenProps = NativeStackScreenProps<
  AuthStackNavigatorProps,
  'Profile'
>;

const ProfileScreen = ({navigation}: ProfileScreenProps) => {
  const [firstname, setFirstname] = React.useState('');
  const [lastname, setLastname] = React.useState('');
  const [contact, setContact] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [birthDate, setBirthDate] = React.useState('');

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
            Welcome, abc
          </Text>
        </View>
        <View style={styles.profileContainer}>
          <Image
            source={require('../../../assets/profile.png')}
            style={{
              resizeMode: 'contain',
              height: 100,
              width: 100,
            }}
          />
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
            <Text style={styles.inputText}>Email ID:</Text>
            <Input
              placeholder=""
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
            />
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
                  width: '85%',
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

        <Button>
          <Text style={styles.buttonText}>Save</Text>
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;
