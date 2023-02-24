import Storage from 'react-native-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LocalStorage = new Storage({
    size: 1000,
    storageBackend: AsyncStorage,
});

const SESSION_STORAGE_KEY = 'movie-buff-project-user-session';

export const getSessionInfoFromLocal = async () => {
    
    let session = await LocalStorage.load({
        key: SESSION_STORAGE_KEY,
    }).catch((err) => {
        console.log(err.message);
    });

    return session;
}

export const removeSessionInfoFromLocal = async () => {
    return await LocalStorage.remove({
        key: SESSION_STORAGE_KEY,
    });
}

export const setSessionInfoInLocal = async (user) => {
    LocalStorage.save({
        key: SESSION_STORAGE_KEY,
        data: user,
    });
}
