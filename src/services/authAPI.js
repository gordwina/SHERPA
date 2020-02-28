import axios from "axios";
import jwtDecode from "jwt-decode";

function logout() {
    window.localStorage.removeItem("authToken");
    delete axios.defaults.headers["Authorization"];
}

function authenticate(credentials) {
    axios.post("http://vps791823.ovh.net/api/login_check", credentials)
        .then(response => response.data.token)
        .then(async token => {
            // Stocker le token dans le localStorage
            window.localStorage.setItem("authToken", token);
            // On indique a Axios qu'on possède un header sur nos requetes HTTP
            setAxiosToken(token);
        })
}

function setAxiosToken(token) {
    axios.defaults.headers["Authorization"] = "Bearer " + token;
}

function setup() {
    const token = window.localStorage.getItem("authToken");
    if (token) {
        const {exp: expiration} = jwtDecode(token);
        if (expiration * 1000 > new Date().getTime()) {
            setAxiosToken(token);
        }
    }
}

function isAuthenticated() {
    const token = window.localStorage.getItem("authToken");
    if (token) {
        const {exp: expiration} = jwtDecode(token);
        if (expiration * 1000 > new Date().getTime()) {
            return true;
        }
        return false;
    }
    return false;
}

/*
function test() {
    return axios
        .get("http://vps791823.ovh.net/api/hopitauxes")
        .then(response => response.data["hydra:member"]);
}*/

export default {
    authenticate,
    logout,
    setup,
    isAuthenticated
};