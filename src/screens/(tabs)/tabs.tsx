

import { BottomTabBarButtonProps, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import HomeScreen from '../home/home_screen';
import SettingScreen from '../setting/setting_screen';
import TaskScreen from '../task_screen/task_screen';
import { Colors } from '../../utils/colors';
import { FontFamilyManager } from '../../utils/font_family_manager';
import HomeIcon from '../../componant/home_icon';
import SettingIcon from '../../componant/setting_icon';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import AddIcon from '../../componant/add_icon';
import { FAB } from '@rneui/base';
const Tab = createBottomTabNavigator(); 



const MyTabs = ()=>{
  const navigation = useNavigation<any>();
  return (
      <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: Colors.secondary,
        tabBarStyle: {
            backgroundColor: Colors.tabBar,
        
            
          
            borderTopWidth: 0,
            elevation: 0,
            shadowOpacity: 0,
        }
      }}
      >
        <Tab.Screen name="Home"
        component={HomeScreen}
        options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({focused}) => (
                <HomeIcon color={focused ? Colors.primary : Colors.secondary} />
            ),
          }}  
        
        />
         <Tab.Screen name="Add"
        component={TaskScreen}
        options={{
            tabBarButton: (props) => (
              <FAB
                         icon={<AddIcon color={Colors.background} />}
                         placement="right"
                         color={Colors.primary}
                         
                         style={{position: 'absolute',
                        right: 20,
                        left: 20,
                        bottom: 5,
                         }}
                         onPress={() => navigation.navigate('taskScreen')}
                         />
            ),
         
          }}  
        
        />
     
        <Tab.Screen name="Setting"
        component={SettingScreen}
        options={{
            tabBarLabel: 'Setting',
     
            tabBarIcon: ({focused}) => (
                <SettingIcon color={focused ? Colors.primary : Colors.secondary} />
            ),
          }}
        
        />
      </Tab.Navigator>
     
  );
}

export default MyTabs;



