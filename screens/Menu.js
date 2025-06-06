// import React,{useState,useEffect} from "react";
// import {
//     View,
//     Text,
//     Image,
//     TouchableOpacity
// } from "react-native";
// import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
// import MapViewDirections from "react-native-maps-directions";

// import { COLORS, FONTS,  SIZES } from "../constants/theme"
// import icons from "../constants/icons";

// const GOOGLE_API_KEY = "AIzaSyAqNIsWwmxw_6_gGfZvh4OT1V09ick5s78";
// const Menu = ({ route, navigation }) => {

//     const mapView = React.useRef()

//     const [restaurant, setRestaurant] = useState(null)
//     const [streetName, setStreetName] = useState("")
//     const [fromLocation, setFromLocation] = useState(null)
//     const [toLocation, setToLocation] = useState(null)
//     const [region, setRegion] = useState(null)

//     const [duration, setDuration] = useState(0)
//     const [isReady, setIsReady] = useState(false)
//     const [angle, setAngle] = useState(0)

//    useEffect(() => {
//     if (route.params) {
//         let { restaurant, currentLocation } = route.params;

//         if (restaurant && currentLocation) {
//             let fromLoc = currentLocation.gps || { latitude: 0, longitude: 0 };
//             let toLoc = restaurant.location || { latitude: 0, longitude: 0 };
//             let street = currentLocation.streetName || "Unknown Street";

//             let mapRegion = {
//                 latitude: (fromLoc.latitude + toLoc.latitude) / 2,
//                 longitude: (fromLoc.longitude + toLoc.longitude) / 2,
//                 latitudeDelta: Math.abs(fromLoc.latitude - toLoc.latitude) * 2 || 0.0922,
//                 longitudeDelta: Math.abs(fromLoc.longitude - toLoc.longitude) * 2 || 0.0421,
//             };

//             setRestaurant(restaurant);
//             setStreetName(street);
//             setFromLocation(fromLoc);
//             setToLocation(toLoc);
//             setRegion(mapRegion);
//         } else {
//             console.warn("Restaurant or current location data is missing.");
//         }
//     }
// }, []);

//     // useEffect(() => {
//     //     if (route.params) {
//     //         let { restaurant, currentLocation } = route.params;

//     //         if (restaurant && currentLocation && currentLocation.gps && restaurant.location) {
//     //             let fromLoc = currentLocation.gps
//     //             let toLoc = restaurant.location
//     //             let street = currentLocation.streetName || "Unknown street"

//     //             let mapRegion = {
//     //                 latitude: 18.32568,
//     //                 longitude: 32.56894,
//     //                 latitudeDelta: Math.abs(fromLoc.latitude - toLoc.latitude) * 2,
//     //                 longitudeDelta: Math.abs(fromLoc.longitude - toLoc.longitude) * 2
//     //             }

//     //             setRestaurant(restaurant)
//     //             setStreetName(street)
//     //             setFromLocation(fromLoc)
//     //             setToLocation(toLoc)
//     //             setRegion(mapRegion)
//     //         }
//     //     } else {
//     //         const defaultFromLoc = { latitude: 37.78825, longitude: -122.4324 }
//     //         const defaultToLoc = { latitude: 37.7749, longitude: -122.4194 }
            
//     //         setFromLocation(defaultFromLoc)
//     //         setToLocation(defaultToLoc)
//     //         setRegion({
//     //             latitude: 37.78137,
//     //             longitude: -122.4259,
//     //             latitudeDelta: 0.0922,
//     //             longitudeDelta: 0.0421
//     //         })
//     //         setStreetName("Default Street")
//     //         setRestaurant({
//     //             name: "Test Restaurant",
//     //             courier: {
//     //                 avatar: icons.avatar_1,
//     //                 name: "Test Courier"
//     //             },
//     //             rating: 4.8
//     //         })
//     //     }
//     // }, [])
// // useEffect(() => {
// //     if (route.params) {
// //         let { restaurant, currentLocation } = route.params;

// //         if (restaurant && currentLocation && currentLocation.gps && restaurant.location) {
// //             let fromLoc = currentLocation.gps;
// //             let toLoc = restaurant.location;
// //             let street = currentLocation.streetName || "Unknown street";

// //             let mapRegion = {
// //                 latitude: fromLoc.latitude || 0,
// //                 longitude: fromLoc.longitude || 0,
// //                 latitudeDelta: Math.abs(fromLoc.latitude - toLoc.latitude) * 2 || 0.0922,
// //                 longitudeDelta: Math.abs(fromLoc.longitude - toLoc.longitude) * 2 || 0.0421
// //             };

