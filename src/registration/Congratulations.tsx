import {SafeAreaView, View, Text, TouchableOpacity, Image } from 'react-native';
import styles from '../registration/congratulations.style';
import ReturnButton from '@components/buttons/returnButton';

export default function Congratulations ({onPress}) {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.image}>
            <Image source={require('../../assets/images/congrats.png')} />
            </View>
            <View style={styles.congratsContainer}>
                <View style={styles.check}>
                <Image source={require('../../assets/images/check.png')} />
                </View>
                <Text style={styles.congratulations}>Congratulations!</Text>
                <Text style={styles.statement}>Your Filipizen account has been created successfully.</Text>
                <View style={styles.buttonContainer} >
               <TouchableOpacity onPress={onPress} style={styles.buttonOk}>
                <Text style={{
                    color:'white'
                }}>Next</Text>
            </TouchableOpacity>
               </View>   
            </View>
        </SafeAreaView>
    )
}