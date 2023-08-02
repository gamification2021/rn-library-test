import React, { useState, useEffect, useContext } from "react"
import { SafeAreaView, StyleSheet, Text, View, Image, Modal, DeviceEventEmitter } from "react-native"
import { Gesture, GestureDetector } from "react-native-gesture-handler"
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withTiming,
    Easing,
    runOnJS,
    interpolate,
    useDerivedValue
} from "react-native-reanimated"
import { VictoryLabel, VictoryPie } from 'victory-native';
import colors from "./colors";
import { TouchableOpacity } from "react-native";
import StatusBarExcludedArea from "./StatusBarExcludedArea";
import SuccessDialog from "./SuccessDialog";
import TextNormal from "./TextNormal";
import TextBold from "./TextBold";
import AppContext from "./context";

const Wheel = () => {
    return (
        <>
            <View style={styles.circleRow}>
                <View style={[styles.pizza, styles.pizzaRed]} />
                <View style={[styles.pizza, styles.pizzaBlue]} />
            </View>
            <View style={styles.circleRow}>
                <View style={[styles.pizza, styles.pizzaGreen]} />
                <View style={[styles.pizza, styles.pizzaYellow]} />
            </View>
        </>
    )
}

const Info = ({ currentAngle, currentColor }) => {
    return (
        <View style={styles.infoBox}>
            <Text style={styles.text}>Current Color: {currentColor}</Text>
            <Text style={styles.text}>Current Angle: {currentAngle}</Text>
        </View>
    )
}

