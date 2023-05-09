import { MaterialIcons } from "@expo/vector-icons";
import { useTheme } from "../../../shared/context/ThemeContext";
import { Animated, StyleSheet, Text, TouchableOpacity, Touchable, TouchableOpacityBase, View} from "react-native";
import {GestureHandlerRootView, Swipeable} from 'react-native-gesture-handler'


const ProductItem = ({ product, onDelete, refRow, closeRow }) => {
  const theme = useTheme();
  const styles = styling(theme);

  const leftSwipe = (progress, dragX) => {
    const scale = dragX.interpolate({
        inputRange: [0,100],
        outputRange: [0,1]
    })

    return (
        <TouchableOpacity onPress={onDelete}>
            <Animated.View style={[styles.deleteBox, {transform: [{scale}]}]}>
                <MaterialIcons name={"delete-forever"} size={24} color={"white"}/>
            </Animated.View>
        </TouchableOpacity>
    )
  }

  return (
    <GestureHandlerRootView>
        <Swipeable 
            renderLeftActions={leftSwipe}
            onSwipeableOpen={closeRow}
            ref={(ref) => refRow?.(product.id, ref)}
        >
            <View style={styles.item}>
                <Text style={styles.itemText}>{product.productName}</Text>
                <Text style={styles.itemText}>{product.price}</Text>
            </View>
        </Swipeable>
    </GestureHandlerRootView>
  )
};

const styling = (theme) => StyleSheet.create({
    itemText: {
        ...theme.text.h2style,
        fontSize: 18
    },
    item: {
        padding: theme.spacing.m,
        margin: theme.spacing.s,
        borderWidth: 1,
        borderColor: theme.color.primary,
        backgroundColor: theme.color.transparent,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    deleteBox: {
        backgroundColor: "red",
        width: 64,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    }
})

export default ProductItem
