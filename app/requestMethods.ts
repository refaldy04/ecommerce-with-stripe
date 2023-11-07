import axios from "axios";

const BASE_URL = "https://clever-shoe-ant.cyclic.app/api/";
let TOKEN = "";
let persistRoot: string | null = "";
if (typeof window !== "undefined") {
  persistRoot = window?.localStorage?.getItem("persist:root");
}

if (persistRoot) {
  try {
    const parsedPersistRoot = JSON.parse(persistRoot);

    if (parsedPersistRoot.user) {
      const currentUser = JSON.parse(parsedPersistRoot.user).currentUser;
      if (currentUser && currentUser.accessToken) {
        TOKEN = currentUser.accessToken;
      }
    }
  } catch (error) {
    console.error("Error parsing localStorage data:", error);
  }
}

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest: any = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
