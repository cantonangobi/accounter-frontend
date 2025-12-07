import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL; //"http://localhost:8080";

export default axios.create({
	baseURL: BASE_URL,
});

// export function getRequest(url: string, requestHeaders: object) {
// 	let data = null;
// 	axios
// 		.get(url, { headers: requestHeaders })
// 		.then((response) => {
// 			if (response.status === 200) {
// 				// console.log(response.status);
// 				// console.log("response data:", response.data);
// 				data = response.data;
// 			}
// 		})
// 		.catch((error) => {
// 			console.error(error);
// 		});
// 	console.log("Data:", data);
// 	return data;
// }
