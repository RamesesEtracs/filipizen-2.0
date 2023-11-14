import React from 'react';
import { Dimensions } from 'react-native';
import {StyleSheet} from 'react-native';


const {width} = Dimensions.get('window')

const dialPadSize = width * .2
const dialPadTextSize = dialPadSize * .4
import { color,font } from "../../constants"



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF8EB',
        alignItems: 'center',
        justifyContent: 'center',
    },
    dialpadtext: {
        fontSize: dialPadTextSize,
        color: 'white',
        
    },
    mpin: {
        marginTop: 30,
        fontWeight: '600',
        color: '#3D3D3D',
        fontSize: 19,
        fontFamily: 'Roboto',
    },
    image: {
        marginTop: 30,
        width: 177,
        height: 51,
    },
    forgotmpin: {
        marginTop: 35,
        color: '#3D3D3D',
        fontWeight: '400',
    },
    account: {
        color: '#3D3D3D',
        flexDirection: 'row',
        gap: 5,      
    },
    text: {
        fontWeight: '700',
        color: '#3D3D3D',
        
    },
    signup: {
        color: '#F2BB4E',
        fontWeight: '700',
    },
    numberborder: {
        flexDirection: 'row',
        width: 200,
        height: 45,
        borderWidth:1,
        borderRadius: 29,
        borderColor: color.primary,
        paddingVertical: 5,
        marginTop: 25,
        padding: 25,
        alignItems: 'center',
        flexShrink: 0,
        gap: 35,
    },
    number: {
        fontFamily: "Roboto",
        fontSize: 16,
        fontWeight: 'bold',
        color: '#3D3D3D',
        
    }

    
});
export default styles;
