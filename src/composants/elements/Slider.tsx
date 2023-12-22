// components/Slider.tsx
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

interface SliderProps {
	sliderData: string[];
}

const Slider: React.FC<SliderProps> = ({ sliderData }) => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setCurrentIndex(Number(event.target.value));
	};

	const handlePrevClick = () => {
		setCurrentIndex(
			(prevIndex) => (prevIndex - 1 + sliderData.length) % sliderData.length
		);
	};

	const handleNextClick = () => {
		setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderData.length);
	};

	const progressPercentage = ((currentIndex + 1) / sliderData.length) * 100;

	return (
		<div className="main__slider">	
      <div className="main__slider__image">
				{sliderData.map((imageUrl, index) => (
					<img
						key={index}
						src={imageUrl}
						alt={`Image ${index + 1}`}
						style={{ display: index === currentIndex ? "block" : "none" }}
					/>
				))}
				<div className="main__slider__image__bouton">
          <div className="main__slider__image__bouton-fleche"><FontAwesomeIcon icon={faArrowLeft} onClick={handlePrevClick} /></div>
					<div className="main__slider__image__bouton-fleche"><FontAwesomeIcon icon={faArrowRight} onClick={handleNextClick} /></div>		
				</div>
			</div>
      <p>
					Image: {currentIndex + 1} / {sliderData.length}
				</p>
			</div>
	);
};

export default Slider;
