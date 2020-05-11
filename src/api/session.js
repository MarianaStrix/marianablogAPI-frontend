import axios from "axios";


const CSRF_COOKIE_NAME = "csrftoken";
const CSRF_HEADER_NAME = "X-CSRFToken";
const TOKEN = localStorage.getItem("TOKEN_STORAGE_KEY");
const session = axios.create({
  xsrfCookieName: CSRF_COOKIE_NAME,
  xsrfHeaderName: CSRF_HEADER_NAME,
  headers: { "Authorization": `Token ${TOKEN}`},
});

export default session;
