import React from "react";
import {
    TouchableOpacity,
    View,
    Image
} from 'react-native';
import Svg, { Path } from 'react-native-svg'
import { BottomTabBar, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
// import Menu from '../screens/Menu';
// import Delivery from '../screens/Delivery';
import  COLORS  from "../constants/theme";
import icons from "../constants/icons";
import { isIphoneX } from "react-native-iphone-x-helper";
const Tab = createBottomTabNavigator()
const TabBarCustomButton = ({ accessibilityState, children, onPress }) => {
    var isSelected = accessibilityState.selected
    if (isSelected) {
        return (
            <View style={{ flex: 1, alignItems: "center", backgroundColor: "transparent" }}>
                <View style={{ flexDirection: 'row', position: "absolute", top: 0 }}>
                    <View style={{ flex: 1, backgroundColor: "transparent" }}></View>
                    <Svg
                        width={75}
                        height={61}
                        viewBox="0 0 75 61"
                    >
                        <Path
                            d="M75.2 0v61H0V0c4.1 0 7.4 3.1 7.9 7.1C10 21.7 22.5 33 37.7 33c15.2 0 27.7-11.3 29.7-25.9.5-4 3.9-7.1 7.9-7.1h-.1z"
                            fill={COLORS.white}
                        />
                    </Svg>
                    <View style={{ flex: 1, backgroundColor: "transparent" }}></View>

                </View>
                <TouchableOpacity
                    style={{
                        top: -22.5,
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: 50,
                        height: 50,
                        borderRadius: 25,
                        backgroundColor: COLORS.white
                    }}
                    onPress={onPress}
                >
                    {children}
                </TouchableOpacity>
            </View>
        )
    } else {
        return (<View>
            <TouchableOpacity
                style={{
                    flex: 1,
                    height: 60,
                    backgroundColor: "transparent",
                    position: "absolute",
                    left: 36
                }}
                activeOpacity={1}
                onPress={onPress}
            >
                {children}
            </TouchableOpacity>
        </View>)
    }
}

const CustomTabBar = (props) => {
    if(isIphoneX) {
    return (
        <View>
            <View style={{
                position:"absolute",
                bottom:0,
             right:0,
                left:0,
                height:30,
                backgroundColor: COLORS.white
            }}></View>
            <BottomTabBar {...props.props} />
        </View>
    )
}
else {
    <BottomTabBar {...props.props} />
}
}
const Tabs = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle: {
                    position: 'absolute',
                    backgroundColor: COLORS.white,
                    borderTopWidth: 0,
                    elevation: 0,
                    height: 70,
                    left: 20,
                },
                headerShown: false ,
            }}

            tabBar={(props) => (
                <CustomTabBar
                    props={props}
                />
            )}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={
                    {
                        tabBarIcon: ({ focused }) => (
                            <Image
                                source={icons.cutlery}
                                resizeMode="contain"
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? COLORS.primary : COLORS.secondary
                                }}
                            />
                        ),
                        tabBarButton: (props) => {
                            return <TabBarCustomButton
                                {...props}
                            />
                        }
                    }
                }
            />
            <Tab.Screen
                name="search"
                component={Home}
                options={
                    {
                        tabBarIcon: ({ focused }) => (
                            <Image
                                source={icons.search}
                                resizeMode="contain"
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? COLORS.primary : COLORS.secondary
                                }}
                            />
                        ),
                        tabBarButton: (props) => {
                            return <TabBarCustomButton
                                {...props}
                            />
                        }
                    }
                }
            />
            <Tab.Screen
                name="Like"
                component={Home}
                options={
                    {
                        tabBarIcon: ({ focused }) => (
                            <Image
                                source={icons.like}
                                resizeMode="contain"
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? COLORS.primary : COLORS.secondary
                                }}
                            />
                        ),

                        tabBarButton: (props) => {
                            return <TabBarCustomButton
                                {...props}
                            />
                        }
                    }
                }
            />
            <Tab.Screen
                name="user"
                component={Home}
                options={
                    {
                        tabBarIcon: ({ focused }) => (
                            <Image
                                source={icons.user}
                                resizeMode="contain"
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? COLORS.primary : COLORS.secondary
                                }}
                            />
                        )
                        ,
                        tabBarButton: (props) => {
                            return <TabBarCustomButton
                                {...props}
                            />
                        }
                    }
                }
            />
        </Tab.Navigator>
    )
}

export default Tabs
