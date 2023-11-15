import React from 'react';
import {SafeAreaView,View, Text, TouchableOpacity, Image, TextInput,KeyboardAvoidingView, Platform } from 'react-native';
import { Ionicons, FontAwesome5, Feather } from '@expo/vector-icons';
import styles from '../registration/style';
import ReturnButton from '../components/buttons/returnButton';


export default function CreateAccount( {onPress}) {
    const [text, onChangeText] = React.useState('');
    const [number, onChangeNumber] = React.useState('');

    return(
        <SafeAreaView style={styles.container}>
            <View>
            <ReturnButton onPress={undefined} />
            </View>
        </SafeAreaView>
    );
}

