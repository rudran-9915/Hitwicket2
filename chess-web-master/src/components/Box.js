import React from "react";
import "../css/pieces.css";
import { gridConstants } from "../helpers/imageHelpers";

export default function Box(props) {
  const boxSize = gridConstants.gridSize / 5; // Adjusted for 5x5 grid

  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        backgroundColor:
          props.pos === props.prevGrabPos || props.pos === props.currentPos
            ? props.number % 2 === 0
              ? "#F2F05D"
              : "#DBC809"
            : props.number % 2 === 0
            ? "#F5F7D7"
            : "",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {props.image ? (
        <div
          style={{
            backgroundImage: `url(${props.image})`,
            backgroundSize: "cover",
            height: boxSize, // Updated box size
            width: boxSize, // Updated box size
          }}
          className="piece"
        />
      ) : (
        props.moveTrack &&
        props.moveTrack[props.pos] && (
          <div
            style={{
              height: boxSize, // Updated move indicator size
              width: boxSize, // Updated move indicator size
              borderRadius: boxSize, // Updated border-radius for circular shape
              backgroundColor: "grey",
            }}
          />
        )
      )}
    </div>
  );
}
