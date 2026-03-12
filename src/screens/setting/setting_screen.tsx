import {View } from "react-native";
import {Text ,StyleSheet,}  from 'react-native';

const SettingScreen = () =>{

    return(
        <View style ={style.container}>
           <Text>  SettingScreen </Text> 
            
            </View>
    )
}


const style = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center"
    }
});


export default SettingScreen;