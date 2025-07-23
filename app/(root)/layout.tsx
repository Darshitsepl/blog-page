import Header from "@/components/Header";
import React from "react";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="bg-[#f5f5f5] min-h-screen w-full flex">
			<Header />
			<main className="ml-[200px] w-full p-6">
				<div className="max-w-full mx-auto bg-white rounded-xl shadow-md p-6">
					{children}
				</div>
			</main>
		</div>
	);
};

export default MainLayout;
