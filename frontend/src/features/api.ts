export const url = "http://localhost:5000/api";

export const setHeaders: any = () => {
  const headers = {
    headers: {
      "x-auth-token": localStorage.getItem("token"),
    },
  };

  return headers;
};

