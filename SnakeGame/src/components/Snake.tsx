import { Fragment } from "react";
import { Coordinate } from "../types/types";
import {View,StyleSheet,Text} from "react-native";
import { Colors } from "../styles/color";

interface SnakeProps {
    snake: Coordinate[];
}

export default function Snake({snake}:SnakeProps):JSX.Element{
    return(
        <Fragment>
            {snake.map((segment:Coordinate, index:number) =>{
                const segmentStyle ={
                    left: segment.x * 10,
                    top: segment.y * 10,

                }
                return<View key={index} style={[styles.snake, segmentStyle]}>
                    <Text style={{fontSize:16}}>😋</Text>
                </View>
            })}
        </Fragment>
    )
}

const styles = StyleSheet.create({
    snake:{
        position: "absolute",
    }
})