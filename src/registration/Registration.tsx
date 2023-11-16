import React, {useState} from 'react';
import {SafeAreaView,View, Text, TouchableOpacity, Image, TextInput, KeyboardAvoidingView, Platform, useWindowDimensions } from 'react-native';
import { FontAwesome5, Feather } from '@expo/vector-icons';
import styles from '../registration/registration.style';
import ReturnButton from '../components/buttons/returnButton';

export default function CreateAccount ({onPress}) {
    const { height } = useWindowDimensions();
    const [email, setEmail ] = useState('');
    const [number, onChangeNumber] = React.useState('');

    const handleEmailChange = (text )=> {
    setEmail(text);
}

    return (
        <SafeAreaView style={{flex:1}}>
            <KeyboardAvoidingView 
            style={{flex: 1}}
            keyboardVerticalOffset={100}
            behavior={Platform.OS === "ios" ? "padding" : undefined}
            >  
            <View style={styles.container}>
            
            <ReturnButton onPress={undefined} />
            <View style={styles.image}>
            <Image source={require('../../assets/images/hello.png')}
            />
            </View>
            
                <View style={styles.registrationform}>
                    <Text style={styles.create}>Create an Account</Text>
                    <Text style={styles.start}>To start, please enter your email and phone number.</Text>
                    <View style={styles.emailInput}>
                    <View style={styles.inputContainer}>
                <FontAwesome5 name='user' size={16} color='#565656' />
                    <TextInput
                    style={styles.email}
                    onChangeText={handleEmailChange}
                    value={email}
                    placeholder='Email'
                    >
                    </TextInput>
               </View>
                    </View>
                    <View style={styles.phoneInput}>
                    <View style={styles.inputContainer}>
                <Feather name='phone' size={16} color='#565656' />
                    <TextInput
                    style={styles.email}
                    onChangeText={onChangeNumber}
                    value={number}
                    placeholder='PhoneNumber'
                    keyboardType='numeric'
                    >
                    </TextInput>
               </View>
               <View style={styles.click}>
                <Text>By clicking "next", we will gather network information
                    from your phone number in order to send you a One-Time Password (OTP)
.                </Text>
               </View>
               <View style={styles.buttonContainer} >
               <TouchableOpacity onPress={onPress} style={styles.buttonNext}>
                <Text style={{
                    color:'white'
                }}>Next</Text>
            </TouchableOpacity>
               </View>
               </View>
                </View>
            </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}