fetch("https://api.meteo.lt/v1/places")
	.then((response) => response.json())
	.then((placesJson) => {
		const selectInput = document.getElementById("places");

		placesJson.length = 100;
		console.log(placesJson);
		placesJson.forEach((place) => {
			const optionNode = document.createElement("option");
			optionNode.innerText = place.name;
			optionNode.value = place.code;
			selectInput.append(optionNode);
		});
	});

const selectInput = document.getElementById("places");

const onSelect = () => {
	const cityCode = selectInput.value;
	fetch(`https://api.meteo.lt/v1/places/${cityCode}/forecasts/long-term`)
		.then((response) => response.json())
		.then((forecastJson) => {
			console.log(forecastJson);
			const forecast = forecastJson.forecastTimestamps[0];
			const mainTag = document.querySelector("main");
			const temperature = document.getElementById("temperature");
			temperature.innerText = `Oro temperatura dabar yra: ${forecast.airTemperature}`;
			console.log(forecast);
		});
};

selectInput.addEventListener("change", onSelect);
