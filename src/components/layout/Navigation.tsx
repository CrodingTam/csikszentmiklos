import Link from "next/link";
import React, { Fragment } from "react";
import classes from "./Navigation.module.css"
import { NavigationLinkProps } from "types";
import Image from "next/image";

export interface NavigationProps {
    links: NavigationLinkProps[]
    mobileNavigation: boolean;
    onClickClose?: () => void;
}

export interface LanguageProps {
    name: string
}

const Navigations: React.FC<NavigationProps> = (props) => {
    return (
        <ul className={classes.ul}>
            {props.mobileNavigation === true && <Image className={classes.globeImage} key={"globe"} alt="globe" src={"/assets/close.png"} width={50} height={50} onClick={props.onClickClose}/>}
            {props.links.map((link) => {
                return(
                    <li className={classes.li} key={link.href}>
                        <Link key={link.name} className={classes.Link} href={link.href} onClick={props.onClickClose}>{link.name}</Link> 
                    </li>
                );
            })}        
        </ul>
    )
}

export default Navigations;