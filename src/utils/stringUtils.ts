export const textLimitter = (text: string, limit: number) => {
	return `${text.substring(0, limit)}...`;
};
