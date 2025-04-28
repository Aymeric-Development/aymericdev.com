"use client";

import {FormEvent, ReactNode, useState} from "react";
import "./contact_form.component.scss";

export default function ContactFormComponent(): ReactNode {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    errors: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });
  const [formGlobalError, setFormGlobalError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState("");

  const validateForm = () => {
    const errors = {
      name: "",
      email: "",
      subject: "",
      message: "",
    };
    let isValid = true;

    if (!formState.name.trim().length || formState.name.length < 5) {
      errors.name = "Ton nom et prénom doivent faire au moins 5 caractères";
      isValid = false;
    } else {
      errors.name = "";
    }

    if (
      !formState.email.trim().length ||
      !/\S+@\S+\.\S+/.test(formState.email)
    ) {
      errors.email = "Ton email doit être valide";
      isValid = false;
    } else {
      errors.email = "";
    }

    if (!formState.subject.trim().length || formState.subject.length < 10) {
      errors.subject = "Le sujet doit avoir au moins 10 caractères";
      isValid = false;
    } else {
      if (formState.subject.length > 100) {
        errors.subject = "Le sujet ne doit pas excéder 100 caractères";
        isValid = false;
      } else {
        errors.subject = "";
      }
    }

    if (
      !formState.message.trim().length ||
      formState.message.length < 20
    ) {
      errors.message = "Ton message doit avoir au moins 20 caractères";
      isValid = false;
    } else {
      errors.message = "";
    }

    setFormState({ ...formState, errors });
    setIsSubmitting(false);
    return isValid;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (validateForm()) {

      if (isSubmitting) {return;}
      setIsSubmitting(true);
      setFormGlobalError("");
      setIsSuccess("");

      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formState.name,
            email: formState.email,
            subject: formState.subject,
            message: formState.message,
          }),
        });

        if (response.ok) {
          setFormState({
            name: "",
            email: "",
            subject: "",
            message: "",
            errors: {
              name: "",
              email: "",
              subject: "",
              message: "",
            },
          });

          setIsSuccess("Ta fusée s'est bien posée dans mes mails ! Je reviens vers toi rapidement. Merci de m'avoir contacté.");
        } else {
          setFormGlobalError("Il y a eu un problème lors de l'envoi de ta fusée. Essaie de relancer les moteurs !");
        }
      } catch {
        setFormGlobalError("Il y a eu un problème lors de l'envoi de ta fusée.");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div className="form-block" id="__contact_form">
      <form className="form-container" onSubmit={handleSubmit}>
        <div className="form-title">
          <h4 className="form-title-txt">
            Contacte-moi !
          </h4>
        </div>

        { formGlobalError && <p className="error global">{formGlobalError}</p>}
        { isSuccess && <p className="success">{isSuccess}</p>}

        <div className="form-group">
          <div className="form-item">
            <input type="text" id="name" name="name" className="form-input" required placeholder="Votre nom" value={formState.name} onChange={(e) => setFormState({ ...formState, name: e.target.value })} />
            <label htmlFor="name" className="form-label">Nom</label>
            {formState.errors.name && <p className="error">{formState.errors.name}</p>}
          </div>

          <div className="form-item">
            <input type="email" id="email" name="email" className="form-input" required placeholder="Votre adresse mail" value={formState.email} onChange={(e) => setFormState({ ...formState, email: e.target.value })} />
            <label htmlFor="email" className="form-label">Email</label>
            {formState.errors.email && <p className="error">{formState.errors.email}</p>}
          </div>
        </div>

        <div className="form-group">
          <div className="form-item long">
            <input type="text" id="subject" name="subject" className="form-input" required placeholder="Le sujet que vous voulez aborder" value={formState.subject} onChange={(e) => setFormState({ ...formState, subject: e.target.value })} />
            <label htmlFor="subject" className="form-label">Sujet</label>
            {formState.errors.subject && <p className="error">{formState.errors.subject}</p>}
          </div>
        </div>

        <div className="form-group">
          <div className="form-item long">
            <textarea name="message" id="message" cols={30} rows={10} placeholder="Décrivez votre demande" className="form-input" value={formState.message} onChange={(e) => setFormState({ ...formState, message: e.target.value })}></textarea>
            <label htmlFor="message" className="form-label">Message</label>
            {formState.errors.message && <p className="error">{formState.errors.message}</p>}
          </div>
        </div>

        <div className="form-actions">
          <button type="submit" className="btn send">
            {!isSubmitting ? "J'envoie ! 🚀" : "Décollage..."}
          </button>
        </div>
      </form>
    </div>
  );
}