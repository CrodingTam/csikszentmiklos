import Link from "next/link";
import React, { Fragment } from "react";
import classes from "./Navigation.module.css"
import { NavigationLinkProps } from "types";

export interface NavigationProps {
    links: NavigationLinkProps[]
}

export interface LanguageProps {
    name: string
}

const Navigations: React.FC<NavigationProps> = (props) => {
    return (
        <ul className={classes.ul}>    
            {props.links.map((link) => {
                return(
                    <li className={classes.li} key={link.href}>
                        <Link key={link.name} className={classes.Link} href={link.href}>{link.name}</Link> 
                    </li>
                );
            })}        
        </ul>
    )
}

export default Navigations;