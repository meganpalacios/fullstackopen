import axios from "axios";

const baseUrl = "https://api.openweathermap.org/data/2.5/weather?";
const appId = "419a49c45d21bb59720b562e15e935fe";

const getWeather = (lat, lon) => {
	return axios.get(`${baseUrl}lat=${lat}&lon=${lon}&appid=${appId}&units=metric`);
};

export default {
    getWeather
}