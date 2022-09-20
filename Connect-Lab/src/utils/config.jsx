export const buildAxiosConfig = () => {
    const token = JSON.parse(localStorage.getItem("meutoken"));
  
    if (!token) {
      throw new Error("O token não está no localStorage!!");
    }
  
    const requestConfig = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
  
    return requestConfig;
};