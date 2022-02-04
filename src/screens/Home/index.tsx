import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { propsStack } from "../../routes/Stack/Models";

const Home = () => {
    const navigation = useNavigation<propsStack>()
    return (
        <View style={{ flexDirection: "column", alignItems: 'center', justifyContent: "center", flex: 1 }}>
            <Text style={{ fontSize: 20 }}>Home</Text>

            <TouchableOpacity 
            style={{ marginTop: 12, padding: 8, backgroundColor: "#BDBDBD"}}
            onPress={() => navigation.navigate("Profile", {
                name: "Vinicius"
            })}>
                <Text>Profile</Text>
            </TouchableOpacity>

            <TouchableOpacity 
            style={{ marginTop: 12, padding: 8, backgroundColor: "#BDBDBD"}}
            onPress={() => navigation.navigate("Search")}>
                <Text>Search</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Home