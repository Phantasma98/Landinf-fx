// Function to fetch data from an API with authentication
export const customFetch = async (
  path,
  setLoad,
  options = { method: "GET" },
) => {
  try {
    const responseData = await fetch(path, {
      cache: "no-cache",
      method: options.method || "GET",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        ...options.headers,
      },
      body: options.body ? JSON.stringify(options.body) : undefined,
    });

    const data = await responseData.json();

    if (!responseData.ok) {
      throw new Error(data.error || "Request failed");
    }

    if (setLoad) {
      setLoad(data);
    }
    return data;
  } catch (err) {
    console.error(err);
    toast.error("Помилка при запиті до сервера");
    throw err;
  }
};
//Приклад customFetch
// await customFetch(
//   `/api/dashboard?period=${period}&user=${user}`,
//   (data) => {
//     setRawData(data.dashboardData);
//     setLoadingData(false);
//   },
//   (err) => {
//     console.error("API /api/dashboard error:", err);
//   }
// );
//Приклад customFetch
