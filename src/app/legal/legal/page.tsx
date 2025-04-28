import {ReactNode} from "react";
import "@/aymericdev/app/home/home.page.scss";
import "./page.style.scss";

export default function LegalPage() : ReactNode {
    return (
        <div className="main-container">
            <header className="header-block">
                <div className="header-spacer">
                    <div className="header-text">
                        <h1 className="h-bt-txt">
                            Mentions Légales
                        </h1>
                    </div>
                </div>
            </header>

            <main className="legal-page-container">
                <section className="legal-section">
                    <p className="section-content">
                        Conformément aux dispositions de la loi
                        n° 2004-575 du 21 juin 2004 pour la
                        confiance en l&#39;économie numérique, il est précisé aux utilisateurs du
                        site Aymericdev&#39; l&#39;identité des différents intervenants dans
                        le cadre de sa réalisation et de son suivi.
                    </p>
                </section>

                <section className="legal-section">
                    <h2 className="section-title">Édition du site</h2>
                    <p className="section-content">
                        <span className="line">Le présent site, accessible à l’URL www.aymericdev.com (le « Site »), est édité par :</span>
                        <span className="line dec">Aymeric Leger Achard, à l&#39;adresse 11 Bis Rue des Palmiers, 87100 Limoges, France.</span>
                    </p>
                </section>

                <section className="legal-section">
                    <h2 className="section-title">Hébergement</h2>
                    <p className="section-content">
                        <span className="line">Le Site est hébergé par la société SAS PulseHeberg, situé 9, Boulevard de Strasbourg 83000 Toulon</span>,
                        <span className="line">Email : <a href="mailto:contact@pulseheberg.com">contact@pulseheberg.com</a></span>
                        <span className="line">Téléphone : <a href="tel:+33 4.22.14.13.60">+33 4.22.14.13.60</a></span>
                        <span className="line">Site internet : <a href="https://pulseheberg.com" target="_blank">https://pulseheberg.com</a></span>
                    </p>
                </section>

                <section className="legal-section">
                    <h2 className="section-title">Directeur de publication</h2>
                    <p className="section-content">
                        Le Directeur de la publication du Site est Aymeric Leger Achard.
                    </p>
                </section>

                <section className="legal-section">
                    <h2 className="section-title">Nous contacter</h2>
                    <p className="section-content">
                        <span className="line">
                            Par téléphone : <a href="tel:+33 6.12.68.30.95">+33 6.12.68.30.95</a>
                        </span>
                        <span className="line">
                            Par email : <a href="mailto:aymeric.gael.leger@gmail.com">aymeric.gael.leger@gmail.com</a>
                        </span>
                        <span className="line">
                            Par courrier : 11 Bis Rue des Palmiers, 87100 Limoges, France.
                        </span>
                    </p>
                </section>
            </main>
        </div>
    )
}