export const flipVar = (variable, setVariable, delay) => {
	let timer;
	if (variable) {
		timer = setTimeout(() => {
			setVariable(false);
		}, delay);
	}
	return () => {
		timer && clearTimeout(timer);
	};
};
