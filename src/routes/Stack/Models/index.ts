import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type propsNavigationStack = {
    Home: undefined
    Profile?: {
        name: string
    }
    Search: undefined
}

export type propsStack = NativeStackNavigationProp<propsNavigationStack>