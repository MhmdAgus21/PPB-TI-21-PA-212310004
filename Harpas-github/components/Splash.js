import { View, Text, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-web'

const Splash  = () => {
    return (
        <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#4241A4' }}>
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <Image source={require('../assets/images/LogoHarpas.png')} style={{ width: 200, height: 180 }}
                />
            </View>
            <Text style={{ color: 'white', marginBottom: 80 }}>Loading...</Text>
        </View >
        
    )
}

export default Splash