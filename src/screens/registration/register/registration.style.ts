import React from "react";
import { StyleSheet } from "react-native";
import { color,font } from "../../../../constants"

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
    },
    image: {
        padding: 30,
        height: 280,
    },
    registrationform: {
        width: 385,
        height:480,
        borderRadius: 40,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        backgroundColor: '#FFF8EB',
    },
    create: {
        paddingLeft: 29 ,
        fontFamily: 'Roboto',
        color: color.gray,
        fontSize: 24,
        fontWeight: 'bold',
        paddingTop: 31,
    },
    start: {
        paddingLeft: 29,
        paddingTop: 5,
        color: color.darkGray,
    },
    email: {
        flex: 1,
        marginLeft: 10,
    },
    emailInput: {
        justifyContent:'center',
        alignItems: 'center',
        paddingTop: 24,

    },
    inputContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        width: 340,
        borderRadius: 38,
        padding: 11,
        paddingHorizontal: 18,
        backgroundColor: 'white',
    },
    phoneInput: {
        justifyContent:'center',
        alignItems: 'center',
        paddingTop: 11,

    },
    click: {
        paddingLeft: 29,
        paddingTop: 27,
        color: color.darkGray,
    },
    buttonNext:{
        width: 340,
        height: 38,
        paddingVertical: 5,
        paddingHorizontal: 18,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
        borderRadius: 29,
        backgroundColor: color.primary,
    },
    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 90,
    }
})
export default styles;