// //             setRestaurant(restaurant);
// //             setStreetName(street);
// //             setFromLocation(fromLoc);
// //             setToLocation(toLoc);
// //             setRegion(mapRegion);
// //         } else {
// //             console.warn("Invalid location data");
// //         }
// //     }
// // }, []);

//     function calculateAngle(coordinates) {
//         let startLat = coordinates[0]["latitude"]
//         let startLng = coordinates[0]["longitude"]
//         let endLat = coordinates[1]["latitude"]
//         let endLng = coordinates[1]["longitude"]
//         let dx = endLat - startLat
//         let dy = endLng - startLng

//         return Math.atan2(dy, dx) * 180 / Math.PI
//     }

//     function zoomIn() {
//         let newRegion = {
//             latitude: region.latitude,
//             longitude: region.longitude,
//             latitudeDelta: region.latitudeDelta / 2,
//             longitudeDelta: region.longitudeDelta / 2
//         }

//         setRegion(newRegion)
//         mapView.current.animateToRegion(newRegion, 200)
//     }

//     function zoomOut() {
//         let newRegion = {
//             latitude: region.latitude,
//             longitude: region.longitude,
//             latitudeDelta: region.latitudeDelta * 2,
//             longitudeDelta: region.longitudeDelta * 2
//         }

//         setRegion(newRegion)
//         mapView.current.animateToRegion(newRegion, 200)
//     }

//     function renderMap() {
//         const destinationMarker = () => (
//             <Marker
//                 coordinate={toLocation}
//             >
//                 <View
//                     style={{
//                         height: 40,
//                         width: 40,
//                         borderRadius: 20,
//                         alignItems: 'center',
//                         justifyContent: 'center',
//                         backgroundColor: COLORS.white
//                     }}
//                 >
//                     <View
//                         style={{
//                             height: 30,
//                             width: 30,
//                             borderRadius: 15,
//                             alignItems: 'center',
//                             justifyContent: 'center',
//                             backgroundColor: COLORS.primary
//                         }}
//                     >
//                         <Image
//                             source={icons.pin}
//                             style={{
//                                 width: 25,
//                                 height: 25,
//                                 tintColor: COLORS.white
//                             }}
//                         />
//                     </View>
//                 </View>
//             </Marker>
//         )

//         const carIcon = () => (
//             <Marker
//                 coordinate={fromLocation}
//                 anchor={{ x: 0.5, y: 0.5 }}
//                 flat={true}
//                 rotation={angle}
//             >
//                 <Image
//                     source={icons.car}
//                     style={{
//                         width: 40,
//                         height: 40
//                     }}
//                 />
//             </Marker>
//         )

//         return (
         
//             <View style={{ flex: 1 }}>
//                 <MapView
//                     ref={mapView}
//                     provider={PROVIDER_GOOGLE}
//                     initialRegion={region}
//                     style={{ flex: 1 }}
//                 >
//                   <MapViewDirections
//     origin={
//         fromLocation?.latitude && fromLocation?.longitude
//             ? fromLocation
//             : { latitude: 0, longitude: 0 }
//     }
//     destination={
//         toLocation?.latitude && toLocation?.longitude
//             ? toLocation
//             : { latitude: 0, longitude: 0 }
//     }
//     apikey={GOOGLE_API_KEY}
//     strokeWidth={5}
//     strokeColor={COLORS.primary}
//     optimizeWaypoints={true}
//     onReady={result => {
//         setDuration(result.duration);

//         if (!isReady && result.coordinates.length > 0) {
//             mapView.current?.fitToCoordinates(result.coordinates, {
//                 edgePadding: {
//                     right: (SIZES.width / 20),
//                     bottom: (SIZES.height / 4),
//                     left: (SIZES.width / 20),
//                     top: (SIZES.height / 8),
//                 },
//             });

//             let nextLoc = {
//                 latitude: result.coordinates[0]?.latitude || 0,
//                 longitude: result.coordinates[0]?.longitude || 0,
//             };

//             if (result.coordinates.length >= 2) {
//                 let angle = calculateAngle(result.coordinates);
//                 setAngle(angle);
//             }

//             setFromLocation(nextLoc);
//             setIsReady(true);
//         }
//     }}
// />


