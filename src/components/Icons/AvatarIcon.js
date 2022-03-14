import React from "react";
//material ui
import { Avatar } from "@mui/material";

function AvatarIcon(props) {
    const { shape, size } = props;
    return (
        <Avatar
            variant={shape == "rounded" ? "rounded" : "circle"}
            src="https://images.pexels.com/photos/4016173/pexels-photo-4016173.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            sx={size ? size : null}
            fullwidth
        />
    );
}

export default AvatarIcon;
