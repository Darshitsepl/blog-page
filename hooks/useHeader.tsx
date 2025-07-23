"use client ";
import React, { useState } from "react";

type Props = {
	btnTitle: string;
	headerTitle: string;
};

type ReturnHeaderProps = {
	renderHeader: () => React.ReactNode;
	isFormShow: boolean;
	openForm: () => void
	closeForm: () => void;
};

const useHeader = ({ btnTitle, headerTitle }: Props): ReturnHeaderProps => {
	const [isFormShow, setIsFormShow] = useState(false);

	const closeForm = () => {
		setIsFormShow(false);
	};
	const renderHeader = () => {
		return (
			<div className="header-container">
				<h2 className="heading">{headerTitle}</h2>
				<button
					className="button"
					onClick={() => setIsFormShow((prev) => !prev)}
				>
					{btnTitle}
				</button>
			</div>
		);
	};

	const openForm = () => {
		setIsFormShow(true)
	}

	return { isFormShow, renderHeader, closeForm, openForm };
};

export default useHeader;
