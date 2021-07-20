import { useEffect, useState, useRef } from "react";
import { MilestoneProps } from "./types";

function useOnScreen(ref: any) {

    const [isIntersecting, setIntersecting] = useState(false)

    const observer = new IntersectionObserver(
        ([entry]) => setIntersecting(entry.isIntersecting)
    )

    useEffect(() => {
        observer.observe(ref.current)
        // Remove the observer as soon as the component is unmounted
        return () => { observer.disconnect() }
    })

    return isIntersecting
}

const Milestone = (props: MilestoneProps) => {
    const ref = useRef(null)
    const isVisible = useOnScreen(ref)
    return (
        <li ref={ref} className={isVisible ? "in-view" : ""}>
            {props.children}
        </li>
    )
};

export default Milestone;