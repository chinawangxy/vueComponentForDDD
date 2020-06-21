const URL = {
  BASE_URL:
    process.env.NODE_ENV === "production" ? "dev" : "http://localhost:3001"
};
export { URL };
