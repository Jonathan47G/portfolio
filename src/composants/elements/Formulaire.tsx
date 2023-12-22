"use client";

import React, { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { bangla } from "@/app/font";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";


export interface FormData {
	nom: string;
	email: string;
	contenu: string;
}

const ContactForm: React.FC = () => {

	const validationSchema = yup.object().shape({
		nom: yup.string().required('Ce champ est obligatoire'),
		email: yup
			.string()
			.email("Format d'email incorrect")
			.required("Ce champ est obligatoire"),
		contenu: yup
			.string()
			.required("Ce champ est obligatoire")
			.min(5, "Le contenu doit avoir au moins 5 caractères"),
	});

	  const {
		register,
		handleSubmit,
		formState: { errors, isValid },
		setError,
		reset,
	  } = useForm({
		resolver: yupResolver(validationSchema),
		mode: "onChange",
	  });
	  const [showModal, setShowModal] = useState(false);

	  const closeModal = () => {
		setShowModal(false);
	  };

	const onSubmitHandler: SubmitHandler<FieldValues> = async (data) => {
		try {
			const res = await fetch("/api/contact", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data),
			});
			const result = await res.json();

			if (result.message === "EMAIL_SYNTAX_INCORRECT") {
				setError("email", {
					type: "manual",
					message: "Vérifier votre e-mail",
				});
			if (!res.ok) {
				throw new Error(`HTTP error! status: ${res.status}`);
			}
			} if (result.message === 'EMAIL_SENT_SUCCESSFULLY') {
				setShowModal(true);
				reset();
			  }
		} catch (error) {
			console.log(`Fetch Error: ${error}`);
		}
	};

	return (
		<div className="formulaire__contact">
			<h2 className={bangla.className}>Contact :</h2>
			<p>"Pour boire un café et se rencontrer"</p>
			<form onSubmit={handleSubmit(onSubmitHandler)}>
				<label>
					Nom :
					<input type="text" id="nom" {...register("nom")} />
				</label>
				<label>
					Email* :
					<input
						type="email"
						id="email"
						{...register("email", { required: true })}
					/>
					{errors.email && <small><FontAwesomeIcon icon={faTriangleExclamation} />{errors.email.message}</small>}
				</label>
				<label>
					Message* :
					<textarea
						id="contenue"
						{...register("contenu", { required: true })}></textarea>
					{errors.contenu && <small><FontAwesomeIcon icon={faTriangleExclamation} />{errors.contenu.message}</small>}
				</label>
				<button
          type="submit"
          className={isValid ? "button-active": ""}
          disabled={!isValid}
        >
          Envoyer
        </button>
			</form>
		 {showModal && ( 
        <div className="modal__formulaire">
          <div className="modal__formulaire__content">
            <p>Votre e-mail a été envoyé avec succès !</p>
            <button onClick={closeModal}>Fermer</button>
          </div>
        </div>
       )} 
		</div>
	);
};

export default ContactForm;
