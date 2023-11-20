import { StyleSheet } from "react-native";
import { color,font } from "@constants"

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
    },
    image: {
        padding: 50,
        marginTop: 20,
        height: 280,
    },
    congratsContainer: {
        width: 385,
        height:480,
        borderRadius: 40,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        backgroundColor: '#FFF8EB',
        alignItems: 'center',
    },
    check: {
        paddingTop: 8
    },
    congratulations: {
        fontFamily: 'Roboto',
        fontSize: 26,
        fontWeight: 'bold',
        color: color.gray,
    },
    statement: {
        color: color.darkGray,
        paddingTop: 13,
        fontFamily: 'Roboto',
    },
    buttonOk:{
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
        paddingTop: 260,
    },
})

export default styles;