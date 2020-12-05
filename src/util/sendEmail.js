const emailEndpoint = 'https://elaroussi.herokuapp.com/api/email';

export const sendEmail = async body => {
	const res = await fetch(emailEndpoint, {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(body),
	});

	if (!res.ok) throw new Error();
	return res.json();
};
