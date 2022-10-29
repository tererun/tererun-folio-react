import React from "react";

import tererunEyeIconSvg from "../../assets/tererun_eye.svg";

class EyeMouseTracking extends React.Component {

    state = { mouseX: 0, mouseY: 0 }

    componentDidMount() {
        document.addEventListener('mousemove', (e) => {
            this.setState({ mouseX: e.pageX, mouseY: e.pageY });
        });
    }

    render() {
        const windowHalfWidth = window.innerWidth / 2;
        const windowHalfHeight = window.innerHeight / 2;
        const x = (this.state.mouseX / windowHalfWidth - 1) * 3 + 53;
        const y = (this.state.mouseY / windowHalfHeight - 1) * 3 + 93;
        return (
            <object type="image/svg+xml" data={tererunEyeIconSvg} style={{ left: x, top: y }}/>
        );
    }

}

export default EyeMouseTracking;