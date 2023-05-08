import { View, StyleSheet } from "react-native";
import TextLabel from '../../shared/components/TextLabel';
import FormButton from "../../shared/components/FormButton";
import { useTheme } from "../../shared/context/ThemeContext";

const Welcome = () => {
    const theme = useTheme()
    const styles = styling(theme)
    return (
        <View>
            <View style={styles.titleContainer}>
                <TextLabel text={"POS System"} label={"h1"}/>
                <TextLabel text={"Simple Point of Sales"} label={"h3"}/>
            </View>
            <FormButton label="Continue" onClick={() => {}}/>
        </View>
    )
}

const styling = (theme) => StyleSheet.create({
    titleContainer: {
        alignItems: "center",
    }
})

export default Welcome