//                     {/* {fromLocation && toLocation && (
//     <MapViewDirections
//         origin={fromLocation}
//         destination={toLocation}
//         apikey={GOOGLE_API_KEY}
//         strokeWidth={5}
//         strokeColor={COLORS.primary}
//         optimizeWaypoints={true}
//         onReady={result => {
//             setDuration(result.duration);

//             if (!isReady) {
//                 mapView.current.fitToCoordinates(result.coordinates, {
//                     edgePadding: {
//                         right: (SIZES.width / 20),
//                         bottom: (SIZES.height / 4),
//                         left: (SIZES.width / 20),
//                         top: (SIZES.height / 8)
//                     }
//                 });

//                 if (result.coordinates.length > 0) {
//                     let nextLoc = {
//                         latitude: result.coordinates[0]?.latitude || 0,
//                         longitude: result.coordinates[0]?.longitude || 0,
//                     };

//                     if (result.coordinates.length >= 2) {
//                         let angle = calculateAngle(result.coordinates);
//                         setAngle(angle);
//                     }

//                     setFromLocation(nextLoc);
//                     setIsReady(true);
//                 }
//             }
//         }} */}
//         {/* {fromLocation && toLocation && fromLocation.latitude && fromLocation.longitude && toLocation.latitude && toLocation.longitude && (

//     <MapViewDirections

//         origin={fromLocation}

//         destination={toLocation}

//         apikey={GOOGLE_API_KEY}

//         strokeWidth={5}

//         strokeColor={COLORS.primary}

//         optimizeWaypoints={true}

//         onReady={result => {

//             setDuration(result.duration);



//             if (!isReady) {

//                 mapView.current.fitToCoordinates(result.coordinates, {

//                     edgePadding: {

//                         right: (SIZES.width / 20),

//                         bottom: (SIZES.height / 4),

//                         left: (SIZES.width / 20),

//                         top: (SIZES.height / 8)

//                     }

//                 });



//                 if (result.coordinates.length > 0) {

//                     let nextLoc = {

//                         latitude: result.coordinates[0]?.latitude || 0,

//                         longitude: result.coordinates[0]?.longitude || 0,

//                     };



//                     if (result.coordinates.length >= 2) {

//                         let angle = calculateAngle(result.coordinates);

//                         setAngle(angle);

//                     }



//                     setFromLocation(nextLoc);

//                     setIsReady(true);

//                 }

//             }

//         }}
//     />
// )} */}
//                     {destinationMarker()}
//                     {fromLocation? carIcon() : null}
//                 </MapView>
//             </View>
//         )
//     }

//     function renderDestinationHeader() {
//         return (
//             <View
//                 style={{
//                     position: 'absolute',
//                     top: 50,
//                     left: 0,
//                     right: 0,
//                     height: 50,
//                     alignItems: 'center',
//                     justifyContent: 'center'
//                 }}
//             >
//                 <View
//                     style={{
//                         flexDirection: 'row',
//                         alignItems: 'center',
//                         width: SIZES.width * 0.9,
//                         paddingVertical: SIZES.padding,
//                         paddingHorizontal: SIZES.padding * 2,
//                         borderRadius: SIZES.radius,
//                         backgroundColor: COLORS.white
//                     }}
//                 >
//                     <Image
//                         source={icons.red_pin}
//                         style={{
//                             width: 30,
//                             height: 30,
//                             marginRight: SIZES.padding
//                         }}
//                     />

//                     <View style={{ flex: 1 }}>
//                         <Text style={{ ...FONTS.body3 }}>{streetName}</Text>
//                     </View>

//                     <Text style={{ ...FONTS.body3 }}>{Math.ceil(duration)} mins</Text>
//                 </View>
//             </View>
//         )
//     }

//     function renderDeliveryInfo() {
//         return (
//             <View
//                 style={{
//                     position: 'absolute',
//                     bottom: 50,
//                     left: 0,
//                     right: 0,
//                     alignItems: 'center',
//                     justifyContent: 'center'
//                 }}
//             >
//                 <View
//                     style={{
//                         width: SIZES.width * 0.9,
//                         paddingVertical: SIZES.padding * 3,
//                         paddingHorizontal: SIZES.padding * 2,
//                         borderRadius: SIZES.radius,
//                         backgroundColor: COLORS.white
//                     }}
//                 >
//                     <View style={{ flexDirection: 'row', alignItems: 'center' }}>
//                         {/* Avatar */}
//                         <Image
//                             source={restaurant?.courier.avatar}
//                             style={{
//                                 width: 50,
//                                 height: 50,
//                                 borderRadius: 25
//                             }}
//                         />

