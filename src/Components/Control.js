import { useEffect, useState } from "react"
import ToggleSlider from "./ToggleSlider"

function Control({ keyText, active, setAllActive }) {

    const [toggle, setToggle] = useState(false)

    useEffect(() => {
        //the Slider will be ON when active is true and vice versa.
        setToggle(active);
    }, [active])

    function handleToggle() {
        if(!toggle) {
            //if the slider is toggled OFF
            setToggle(true);
            setAllActive(keyText);
        }
        //do nothing if slider is already toggled ON
    }

    return (
        <div className="control-container py-3 px-6 flex flex-row select-none">
            <span className="keyText mx-auto my-0 pr-5 text-xl">{keyText}</span>
            <ToggleSlider isToggled={toggle} onToggle={handleToggle}/>
        </div>
    )
}

export default Control;