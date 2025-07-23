import Link from "next/link";
import React from "react";

const Header = () => {
	return (
		<aside className="w-[200px] h-screen fixed top-0 left-0 bg-white border-r shadow-sm p-6">
			<nav>
				<ul className="flex flex-col gap-4 text-gray-700 font-medium">
					<li>
						<Link
							href="/"
							className="block hover:text-blue-600 transition-colors"
						>
							Home
						</Link>
					</li>
					<li>
						<Link
							href="/authors"
							className="block hover:text-blue-600 transition-colors"
						>
							Authors
						</Link>
					</li>
					<li>
						<Link
							href="/category"
							className="block hover:text-blue-600 transition-colors"
						>
							Category
						</Link>
					</li>
				</ul>
			</nav>
		</aside>
	);
};

export default Header;
