import * as emailjs from "emailjs-com";

// emailjs.init("user_5kv07hYcPfyGPjzOjdc8i");

const service_id = "service_6vywwc1";
const template_id = "template_ppoaem8";
const user_id = "user_5kv07hYcPfyGPjzOjdc8i";

export default (params) => emailjs.send(service_id, template_id, params, user_id)
