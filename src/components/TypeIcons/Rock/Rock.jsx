import rock from "../icons/rock.svg";

import "../assets/styles.css"

export const Rock = () => {
    return (
        <>
            <div className="wrapper">
                <div className="icon rock">
                    <img src={rock} alt="" />
                </div>
            </div>
        </>
    )
}
