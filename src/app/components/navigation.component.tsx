import {ReactNode} from "react";
import Image from "next/image";
import "./navigation.component.scss";
import Link from "next/link";

export default function NavigationComponent() : ReactNode {
	return (
		<nav id="__adev_navigation" className="adev-navigation-block">
			<div className="navigation-spacer">
				<div className="navigation-logo">
					<Link href="/">
						<Image src="images/aymericdev.svg" className={"web-logo"} alt={"Logo de Aymericdev"} width={192} height={58} />
					</Link>
				</div>
			</div>

			<div className="navigation-spacer">
				<ul className="navigation-menu">
					<li className="navigation-item">
						<a href="#" className="navigation-link">Mes projets</a>
					</li>
					<li className="navigation-item">
						<a href="#" className="navigation-link">Me contacter</a>
					</li>
        </ul>
			</div>
		</nav>
	);
}