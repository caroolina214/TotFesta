import React, { useRef } from "react";
import { TouchableOpacity } from "react-native";
import LottieView from "lottie-react-native";

export default function DiscoBall({ size = 200 }) {
    const animationRef = useRef<LottieView>(null);

    async function play() {
        // Reproduir animació
        animationRef.current?.reset();
        animationRef.current?.play();
    }

    return (
        <TouchableOpacity onPress={play} activeOpacity={0.8}>
            <LottieView
                ref={animationRef}
                source={require("../../../assets/animations/disco-ball.json")}
                autoPlay={false}
                loop={false}
                style={{ width: size, height: size }}
            />
        </TouchableOpacity>
    );
}