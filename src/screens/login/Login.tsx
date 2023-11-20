import { View, Text, FlatList, TouchableOpacity, Dimensions, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Ionicons, Octicons} from '@expo/vector-icons'
import styles from  "./style";
import React, { useState } from "react";
import { images } from "@constants";


const {width} = Dimensions.get('window')

const dialPadSize = width * .2
const dialPadTextSize = dialPadSize * .4

const _spacing = 18

const pinLength = 4;
const pinContainerSize = width / 2;
const pinMaxSize = pinContainerSize / pinLength ;
const pinSpacing = 8;
const pinSize = pinMaxSize - pinSpacing * 4;

const dialPad = [1,2,3,4,5,6,7,8,9,'',0, 'del'];


function DialPad({onPress} :{onPress: (item: typeof dialPad[number]) => void}) {
    return <FlatList
    numColumns={3}
    data={dialPad}
    style={{flexGrow: 0}}
    scrollEnabled={false}
    columnWrapperStyle= {{gap: _spacing}}
    contentContainerStyle= {{gap: _spacing}}
    keyExtractor={(_, index ) => index.toString() }
    renderItem={({ item }) => {
        return <TouchableOpacity
        disabled= {item === ''}
            onPress={() => {
                onPress(item)
            }}
            >
                <View style={{
                    width: dialPadSize,
                    height: dialPadSize,
                    borderRadius:dialPadSize,
                    borderWidth: typeof item !== 'number' ? 0: 1,
                    borderColor: 'transparent',
                    alignItems: 'center',
                    justifyContent:'center',
                    backgroundColor: typeof item !== 'number' ? 'transparent': '#F2BB4E',
                    
                
                }}
                >
                {item === 'del'? <Ionicons
                    name="backspace-outline"
                    color={"#3D3D3D"}
                    size={dialPadTextSize}
                />    
                :
                <Text style={styles.dialpadtext}>{item}</Text>}

                </View>
                
            </TouchableOpacity>

    }} 
    />
}

export default function Login() {
    const [code, setCode] = useState<number[]>([]);
    console.log(code)
    return (
        <View style={styles.container}>
            <Image source={images.logo}
            style={styles.image}
            />
            
            <Text style={styles.mpin}>Enter your MPIN</Text>
            <View style={{
        
                flexDirection: 'row',
                gap: pinSpacing * 2,
                marginBottom: _spacing * 2,
                //backgroundColor: 'green',
                height: pinSize * 2,
                alignItems: 'flex-end',


            }}>            
                {[...Array(pinLength).keys()].map(i => {
                    const isSelected = !!code[i]
                    return <View
                        style={{
                            width: pinSize,
                            height: isSelected ? pinSize : 17,
                            borderRadius: pinSize,
                            backgroundColor: isSelected ? '#F2BB4E' : 'transparent',
                            borderColor: '#F2BB4E',
                            borderWidth: 1,
                        }}
                    />
                })}
            </View>
            
            <DialPad onPress={(item) => {
                if (item === 'del') {
                    setCode(prevCode => prevCode.slice(0, prevCode.length - 1))
                } else if (typeof item === 'number') {
                    if (code.length === pinLength) return
                    setCode(prevCode => [...prevCode, item])
                }
            }} 
            
            />
            <Text style={styles.forgotmpin}>Forgot MPIN?</Text>
            <View style={styles.account}>
            <Text style={styles.text}>Don't have an account?
                </Text>
                <Text style={styles.signup}>Sign Up</Text>
            </View>
        <StatusBar style="auto" />
        </View>
    );
}