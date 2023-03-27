import axios from "axios";

const baseUrl = "https://restcountries.com/v3.1/all";

const getAll = () => {
	return axios.get(baseUrl);
};

const getFiltered = (searchField) => {
	return axios.get("https://restcountries.com/v3.1/name/" + searchField).catch(error => null);
};

export default {
	getAll,
    getFiltered,
};
