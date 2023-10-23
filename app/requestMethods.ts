import axios from "axios";

const BASE_URL = "https://clever-shoe-ant.cyclic.app/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MjUxNTcxOGI0ZDFhMDc5YWIzMjQyZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5Nzc2MzM4NSwiZXhwIjoxNjk4MDIyNTg1fQ.GKa4jGfGxxuPfhawRwHHiG45l5mBytzJK0IVfoUF0Fs";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest: any = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
