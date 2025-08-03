import type { FetchOptions } from "./definitions"

const api = {
  get: async <TResponse>(url: string, options?: FetchOptions) => {
    try {
      const response = await fetch(url, options);
      const data = await response.json();
      return data as TResponse;
    } catch (error) {
      console.log("Fetch (GET) error: ", error);
      throw new Error("Failed to retrieve data");
    }
  }
}

export default api;