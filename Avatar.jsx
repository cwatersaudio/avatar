import React from "react"
import { IoPersonSharp } from "react-icons/io5"

/**
 * Challenge: Create a flexible Avatar component!
 * 
 * Check the slides for notes on how the component 
 * should be used.
 * 
 * Each of the 3 different avatars should have a 
 * wrapper div with the classes below:
 * 
 * With image: `avatar`
 * With initials: `avatar avatar-letters`
 * Anonymous: `avatar avatar-icon`
 * 
 * E.g. <Avatar>BZ</Avatar> should render
 * <div className="avatar avatar-letters">...</div>
 * 
 * Check the hints.md file if you are really stuck.
 * 
 * EXTRA CREDIT:
 * Randomize the background color of the non-image
 * avatars. Check the styles.css for some pre-written
 * color classes to add to the wrapper div.
 */

export default function Avatar(props) {
    const { imgSrc, initials } = props
    let avatarClass;


    const randBackground = () => {
        const backgrounds = ['pink', 'navy', 'pink', 'red', 'blue', 'green']
        return backgrounds[Math.floor(Math.random() * backgrounds.length)]
    }

    if (imgSrc) {
        avatarClass = "avatar"
    } else if (props.children) {
        avatarClass = "avatar avatar-letters"
    } else {
        avatarClass = `avatar avatar-icon ${randBackground()} `
    }



    return (
        <div className={avatarClass}>
            {imgSrc && <img src={imgSrc} alt="Avatar" className="" />}
            {props.children}
            {!imgSrc && !props.children && <IoPersonSharp />}
        </div>
    )
}