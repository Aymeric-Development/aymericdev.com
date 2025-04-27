import {ReactNode} from "react";
import "./footer.component.scss";

export default function FooterComponent() : ReactNode {
	return (
		<footer id="__adev_footer" className="adev-footer-block">
      <div className="footer-links-container">
	      <ul className="links-list">
		      <li className="link-title">Informations légales</li>
		      <li className="link-item"><a href="#" className="link-go">Mentions légales</a></li>
		      <li className="link-item"><a href="#" className="link-go">Conditions générales d&#39;utilisation</a></li>
		      <li className="link-item"><a href="#" className="link-go">Conditions générales de vente</a></li>
	      </ul>

	      <ul className="links-list">
		      <li className="link-title">Mes projet</li>
		      <li className="link-item"><a href="#" className="link-go">Lorem ipsum</a></li>
		      <li className="link-item"><a href="#" className="link-go">Lorem ipsum</a></li>
		      <li className="link-item"><a href="#" className="link-go">Lorem ipsum</a></li>
	      </ul>
      </div>

			<div className="footer-copyright">
				&copy; {new Date().getFullYear()} Aymeric Leger Achard. Tous droits réservés.
			</div>
    </footer>
	)
}