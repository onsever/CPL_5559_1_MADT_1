import {View, Text, Image} from 'react-native';
import React from 'react';
import {supabase} from '../../utilities/Supabase';
import styles from './styles';

const bucketName = 'cpl5559-project';
const folderPath = 'public/cast';

const CastAndCrewScreen = ({navigation, route}) => {
  const [cast, setCast] = React.useState([]);
  const movie = route.params.movie;

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Cast and Crew',
    });
  }, [navigation]);

  React.useEffect(() => {
    const fetchCast = async () => {
      const {data: castData, error: castError} = await supabase
        .from('casts')
        .select('*')
        .eq('movie_id', movie.id);

      if (castError) {
        console.log('error', castError);
        return;
      }

      const imageUrls = await Promise.all(
        castData[0].cast.map(async c => {
          const {data: url} = supabase.storage
            .from(bucketName)
            .getPublicUrl(`${folderPath}/${c.actorImage}`);

          return url;
        }),
      );

      const updatedCast = castData[0].cast.map((c, index) => {
        return {
          ...c,
          actorImage: imageUrls[index].publicUrl,
        };
      });

      setCast(updatedCast);
    };

    fetchCast();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(cast);

  return (
    <>
      <Text style={styles.title}>{movie.name}</Text>
      <View style={styles.container}>
        {cast.map((castMember, index) => (
          <View style={styles.crewContainer} key={index}>
            <Image style={styles.image} source={{uri: castMember.actorImage}} />
            <Text style={styles.actorName}>{castMember.actorName}</Text>
            <Text style={styles.actorRole}>{castMember.actorRole}</Text>
          </View>
        ))}
      </View>
    </>
  );
};

export default CastAndCrewScreen;
