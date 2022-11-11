import ghost from "../icons/ghost.svg";

import "../assets/styles.css"

export const Ghost = () => {
    return (
        <>
            <div className="wrapper">
                <div className="icon ghost">
                    <img src={ghost} alt="" />
                </div>
            </div>
        </>
    )
}
