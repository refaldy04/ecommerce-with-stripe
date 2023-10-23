import axios from "axios";

const BASE_URL = "https://clever-shoe-ant.cyclic.app/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MjUxNTcxOGI0ZDFhMDc5YWIzMjQyZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5ODA2NDQzMCwiZXhwIjoxNjk4MzIzNjMwfQ.-hxoCgv_P2aaPlgTddS-GkftkuDO3FI6IdocGtKBN6o";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest: any = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
