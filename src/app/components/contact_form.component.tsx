import {ReactNode} from "react";
import "./contact_form.component.scss";

export default function ContactFormComponent() : ReactNode {
	return (
		<div className="form-block">
			<form className="form-container">
				<div className="form-title">
					<h4 className="form-title-txt">
						Contacte-moi !
					</h4>
				</div>

				<div className="form-group">
					<div className="form-item">
						<input type="text" id="name" name="name" className="form-input" required placeholder="Votre nom" />
						<label htmlFor="name" className="form-label">Nom</label>
					</div>

					<div className="form-item">
						<input type="email" id="email" name="email" className="form-input" required placeholder="Votre adresse mail" />
						<label htmlFor="email" className="form-label">Email</label>
					</div>
				</div>

				<div className="form-group">
					<div className="form-item long">
						<input type="text" id="subject" name="subject" className="form-input" required placeholder="Le sujet que vous voulez aborder" />
						<label htmlFor="subject" className="form-label">Sujet</label>
					</div>
				</div>

				<div className="form-group">
					<div className="form-item long">
						<textarea name="message" id="message" cols={30} rows={10} placeholder="Décrivez votre demande" className="form-input"></textarea>
						<label htmlFor="message" className="form-label">Message</label>
					</div>
				</div>

				<div className="form-actions">
					<button type='submit' className="btn send">
						J&#39;envoie ! 🚀
					</button>
				</div>
			</form>
		</div>
	);
}