//                         <View style={{ flex: 1, marginLeft: SIZES.padding }}>
//                             {/* Name & Rating */}
//                             <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
//                                 <Text style={{ ...FONTS.h4 }}>{restaurant?.courier.name}</Text>
//                                 <View style={{ flexDirection: 'row' }}>
//                                     <Image
//                                         source={icons.star}
//                                         style={{ width: 18, height: 18, tintColor: COLORS.primary, marginRight: SIZES.padding }}
//                                     />
//                                     <Text style={{ ...FONTS.body3 }}>{restaurant?.rating}</Text>
//                                 </View>
//                             </View>

//                             {/* Restaurant */}
//                             <Text style={{ color: COLORS.darkgray, ...FONTS.body4 }}>{restaurant?.name}</Text>
//                         </View>
//                     </View>

//                     {/* Buttons */}
//                     <View
//                         style={{
//                             flexDirection: 'row',
//                             marginTop: SIZES.padding * 2,
//                             justifyContent: 'space-between'
//                         }}
//                     >
//                         <TouchableOpacity
//                             style={{
//                                 flex: 1,
//                                 height: 50,
//                                 marginRight: 10,
//                                 backgroundColor: COLORS.primary,
//                                 alignItems: 'center',
//                                 justifyContent: 'center',
//                                 borderRadius: 10
//                             }}
//                             onPress={() => navigation.navigate("Home")}
//                         >
//                             <Text style={{ ...FONTS.h4, color: COLORS.white }}>Call</Text>
//                         </TouchableOpacity>

//                         <TouchableOpacity
//                             style={{
//                                 flex: 1,
//                                 height: 50,
//                                 backgroundColor: COLORS.secondary,
//                                 alignItems: 'center',
//                                 justifyContent: 'center',
//                                 borderRadius: 10
//                             }}
//                             onPress={() => navigation.goBack()}
//                         >
//                             <Text style={{ ...FONTS.h4, color: COLORS.white }}>Cancel</Text>
//                         </TouchableOpacity>
//                     </View>

//                 </View>
//             </View>
//         )
//     }

//     function renderButtons() {
//         return (
//             <View
//                 style={{
//                     position: 'absolute',
//                     bottom: SIZES.height * 0.35,
//                     right: SIZES.padding * 2,
//                     width: 60,
//                     height: 130,
//                     justifyContent: 'space-between'
//                 }}
//             >
//                 {/* Zoom In */}
//                 <TouchableOpacity
//                     style={{
//                         width: 60,
//                         height: 60,
//                         borderRadius: 30,
//                         backgroundColor: COLORS.white,
//                         alignItems: 'center',
//                         justifyContent: 'center'
//                     }}
//                     onPress={() => zoomIn()}
//                 >
//                     <Text style={{ ...FONTS.body1 }}>+</Text>
//                 </TouchableOpacity>

//                 {/* Zoom Out */}
//                 <TouchableOpacity
//                     style={{
//                         width: 60,
//                         height: 60,
//                         borderRadius: 30,
//                         backgroundColor: COLORS.white,
//                         alignItems: 'center',
//                         justifyContent: 'center'
//                     }}
//                     onPress={() => zoomOut()}
//                 >
//                     <Text style={{ ...FONTS.body1 }}>-</Text>
//                 </TouchableOpacity>
//             </View>

//         )
//     }

//     return (
//         <View style={{ flex: 1 }}>
//             {renderMap()}
//             {renderDestinationHeader()}
//             {renderDeliveryInfo()}
//             {renderButtons()}
//         </View>
//     )
// }

// export default Menu;


import React,{useState,useEffect} from "react";
import {
    View,
    Text,
    Image,
    TouchableOpacity
} from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import MapViewDirections from "react-native-maps-directions";

import { COLORS, FONTS,  SIZES } from "../constants/theme"
import icons from "../constants/icons";

