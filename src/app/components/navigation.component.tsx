"use client";

import {ReactNode, useState} from "react";
import Image from "next/image";
import "./navigation.component.scss";
import Link from "next/link";

export default function NavigationComponent() : ReactNode {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<nav id="__adev_navigation" className="adev-navigation-block">
			<div className="navigation-spacer logo-section">
				<div className="navigation-logo">
					<Link href="/">
						<Image src="/images/aymericdev.svg" className={"web-logo"} alt={"Logo de Aymericdev"} width={192} height={58} />
					</Link>
				</div>

				<button className="navigation-toggle" onClick={toggleMenu}>
					<i className="fi fi-br-menu-burger"></i>
				</button>
			</div>

			<div className={`navigation-spacer ${isMenuOpen ? "open" : "closed"}`}>
				<ul className="navigation-menu">
					<li className="navigation-toggle-link">
						<button className="navigation-toggle" onClick={toggleMenu}>
							<i className="fi fi-rs-circle-xmark"></i>
						</button>
					</li>
					<li className="navigation-item">
						<a href="#" className="navigation-link">Mes projets</a>
					</li>
					<li className="navigation-item">
						<a href="#__contact_form" className="navigation-link">Me contacter</a>
					</li>
        </ul>
			</div>
		</nav>
	);
}