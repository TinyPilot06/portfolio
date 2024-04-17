import { FC, ReactNode, createContext, useContext, useState } from "react";

// Define the type for the context value
type ScrollContextType = {
	scrollPercent: number;
	updateScrollPercent: (newScrollPercent: number) => void;
};

const ScrollContext = createContext<ScrollContextType | undefined>(undefined);

export const useScroll = (): ScrollContextType => {
	const context = useContext(ScrollContext);

	if (!context) {
		throw new Error('useScroll must be used within a ScrollProvider');
	}

	return context;
};

export const ScrollProvider: FC<{ children: ReactNode }> = ({ children }) => {
	const [scrollPercent, setScrollPercent] = useState<number>(0);

	const updateScrollPercent = (newScrollPercent: number) => {
		// console.log(newScrollPercent);
		setScrollPercent(newScrollPercent);
	};

	return (
		<ScrollContext.Provider value={{ scrollPercent, updateScrollPercent }}>
			{children}
		</ScrollContext.Provider>
	);
};