const GOOGLE_API_KEY = "AIzaSyAqNIsWwmxw_6_gGfZvh4OT1V09ick5s78";
const Menu = ({ route, navigation }) => {

    const mapView = useRef()

    const [restaurant, setRestaurant] = useState(null)
    const [streetName, setStreetName] = useState("")
    const [fromLocation, setFromLocation] = useState(null)
    const [toLocation, setToLocation] = useState(null)
    const [region, setRegion] = useState(null)
    const [duration, setDuration] = useState(0)
    const [isReady, setIsReady] = useState(false)
    const [angle, setAngle] = useState(0)

    useEffect(() => {
        if (route.params) {
            let { restaurant, currentLocation } = route.params;

            if (restaurant && currentLocation && currentLocation.gps && restaurant.location) {
                let fromLoc = currentLocation.gps
                let toLoc = restaurant.location
                let street = currentLocation.streetName || "Unknown street"

                let mapRegion = {
                    latitude: 18.32568,
                    longitude: 32.56894,
                    latitudeDelta: Math.abs(fromLoc.latitude - toLoc.latitude) * 2,
                    longitudeDelta: Math.abs(fromLoc.longitude - toLoc.longitude) * 2
                }

                setRestaurant(restaurant)
                setStreetName(street)
                setFromLocation(fromLoc)
                setToLocation(toLoc)
                setRegion(mapRegion)
            }
        } else {
            const defaultFromLoc = { latitude: 37.78825, longitude: -122.4324 }
            const defaultToLoc = { latitude: 37.7749, longitude: -122.4194 }
            
            setFromLocation(defaultFromLoc)
            setToLocation(defaultToLoc)
            setRegion({
                latitude: 37.78137,
                longitude: -122.4259,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421
            })
            setStreetName("Default Street")
            setRestaurant({
                name: "Test Restaurant",
                courier: {
                    avatar: icons.avatar_1,
                    name: "Test Courier"
                },
                rating: 4.8
            })
        }
    }, [])

    function calculateAngle(coordinates) {
        let startLat = coordinates[0]["latitude"]
        let startLng = coordinates[0]["longitude"]
        let endLat = coordinates[1]["latitude"]
        let endLng = coordinates[1]["longitude"]
        let dx = endLat - startLat
        let dy = endLng - startLng

        return Math.atan2(dy, dx) * 180 / Math.PI
    }

    function zoomIn() {
        if (!region) return;
        
        let newRegion = {
            latitude: region.latitude,
            longitude: region.longitude,
            latitudeDelta: region.latitudeDelta / 2,
            longitudeDelta: region.longitudeDelta / 2
        }

        setRegion(newRegion)
        mapView.current?.animateToRegion(newRegion, 200)
    }

    function zoomOut() {
        if (!region) return;
        
        let newRegion = {
            latitude: region.latitude,
            longitude: region.longitude,
            latitudeDelta: region.latitudeDelta * 2,
            longitudeDelta: region.longitudeDelta * 2
        }

        setRegion(newRegion)
        mapView.current?.animateToRegion(newRegion, 200)
    }

    function renderMap() {
        if (!region || !fromLocation || !toLocation) {
            return (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <ActivityIndicator size="large" color={COLORS.primary} />
                    <Text style={{ marginTop: 10, ...FONTS.body4 }}>Loading map...</Text>
                </View>
            )
        }

        const destinationMarker = () => (
            <Marker
                coordinate={toLocation}
            >
                <View
                    style={{
                        height: 40,
                        width: 40,
                        borderRadius: 20,
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: COLORS.red
                    }}
                >
                    <View
                        style={{
                            height: 30,
                            width: 30,
                            borderRadius: 15,
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: COLORS.primary
                        }}
                    >
                        <Image
                            source={icons.pin}
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: COLORS.white
                            }}
                        />
                    </View>
                </View>
            </Marker>
        )

        const carIcon = () => (
            <Marker
                coordinate={fromLocation}
                anchor={{ x: 0.5, y: 0.5 }}
                flat={true}
                rotation={angle}
            >
                <Image
                    source={icons.car}
                    style={{
                        width: 40,
                        height: 40
                    }}
                />
            </Marker>
        )

        return (
            <View style={{ flex: 1 }}>
                <MapView
                    ref={mapView}
                    provider={PROVIDER_GOOGLE}
                    initialRegion={region}
                    style={{ flex: 1 }}
                >
                    <MapViewDirections
                        origin={fromLocation}
                        destination={toLocation}
                        apikey={GOOGLE_API_KEY}
                        strokeWidth={5}
                        optimizeWaypoints={true}
                        onReady={result => {
                            setDuration(result.duration)

                            if (!isReady) {
                                mapView.current?.fitToCoordinates(result.coordinates, {
                                    edgePadding: {
                                        right: (SIZES.width / 20),
                                        bottom: (SIZES.height / 4),
                                        left: (SIZES.width / 20),
                                        top: (SIZES.height / 8)
                                    }
                                })
                                let nextLoc = {
                                    latitude: result.coordinates[0]["latitude"],
                                    longitude: result.coordinates[0]["longitude"]
                                }

                                if (result.coordinates.length >= 2) {
                                    let angle = calculateAngle(result.coordinates)
                                    setAngle(angle)
                                }

                                setFromLocation(nextLoc)
                                setIsReady(true)
                            }
                        }}
                        onError={(errorMessage) => {
                            console.log("MapViewDirections Error:", errorMessage);
                        }}
                    />
                    {destinationMarker()}
                    {carIcon()}
                </MapView>
            </View>
        )
    }

    function renderDestinationHeader() {
        if (!streetName) return null;

        return (
            <View
                style={{
                    position: 'absolute',
                    top: 50,
                    left: 0,
                    right: 0,
                    height: 50,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        width: SIZES.width * 0.9,
                        paddingVertical: SIZES.padding,
                        paddingHorizontal: SIZES.padding * 2,
                        borderRadius: SIZES.radius,
                        backgroundColor: COLORS.white
                    }}
                >
                    <Image
                        source={icons.red_pin}
                        style={{
                            width: 30,
                            height: 30,
                            marginRight: SIZES.padding
                        }}
                    />

                    <View style={{ flex: 1 }}>
                        <Text style={{ ...FONTS.body3 }}>{streetName}</Text>
                    </View>

                    <Text style={{ ...FONTS.body3 }}>{Math.ceil(duration)} mins</Text>
                </View>
            </View>
        )
    }

    function renderDeliveryInfo() {
        if (!restaurant) return null;

        return (
            <View
                style={{
                    position: 'absolute',
                    bottom: 50,
                    left: 0,
                    right: 0,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <View
                    style={{
                        width: SIZES.width * 0.9,
                        paddingVertical: SIZES.padding * 3,
                        paddingHorizontal: SIZES.padding * 2,
                        borderRadius: SIZES.radius,
                        backgroundColor: COLORS.white
                    }}
                >
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        {restaurant?.courier?.avatar && (
                            <Image
                                source={restaurant.courier.avatar}
                                style={{
                                    width: 50,
                                    height: 50,
                                    borderRadius: 25
                                }}
                            />
                        )}

                        <View style={{ flex: 1, marginLeft: SIZES.padding }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ ...FONTS.h4 }}>{restaurant?.courier?.name || 'Courier'}</Text>
                                <View style={{ flexDirection: 'row' }}>
                                    <Image
                                        source={icons.star}
                                        style={{ width: 18, height: 18, tintColor: COLORS.primary, marginRight: SIZES.padding }}
                                    />
                                    <Text style={{ ...FONTS.body3 }}>{restaurant?.rating || '0.0'}</Text>
                                </View>
                            </View>
                            <Text style={{ color: COLORS.darkgray, ...FONTS.body4 }}>{restaurant?.name || 'Restaurant'}</Text>
                        </View>
                    </View>

                    {/* Buttons */}
                    <View
                        style={{
                            flexDirection: 'row',
                            marginTop: SIZES.padding * 2,
                            justifyContent: 'space-between'
                        }}
                    >
                        <TouchableOpacity
                            style={{
                                flex: 1,
                                height: 50,
                                marginRight: 10,
                                backgroundColor: COLORS.primary,
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: 10
                            }}
                            onPress={() => navigation.navigate("Home")}
                        >
                            <Text style={{ ...FONTS.h4, color: COLORS.white }}>Call</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={{
                                flex: 1,
                                height: 50,
                                backgroundColor: COLORS.secondary,
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: 10
                            }}
                            onPress={() => navigation.goBack()}
                        >
                            <Text style={{ ...FONTS.h4, color: COLORS.white }}>Cancel</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
        )
    }

    function renderButtons() {
        return (
            <View
                style={{
                    position: 'absolute',
                    bottom: SIZES.height * 0.35,
                    right: SIZES.padding * 2,
                    width: 60,
                    height: 130,
                    justifyContent: 'space-between'
                }}
            >
                <TouchableOpacity
                    style={{
                        width: 60,
                        height: 60,
                        borderRadius: 30,
                        backgroundColor: COLORS.white,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                    onPress={() => zoomIn()}
                >
                    <Text style={{ ...FONTS.body1 }}>+</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        width: 60,
                        height: 60,
                        borderRadius: 30,
                        backgroundColor: COLORS.white,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                    onPress={() => zoomOut()}
                >
                    <Text style={{ ...FONTS.body1 }}>-</Text>
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <View style={{ flex: 1 }}>
            {renderMap()}
            {renderDestinationHeader()}
            {renderDeliveryInfo()}
            {renderButtons()}
        </View>
    )
}

export default Menu;