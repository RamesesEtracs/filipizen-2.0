import React from 'react';
import {View, Text, TouchableOpacity, Image, TextInput, } from 'react-native';
import styles from '../registration/creatempin.style';
import ReturnButton from '../components/buttons/returnButton';


export default function CreateMpin ({onPress}) {
    const [password, onChangePassword] = React.useState('');
    return (
        <View>
        <View>
        <ReturnButton onPress={undefined} />
        <View style={styles.image}>
            <Image source={require('../../assets/images/writing.png')}
        />
        </View>
        </View>
        <View style={styles.container}>
        <View style={styles.registrationform}>
           <View>
            <Text style={styles.create}>Create MPIN</Text>
            <Text style={styles.start}>Your MPIN serves as your password. To maintain access to security, refrain
            from sharing your MPIN to anyone.</Text>
           </View>
           <View style={styles.mpinInput}>
           <View style={styles.inputContainer}>
           <TextInput
           style={styles.mpin}
           onChangeText={onChangePassword}
           value={password}
           placeholder='Enter 4-digit MPIN'
           keyboardType="numeric"
           >
           </TextInput>
           </View>
           <View style={styles.confirmInput}>
           <View style={styles.inputContainer}>
           <TextInput
           style={styles.mpin}
           onChangeText={onChangePassword}
           value={password}
           placeholder='Confirm 4-digit MPIN'
           keyboardType="numeric"
           >
           </TextInput>
           </View>
            </View>
           </View>
           <View style={styles.click}>
            <Text>By creating an account, you agree to Filipizen's
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
    )
}