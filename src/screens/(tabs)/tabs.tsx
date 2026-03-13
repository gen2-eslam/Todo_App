

import { BottomTabBarButtonProps, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../home/home_screen';
import SettingScreen from '../setting/setting_screen';
import { Colors } from '../../utils/colors';
import { FontFamilyManager } from '../../utils/font_family_manager';
import HomeIcon from '../../componant/home_icon';
import SettingIcon from '../../componant/setting_icon';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import AddIcon from '../../componant/add_icon';
const Tab = createBottomTabNavigator(); 


  const CustomTabBarButton = ({
    children,
    onPress,
  }: BottomTabBarButtonProps) => {

    return (
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.7}
      
      >
        <View
          style={[
            styles.tabButtonInner,
          ]}
        >
          
          
          {children}
        </View>
      </TouchableOpacity>
    );
  };

const MyTabs = ()=>{
  return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, color }) => {
            let iconName;

            switch (route.name) {
              case "Home":
                iconName = <HomeIcon color={color} />
                break;
              case "Setting":
                iconName = <SettingIcon color={color} />
                break;
           
              default:
                iconName = <HomeIcon color={color} />;
            }

            return (
              <View
                style={[
                  styles.iconContainer,
                ]}
              >
               {iconName}
                {focused && <View style={styles.activeDot} />}
              </View>
            );
          },
          tabBarActiveTintColor: Colors.primary,
          tabBarInactiveTintColor: Colors.secondary,
          tabBarStyle: styles.tabBar,
          tabBarLabelStyle: styles.tabBarLabel,
          tabBarItemStyle: styles.tabBarItem,
          tabBarButton: (props) => <CustomTabBarButton {...props} />,
        })}
      
      
      >
        <Tab.Screen name="Home"
        component={HomeScreen}
        options={{
            tabBarLabel: 'Home',


          }}  
        
        />
     
        <Tab.Screen name="Setting"
        component={SettingScreen}
        options={{
            tabBarLabel: 'Setting',

          }}
        
        />
      </Tab.Navigator>
     
  );
}

export default MyTabs;


const styles = StyleSheet.create({
  // Screen Styles


  // Tab Bar Styles
  tabBar: {
    position: "absolute",
    bottom: 20,
    height: 70,
    backgroundColor: Colors.tabBar,
    borderRadius: 25,
    shadowColor: Colors.primary,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.1,
    shadowRadius: 20,
    elevation: 5,
    borderTopWidth: 0,
    paddingHorizontal: 10,
    paddingTop: 10,
    paddingBottom: 10,
    marginHorizontal: "10%",
  },
  tabBarItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  tabBarLabel: {
    fontSize: 11,
    fontFamily: FontFamilyManager.LexendDecaBold,
    marginTop: 2,
  },

  tabButtonInner: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 12,
  },
  iconContainer: {
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  
  activeDot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: Colors.primary,
    marginTop: 2,
  },
});
