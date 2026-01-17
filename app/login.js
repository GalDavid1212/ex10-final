import { View, Text, TextInput } from 'react-native';
import { useRouter } from 'expo-router';
import { styles } from '../styles/login.styles';
import AppButton from '../components/MainButton';


export default function Login() {
    const router = useRouter();
    return( 
        <View style={styles.container}>
            <Text style={styles.logo}>How many Changes left??</Text>
            <Text style={styles.subtitle}>Stay update to date with the latest foo</Text>

            <TextInput placeholder="Guess" style={styles.input} placeholderTextColor="#888" />
            <TextInput placeholder="Guess 2" style={styles.input} secureTextEntry placeholderTextColor="#888" />
            
            <AppButton
                title="Let's go!"
                onPress={() => router.replace('/(tabs)')}
            />
        </View>
    );
}