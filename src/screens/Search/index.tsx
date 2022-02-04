import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { propsStack } from "../../routes/Stack/Models";

const Seacrh = () => {
    const navigation = useNavigation<propsStack>()
    return (
        <View style={{ flexDirection: "column", alignItems: 'center', justifyContent: "center", flex: 1 }}>
            <Text style={{ fontSize: 20 }}>Seacrh</Text>

            <TouchableOpacity
                style={{ marginTop: 12, padding: 8, backgroundColor: "#BDBDBD" }}
                onPress={() => navigation.navigate("Profile", {
                    name: "Guedes"
                })}>
                <Text>Profile</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={{ marginTop: 12, padding: 8, backgroundColor: "#BDBDBD" }}
                onPress={() => navigation.navigate("Search")}>
                <Text>Search</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={{ marginTop: 12, padding: 8, backgroundColor: "#BDBDBD" }}
                onPress={() => navigation.goBack()}>
                <Text>Voltar</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Seacrh