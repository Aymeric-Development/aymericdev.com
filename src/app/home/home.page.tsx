import {ReactNode} from "react";
import Image from "next/image";
import "./home.page.scss";
import ContactFormComponent from "@/aymericdev/app/components/contact_form.component";

export default function HomePage() : ReactNode {
	return (
		<div className="main-container">
			<header className="header-block">
				<div className="header-spacer">
					<div className="header-text">
						<p className="h-t-p1 welcome-aboard-captain">
							Bienvenue à bord !
						</p>

						<p className="h-t-p2">
							Moi c&#39;est
						</p>

						<h1 className="h-bt-txt">
							<span className="h-bt-st">
								Aymeric
							</span>
						</h1>

						<h2 className="h-bt-smt">
							Développeur WEB et Mobile
						</h2>
					</div>

					<div className="cta-box">
						<a href="#" className="btn cta primary btn-disabled">
							Prestations bientôt disponibles !
						</a>
					</div>
				</div>

				<div className="header-spacer header-image-block">
					<Image src={"images/captain.svg"} className={"header-image"} alt={"Capitaine Aymeric - le programmeur de la mission"} width={500} height={500} />
				</div>
			</header>

			<main className="home-page-container">

				<div className="services-list">
					<div className="service-item">
						<div className="service-icon">
							<Image src={"images/fox.svg"} alt={"Fox, astronaute du développement web"} width={250} height={250} />
						</div>
						<h3 className="service-title">Développement Web</h3>
						<p className="service-description">Conception sur-mesure d’un projet de site web, adapté à tes besoins.</p>
					</div>

					<div className="service-item">
						<div className="service-icon">
							<Image src={"images/andy.svg"} alt={"Andy, astronaute du développement mobile iOS et Android"} width={250} height={250} />
						</div>
						<h3 className="service-title">Développement mobile</h3>
						<p className="service-description">Élaboration de ton projet mobile, à ton image.</p>
					</div>

					<div className="service-item">
						<div className="service-icon">
							<Image src={"images/maria.svg"} alt={"Maria, astronaute de l'infrastructure, de la maintenance et de l'hébergement"} width={250} height={250} />
						</div>
						<h3 className="service-title">Maintenance</h3>
						<p className="service-description">J’assure l’entretien de ton projet, et en plus t’es hébergé !</p>
					</div>
				</div>

				<ContactFormComponent />
			</main>
		</div>
	)
}