const SpinAndWinScreen = (props) => {
    const appContext = useContext(AppContext);
    const piedata = ['100 Points', '200 Points', 'Try Again', '150 Points', '500 Points', 'Try again', '300 Points', '400 Points', '600 Points', '800 Points', 'Try Again', '250 Points']
    const graphicColor = ['#000000', '#E2D798'];
    const wantedGraphicData = [{ x: '100 Points', y: 10 }, { x: '200 Points', y: 10 }, { x: 'Try Again', y: 10 }, { x: '150 Points', y: 10 }, { x: '500 Points', y: 10 }, { x: 'Try again', y: 10 }, { x: '300 Points', y: 10 }, { x: '400 Points', y: 10 }, { x: '600 Points', y: 10 }, { x: '800 Points', y: 10 }, { x: 'Try Again', y: 10 }, { x: '250 Points', y: 10 }]
    //setting manual reward to user
    const positionOfRewardToGive = 9;
    const rewardArrayHalfLength = parseInt((piedata.length - 1) / 2);
    const angleOfSinglePie = 360 / piedata.length;
    const rewardAngle = (360 * (parseInt(positionOfRewardToGive / (rewardArrayHalfLength + 1))) + (angleOfSinglePie * (rewardArrayHalfLength - positionOfRewardToGive))) + parseInt(angleOfSinglePie / 2)
    //------------------------------------------------------------------------------------
    const rotation = useSharedValue(360)
    const [currentAngle, setCurrentAngle] = useState(rotation.value)
    const [showWinner, setShowWinner] = useState(false)
    _angle = new Animated.Value(0);

    function sleep(time) {
        return new Promise((resolve) => setTimeout(resolve, time));
    }

    const animatedStyles = useAnimatedStyle(() => {
        return {
            transform: [{ rotateZ: `${rotation.value}deg` }]
        }
    })

    const handleAngle = value => {
        setIsEnabled(false)
        setCurrentAngle(parseInt(value.toFixed(), 10))
    }

    const handleAngleFromButton = value => {
        setIsEnabled(false)
        setCurrentAngle(parseInt(value.toFixed(), 10))
        sleep(1000).then(() => {
            appContext.setCallBack(true)
            console.log('haiii working');
            setShowWinner(true);

        });
    }

    const showDialog = (value) => {
        sleep(4000).then(() => {
            console.log('haiii working');
            setShowWinner(value);
        });

    }
    const easing = Easing.bezier(0.23, 1, 0.32, 1)
    const [isEnabled, setIsEnabled] = useState(true);
    const gesture = Gesture.Pan().onUpdate(e => {
        console.log('asasas    ' + isEnabled)
        rotation.value = withTiming(
            Math.abs(e.velocityY) / 7 + rotation.value,
            {
                duration: 3000,
                easing: easing
            },
            () => runOnJS(handleAngle)(rotation.value % 360)
        )

    })
        .onFinalize(
            (e) => {
                withTiming(
                    runOnJS(showDialog)(true)
                )
            }
        )
        .enabled(isEnabled)


    const getCurrentColor = () => {
        angleDifference = 360 - currentAngle;
        if (angleDifference > 0) {
            var quadrant = parseInt(angleDifference / (360 / piedata.length))
            console.log(quadrant);

            var half = parseInt(piedata.length / 2)
            if (quadrant >= half) {
                return piedata[quadrant - half]
            } else {
                return piedata[quadrant + half]
            }

        } else {
            console.log(0);
        }

        return ""
    }

    const animation = useSharedValue(0);
    const rotationAnimation = useDerivedValue(() => {
        return interpolate(animation.value,
            [0, 360],
            [0, 360])
    })

    const wheelAnimationStyle = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    rotate: rotationAnimation.value + 'deg'
                }
            ]
        }
    })

    const startWheelSpinning = () => {
        animation.value = withTiming(1440 + rewardAngle, {
            duration: 1000,
            easing: easing
        },
            () => runOnJS(handleAngleFromButton)(rewardAngle)
        )
    }

    return (
        <StatusBarExcludedArea style={styles.container}>
            <View style={{ alignContent: 'center', borderBottomColor: colors.grey, borderBottomWidth: 1, flexDirection: 'row', paddingHorizontal: 10, paddingVertical: 15, position: 'absolute', top: 0, width: '100%' }}>
                <Image style={{ alignSelf: 'center', height: 15, marginStart: 5, tintColor: colors.white, width: 25, }} source={require('./arrow-left.png')} />
                <TextNormal size={20} style={{ marginStart: 20, }}>Spin & Win</TextNormal>
            </View>
            <GestureDetector gesture={gesture}>
                <View style={styles.circleContainer}>
                    <Image style={{ zIndex: 10, elevation: 10, height: 50, position: 'absolute', width: 50, }} source={require('./spin_and_win_center.png')} />
                    <Image source={require('./spin_pin.png')} style={styles.pointer} />
                    <Animated.View style={[styles.circle, animatedStyles, wheelAnimationStyle]}>
                        <View style={{ backgroundColor: '#CC0000', borderRadius: 180, flex: 1, height: 360, position: 'absolute', width: 360 }} />
                        <VictoryPie

                            labelRadius={({ innerRadius }) => innerRadius + 50}
                            labelPosition={({ index }) => "centroid"
                            }
                            labelPlacement={({ index }) => "parallel"
                            }
                            colorScale={graphicColor}

                            // labelComponent={<VictoryLabel
                            //     style={{
                            //         labels: { color: 'red' }
                            //     }}

                            // />}

                            data={wantedGraphicData}
                            width={445}
                            height={445}
                            style={{
                                data: {
                                    fillOpacity: 0.9, stroke: "#FDF2CA", strokeWidth: 3
                                },
                                labels: { fill: 'white', fontSize: 12, fontWeight: "bold" }
                            }}
                        />
                    </Animated.View>
                </View>
            </GestureDetector>
            {/* <Info currentAngle={currentAngle} currentColor={getCurrentColor()} />
            {showWinner && <TextNormal>hellooooooo</TextNormal>} */}
            <TouchableOpacity
                disabled={!isEnabled}
                onPress={isEnabled ? startWheelSpinning : null}
                style={{ backgroundColor: 'white', borderRadius: 20, height: 40, alignItems: 'center', justifyContent: 'center', marginTop: 100, width: '80%' }}
            >
                <TextNormal color={isEnabled ? 'black' : 'gray'}>Spin Now</TextNormal>
            </TouchableOpacity>

            <Modal visible={showWinner} animationType="slide" transparent={true}>
                <SuccessDialog
                    points={getCurrentColor()}
                    onPress={() => {
                        props.navigation.goBack()
                        setShowWinner(false)
                    }} />
            </Modal>

        </StatusBarExcludedArea>
    )
}

export default SpinAndWinScreen

const styles = StyleSheet.create({
    text: {
        color: "white",
        fontSize: 16
    },
    infoBox: {
        marginTop: 15,
        height: 40,
        justifyContent: "space-between"
    },
    circleRow: { width: "100%", height: "50%", flexDirection: "row" },
    pizza: { width: "50%", height: "100%" },
    pizzaRed: { backgroundColor: "#ce4257" },
    pizzaBlue: { backgroundColor: "#4361ee" },
    pizzaYellow: { backgroundColor: "#fee440" },
    pizzaGreen: { backgroundColor: "#06d6a0" },
    circle: {
        width: 370,
        height: 370,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 185,
        borderWidth: 0,
        overflow: "hidden",
        backgroundColor: '#FDF2CA',
        padding: 10
    },
    ball: {
        width: 100,
        height: 100,
        borderRadius: 100,
        backgroundColor: "blue",
        alignSelf: "center"
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.hktBlue
    },
    circleContainer: {
        width: 360,
        height: 360,
        justifyContent: "center",
        alignItems: "center"
    },
    pointer: {
        width: 30,
        height: 50,
        position: "absolute",
        bottom: -5,
        zIndex: 60,
        marginBottom: 1,
    }
})