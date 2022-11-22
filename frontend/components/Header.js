
import {
    Image,
    StyleSheet,
    Text,
    SafeAreaView,
    Pressable,
    Dimensions
  } from "react-native";

export default function Header() {
    return (
        <>
            <SafeAreaView style={styles.rectangleView} />
            <SafeAreaView style={styles.headerImageView}>
            <Image source={require("../assets/pickup-logo-wordmark.png")} style={{ width: 256, height: 128 }} />
            </SafeAreaView>
        </>
    )

}

const styles = StyleSheet.create({
    rectangleView: {
        position: "absolute",
        top: 0,
        left: 0,
        backgroundColor: "#00060a",
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height / 7,
      },
      headerImageView: {
        position: "absolute",
        top: "2.5%",
        left: "18%",
      },
})