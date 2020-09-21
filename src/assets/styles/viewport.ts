import Constants from 'expo-constants';
import { Platform, StyleSheet } from 'react-native';
import { OS } from '../../enums/os.enum';

export default StyleSheet.create({
    safeAreaView: {
        flex: 1,
        paddingTop: (Platform.OS === OS.ANDROID ? Constants.statusBarHeight : 0),
    },
});
