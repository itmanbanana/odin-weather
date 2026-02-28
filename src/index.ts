import { Location } from "./location.js";
import { Weather } from "./weather.js";
  
// let data = Weather.query(28.54, -81.38)
// .then((res: any) => {
//   console.log(res);
// })
// .catch((error) => console.error(error));

let loc = Location.query("London")
.then((res: any) => {
  console.log(res);
})
.catch((error) => console.error(error));