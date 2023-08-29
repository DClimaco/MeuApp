import { Image, TextInput, TouchableOpacity, View, Text } from "react-native-web";

export default function LoginPage(){
    return(
        <View>
            <Image/>
            <TextInput placeholder = 'Email'/>
            <TextInput placeholder = 'Senha' />
            <TouchableOpacity>
                <Text>Login</Text>
            </TouchableOpacity>
            <View>
                <Text>Cadastre-se</Text>
                <Text>Esqueceu a senha?</Text>
            </View>
        </View>
    )
}