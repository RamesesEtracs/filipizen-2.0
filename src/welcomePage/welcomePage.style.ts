import { StyleSheet } from "react-native";

import { font, textColor } from "../../constants";


const styles = StyleSheet.create({
    
    upperScreenContainer: {
        alignItems: 'center',
    },

    bigCircleSVGContainer: {
        bottom: 125,
        right: 35
    },

    smallCircleSVGContainer: {
        bottom: 90,
        left: 125,
    },

    imageParentContainer: {
        marginTop: 50,
    },

    imageContainer: {
        bottom: 75,
    },

    imageLayout: {
        height: 225,
        width: 280,
    },

    textHeader: {
        fontSize: 35,
        fontFamily: font.bold,
        color: textColor.lightBlack
    },

    lowerScreenContainer: {
        marginTop: 50
    },

    contentContainer: {
        alignItems: "center",
    },

    textContainer: {
        position: 'absolute',
        top: 175,
        alignItems: 'center',
        marginTop: 15
    },

    textBody: {
        fontSize: 20,
        fontFamily: font.regular,
        color: textColor.darkGray,
        width: 275,
        textAlign: "center",
        padding: 8
    
    },

    iconContainer: {
        marginTop: 240,
        left: 65,
    
    },

})

export default styles;