import { Text, StyleSheet, Image } from 'react-native';
import { Button } from '@rneui/themed';
import { Colors } from '../utils/colors';
import { SafeAreaView } from 'react-native-safe-area-context';
import { responsiveFontSize } from '../utils/helper/responsive_text';
import { FontFamilyManager } from '../utils/font_family_manager';
import ArrowLeft from '../componant/arrow_left';
import { useNavigation } from '@react-navigation/native';
const OnBoardingScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styleSheet.continer}>
      <Image style={styleSheet.image} source={require('../../assets/images/onBoarding.png')} />
      <Text style={styleSheet.title}>Task Management & To-Do List</Text>
      <Text style={styleSheet.description}>
        This productive tool is designed to help you better manage your task project-wise
        conveniently!
      </Text>
      <Button
        title="Get Started"
        onPress={() => {
          navigation.navigate('tabs');
        }}
        icon={<ArrowLeft color={Colors.background} />}
        iconPosition="right"
        titleStyle={styleSheet.btntxt}
        buttonStyle={styleSheet.button}
      />
    </SafeAreaView>
  );
};

export default OnBoardingScreen;

const styleSheet = StyleSheet.create({
  continer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: Colors.background,
  },
  image: {
    width: '100%',
    height: '70%',
    resizeMode: 'contain',
  },
  title: {
    fontSize: responsiveFontSize(24),
    textAlign: 'center',
    width: '70%',
    fontFamily: FontFamilyManager.LexendDecaBold,
  },
  description: {
    fontSize: responsiveFontSize(14),
    textAlign: 'center',
    color: Colors.secondary,
    width: '70%',
    marginTop: 10,
    fontFamily: FontFamilyManager.LexendDecaRegular,
  },
  button: {
    marginTop: 20,
    backgroundColor: Colors.primary,
    borderRadius: 10,
    alignSelf: 'center',
    width: '100%',
  },
  btntxt: {
    fontSize: responsiveFontSize(16),
    flex: 1,
    fontFamily: FontFamilyManager.LexendDecaBold,
  },
});
