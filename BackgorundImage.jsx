import React from "react";
import dartimg from "./dartimg.png";

function BackgroundImage () {
    return (
        <div style={{ backgroundImage:`url(${dartimg})`, backgroundSize:`cover`, backgroundPosition:`left top`,
          backgroundAttachment:`fixed`, minHeight:`100vh`, }} >
        </div>
    )
}

export default BackgroundImage;

