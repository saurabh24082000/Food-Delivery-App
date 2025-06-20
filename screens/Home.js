import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native';
import { COLORS, FONTS, SIZES } from "../constants/theme";
import icons from "../constants/icons";
import photos from "../constants/images"
import { SafeAreaView } from 'react-native-safe-area-context'
export default function Home({ navigation }) {

    // Dummy Datas

    const initialCurrentLocation = {
        streetName: "Kuching",
        gps: {
            latitude: 1.5496614931250685,
            longitude: 110.36381866919922
        }
    }

    const categoryData = [
        {
            id: 1,
            name: "Rice",
            icon: icons.rice_bowl,
        },
        {
            id: 2,
            name: "Noodles",
            icon: icons.noodle,
        },
        {
            id: 3,
            name: "Hot Dogs",
            icon: icons.hotdog,
        },
        {
            id: 4,
            name: "Salads",
            icon: icons.salad,
        },
        {
            id: 5,
            name: "Burgers",
            icon: icons.hamburger,
        },
        {
            id: 6,
            name: "Pizza",
            icon: icons.pizza,
        },
        {
            id: 7,
            name: "Snacks",
            icon: icons.fries,
        },
        {
            id: 8,
            name: "Sushi",
            icon: icons.sushi,
        },
        {
            id: 9,
            name: "Desserts",
            icon: icons.donut,
        },
        {
            id: 10,
            name: "Drinks",
            icon: icons.drink,
        },

    ]

    // price rating
    const affordable = 1
    const fairPrice = 2
    const expensive = 3

    const restaurantData = [
        {
            id: 1,
            name: "ByProgrammers Burger",
            rating: 4.8,
            categories: [5, 7],
            priceRating: affordable,
            photo: photos.burger_restaurant_1,
            duration: "30 - 45 min",
            location: {
                latitude: 1.5347282806345879,
                longitude: 110.35632207358996,
            },
            courier: {
                avatar: photos.avatar_1,
                name: "Amy"
            },
            menu: [
                {
                    menuId: 1,
                    name: "Crispy Chicken Burger",
                    photo: photos.crispy_chicken_burger,
                    description: "Burger with crispy chicken, cheese and lettuce",
                    calories: 200,
                    price: 10
                },
                {
                    menuId: 2,
                    name: "Crispy Chicken Burger with Honey Mustard",
                    photo: photos.honey_mustard_chicken_burger,
                    description: "Crispy Chicken Burger with Honey Mustard Coleslaw",
                    calories: 250,
                    price: 15
                },
                {
                    menuId: 3,
                    name: "Crispy Baked French Fries",
                    photo: photos.baked_fries,
                    description: "Crispy Baked French Fries",
                    calories: 194,
                    price: 8
                }
            ]
        },
        {
            id: 2,
            name: "ByProgrammers Pizza",
            rating: 4.8,
            categories: [2, 4, 6],
            priceRating: expensive,
            photo: photos.pizza_restaurant,
            duration: "15 - 20 min",
            location: {
                latitude: 1.556306570595712,
                longitude: 110.35504616746915,
            },
            courier: {
                avatar: photos.avatar_2,
                name: "Jackson"
            },
            menu: [
                {
                    menuId: 4,
                    name: "Hawaiian Pizza",
                    photo: photos.hawaiian_pizza,
                    description: "Canadian bacon, homemade pizza crust, pizza sauce",
                    calories: 250,
                    price: 15
                },
                {
                    menuId: 5,
                    name: "Tomato & Basil Pizza",
                    photo: photos.pizza,
                    description: "Fresh tomatoes, aromatic basil pesto and melted bocconcini",
                    calories: 250,
                    price: 20
                },
                {
                    menuId: 6,
                    name: "Tomato Pasta",
                    photo: photos.tomato_pasta,
                    description: "Pasta with fresh tomatoes",
                    calories: 100,
                    price: 10
                },
                {
                    menuId: 7,
                    name: "Mediterranean Chopped Salad ",
                    photo: photos.salad,
                    description: "Finely chopped lettuce, tomatoes, cucumbers",
                    calories: 100,
                    price: 10
                }
            ]
        },
        {
            id: 3,
            name: "ByProgrammers Hotdogs",
            rating: 4.8,
            categories: [3],
            priceRating: expensive,
            photo: photos.hot_dog_restaurant,
            duration: "20 - 25 min",
            location: {
                latitude: 1.5238753474714375,
                longitude: 110.34261833833622,
            },
            courier: {
                avatar: photos.avatar_3,
                name: "James"
            },
            menu: [
                {
                    menuId: 8,
                    name: "Chicago Style Hot Dog",
                    photo: photos.chicago_hot_dog,
                    description: "Fresh tomatoes, all beef hot dogs",
                    calories: 100,
                    price: 20
                }
            ]
        },
        {
            id: 4,
            name: "ByProgrammers Sushi",
            rating: 4.8,
            categories: [8],
            priceRating: expensive,
            photo: photos.japanese_restaurant,
            duration: "10 - 15 min",
            location: {
                latitude: 1.5578068150528928,
                longitude: 110.35482523764315,
            },
            courier: {
                avatar: photos.avatar_4,
                name: "Ahmad"
            },
            menu: [
                {
                    menuId: 9,
                    name: "Sushi sets",
                    photo: photos.sushi,
                    description: "Fresh salmon, sushi rice, fresh juicy avocado",
                    calories: 100,
                    price: 50
                }
            ]
        },
        {
            id: 5,
            name: "ByProgrammers Cuisine",
            rating: 4.8,
            categories: [1, 2],
            priceRating: affordable,
            photo: photos.noodle_shop,
            duration: "15 - 20 min",
            location: {
                latitude: 1.558050496260768,
                longitude: 110.34743759630511,
            },
            courier: {
                avatar: photos.avatar_4,
                name: "Muthu"
            },
            menu: [
                {
                    menuId: 10,
                    name: "Kolo Mee",
                    photo: photos.kolo_mee,
                    description: "Noodles with char siu",
                    calories: 200,
                    price: 5
                },
                {
                    menuId: 11,
                    name: "Sarawak Laksa",
                    photo: photos.sarawak_laksa,
                    description: "Vermicelli noodles, cooked prawns",
                    calories: 300,
                    price: 8
                },
                {
                    menuId: 12,
                    name: "Nasi Lemak",
                    photo: photos.nasi_lemak,
                    description: "A traditional Malay rice dish",
                    calories: 300,
                    price: 8
                },
                {
                    menuId: 13,
                    name: "Nasi Briyani with Mutton",
                    photo: photos.nasi_briyani_mutton,
                    description: "A traditional Indian rice dish with mutton",
                    calories: 300,
                    price: 8
                },

            ]
        },
        {

            id: 6,
            name: "ByProgrammers Dessets",
            rating: 4.9,
            categories: [9, 10],
            priceRating: affordable,
            photo: photos.kek_lapis_shop,
            duration: "35 - 40 min",
            location: {
                latitude: 1.5573478487252896,
                longitude: 110.35568783282145,
            },
            courier: {
                avatar: photos.avatar_1,
                name: "Jessie"
            },
            menu: [
                {
                    menuId: 12,
                    name: "Teh C Peng",
                    photo: photos.teh_c_peng,
                    description: "Three Layer Teh C Peng",
                    calories: 100,
                    price: 2
                },
                {
                    menuId: 13,
                    name: "ABC Ice Kacang",
                    photo: photos.ice_kacang,
                    description: "Shaved Ice with red beans",
                    calories: 100,
                    price: 3
                },
                {
                    menuId: 14,
                    name: "Kek Lapis",
                    photo: photos.kek_lapis,
                    description: "Layer cakes",
                    calories: 300,
                    price: 20
                }
            ]

        }


    ]

    const [categories, setCategories] = React.useState(categoryData)
    const [selectedCategory, setSelectedCategory] = React.useState(categoryData[0])
    const [restaurants, setRestaurants] = React.useState(restaurantData)
    const [currentLocation, setCurrentLocation] = React.useState(initialCurrentLocation)


       function getCategoryNameById(categoryId){
        let category = categories.filter((a) => a.id  == categoryId)
        if(category.length >0) {
            return category[0].name
        }
        return ""
       }
    function renderHeader() {
        return (
            <View style={{ flexDirection: "row", height: 50, color: "black" }}>
                <TouchableOpacity style={{ width: 50, paddingLeft: SIZES.padding * 2, justifyContent: "center" }}>
                    <Image
                        source={icons.nearby}
                        resizeMode="contain"
                        style={{
                            height: 30,
                            width: 30
                        }}
                    />
                </TouchableOpacity>
                <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                    <View style={{
                        width: "70%",
                        height: "100%",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: COLORS.lightGray3,
                        borderRadius: SIZES.radius
                    }}>
                        <Text style={{ ...FONTS.h3, fontWeight: "bold" }}>
                            {currentLocation.streetName}
                        </Text>
                    </View>
                </View>
                <TouchableOpacity

                    style={{
                        width: 50,
                        paddingRight: SIZES.padding * 2,
                        justifyContent: "center"
                    }}>
                    <Image
                        source={icons.basket}
                        resizeMode="contain"
                        style={{
                            width: 30,
                            height: 30
                        }}
                    />
                </TouchableOpacity>
            </View>
        )
    }

    function renderMainCategories() {
        // const renderItem = () => {
        //     return(
        //         <TouchableOpacity
        //         style={{
        //             padding:SIZES.padding,
        //             paddingBottom:SIZES.padding*2,
        //             backgroundColor:COLORS.primary,
        //             borderRadius:SIZES.radius,
        //             alignItems:"center",
        //             marginRight:SIZES.padding,
        //             ...styles.shadow
        //         }}
        //         >
        //             <View style={{
        //                 width:50,
        //                 height:50,
        //                 borderRadius:25,
        //                 alignItems:"center",
        //                 justifyContent:"center",
        //                 backgroundColor:COLORS.white
        //             }}>
        //          <Image 
        //          source={restaurants.icon}
        //          resizeMode="contain"
        //          style={{
        //             width:30,
        //             height:30
        //          }}
        //          />
        //             </View>
        //         </TouchableOpacity>
        //     )
        // }
        function onSelectCategory(item) {
            const restaurantList = restaurants.filter((a) => a.categories.includes(item.id))
            setRestaurants(restaurantList)
            console.log(selectedCategory, "AADD")
            setSelectedCategory(item)
        }
        const renderItem = ({ item, index }) => {
            return (
                <TouchableOpacity
                    key={item.id || index}
                    style={{
                        padding: SIZES.padding,
                        paddingBottom: SIZES.padding * 2,
                        backgroundColor: (selectedCategory?.id == item.id) ? COLORS.primary : COLORS.white,
                        borderRadius: SIZES.radius,
                        alignItems: "center",
                        marginRight: SIZES.padding,
                        ...styles.shadow,
                    }}
                    onPress={() => onSelectCategory(item)}
                >
                    <View
                        style={{
                            width: 50,
                            height: 50,
                            borderRadius: 25,
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: (selectedCategory?.id == item.id) ? COLORS.white : COLORS.lightGray,
                        }}
                    >
                        <Image
                            source={item.icon}
                            resizeMode="contain"
                            style={{
                                width: 30,
                                height: 30,
                            }}
                        />
                    </View>
                    <Text style={{
                        color: (selectedCategory?.id == item.id) ? COLORS.white : COLORS.black,
                        paddingTop: SIZES.padding,
                        ...FONTS.body5
                    }}>
                        {item.name}
                    </Text>
                </TouchableOpacity>
            );
        };
        return (
            <View style={{ padding: SIZES.padding * 2 }}>
                <Text style={{ ...FONTS.h1, fontWeight: "bold" }}>Main</Text>
                <Text style={{ ...FONTS.h1, fontWeight: "bold" }}>Categories</Text>
                <FlatList
                    data={categories}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item, index) => item.id?.toString() || index.toString()}
                    renderItem={renderItem}
                    contentContainerStyle={{ paddingVertical: SIZES.padding * 2 }}
                />
            </View>
        )
    }

    function renderedRestarantList() {
        const renderItem = ({ item }) => {
            return (
                <TouchableOpacity
                    style={{ marginBottom: SIZES.padding * 2 }}
                    onPress={() => navigation.navigate("OrderDelivery", {
                    item,
                    currentLocation
                })}
                >
                    <View style={{
                        marginBottom: SIZES.padding
                    }}>
                        <Image
                            source={item.photo}
                            resizeMode="cover"
                            style={{
                                width: "100%",
                                height: 200,
                                borderRadius: SIZES.radius
                            }}
                        />
                        <View style={{
                            position: "absolute",
                            bottom: 0,
                            height: 50,
                            width: SIZES.width * 0.3,
                            backgroundColor: COLORS.white,
                            borderTopRightRadius: SIZES.radius,
                            borderBottomLeftRadius: SIZES.radius,
                            alignItems: "center",
                            justifyContent: "center",
                            ...styles.shadow
                        }}>
                            <Text style={{ ...FONTS.h4 }}>{item.duration}</Text>
                        </View>

                    </View>
                    <Text style={{ ...FONTS.body2 }}>{item.name}</Text>
                    <View style={{
                        marginTop: SIZES.padding,
                        flexDirection: "row"
                    }}>
                        <Image
                            source={icons.star}
                            style={{
                                height: 20,
                                width: 20,
                                tintColor: COLORS.primary,
                                marginRight: 10
                            }}
                        />
                        <Text style={{ ...FONTS.body3 }}>{item.rating}</Text>
                        <View
                            style={{
                                flexDirection: 'row',
                                marginLeft: 10
                            }}
                        >
                            {item.categories.map((categoryId) => {
                                return (
                                    <View style={{ flexDirection: "row" }} key={categoryId}>
                      <Text style={{...FONTS.body3}}>{getCategoryNameById(categoryId)}</Text>
                      <Text style={{...FONTS.h3,color:COLORS.darkgray}}>.</Text>
                                    </View>
                                )
                            })}
                            {
                                [1,2,3].map((priceRating)=> {
                             return <Text
                             key={priceRating}
                             style={{
                                ...FONTS.body3,
                                color:(priceRating <= item.priceRating) ? COLORS.black :COLORS.darkgray
                             }}>
                                $
                             </Text>
                                })
                            }
                        </View>
                    </View>
                </TouchableOpacity>
            )
        }
        return (
            <FlatList
                data={restaurants}
                keyExtractor={item => `${item.id}`}
                renderItem={renderItem}
                contentContainerStyle={{
                    paddingHorizontal: SIZES.padding * 2,
                    paddingBottom: 30
                }}
            />
        )
    }

    return (

        <SafeAreaView style={styles.container}>
            {renderHeader()}
            {renderMainCategories()}
            {renderedRestarantList()}
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.lightGray2
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 1
    }
})