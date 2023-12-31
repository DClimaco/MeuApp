import {Image, View, Text, TouchableOpacity} from 'react-native'
import styles from './styles'
import { Link } from '@react-navigation/native';

export default function DashBoard(){
    return (
        <View style={styles.container}>
            <Image source={require('../../../assets/logo.png')} style={styles.logo}/>
            <View style={styles.secretLinks}>
                <Link to={{screen: 'LoginPage'}}> </Link>
            </View>
        </View>
    )
}
