const getBasePath = () => {
  let base_url =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3001"
      : `https://weatherapp-three-tan.vercel.app`;

  return base_url;
};

export default getBasePath;
