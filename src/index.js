import { weatherAPI } from "./weather.js";
let data = weatherAPI.query(28.54, -81.38)
    .then((res) => {
    console.log(res);
})
    .catch((error) => console.error(error));
//# sourceMappingURL=index.js.map