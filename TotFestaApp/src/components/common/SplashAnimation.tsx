import React, { useEffect, useRef } from "react";
import { StyleSheet, Animated } from "react-native";
import LottieView from "lottie-react-native";

export default function SplashAnimation({ onFinish }: { onFinish: () => void }) {
    const opacity = useRef(new Animated.Value(1)).current;

    useEffect(() => {
        // Després de 2.5s, fade-out
        setTimeout(() => {
            Animated.timing(opacity, {
                toValue: 0,
                duration: 600,
                useNativeDriver: true,
            }).start(() => onFinish());
        }, 2500);
    }, []);

    return (
        <Animated.View style={[styles.container, { opacity }]}>
            <LottieView
                source={require("../../../assets/animations/disco-ball.json")}
                autoPlay
                loop
                style={{ width: 220, height: 220 }}
            />
        </Animated.View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "#dfe",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 999,
    },
});