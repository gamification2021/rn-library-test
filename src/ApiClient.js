import { create } from "apisauce";
const ApiClient = create({
    baseURL: 'https://v2.jokeapi.dev/joke/Programming?type=twopart',
});

export default ApiClient;