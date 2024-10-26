export function fetchAnalyticsData() {
  const url = "http://localhost:8000/api/v1/analytics/";

  return fetch(url, {
    method: "GET", // or 'POST', 'PUT', etc. depending on the API endpoint requirements
    headers: {
      "Content-Type": "application/json",
      // Include any additional headers if needed, e.g., Authorization
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log("Response data:", data);

      return data; // Return the data for further processing
    })
    .catch((error) => {
      console.error("Fetch error:", error);
      throw error; // Re-throw the error for handling by the caller
    });
}

export function fetchPredictDetails() {
  const url = "http://localhost:8000/api/v1/predict/details";

  return fetch(url, {
    method: "GET", // or 'POST', 'PUT', etc. depending on the API endpoint requirements
    headers: {
      "Content-Type": "application/json",
      // Include any additional headers if needed, e.g., Authorization
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log("Response data:", data);

      return data; // Return the data for further processing
    })
    .catch((error) => {
      console.error("Fetch error:", error);
      throw error; // Re-throw the error for handling by the caller
    });
}


export function fetchModelsData() {
  const url = "http://localhost:8000/api/v1/models/";

  return fetch(url, {
    method: "GET", // or 'POST', 'PUT', etc. depending on the API endpoint requirements
    headers: {
      "Content-Type": "application/json",
      // Include any additional headers if needed, e.g., Authorization
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log("Response data:", data);

      return data; // Return the data for further processing
    })
    .catch((error) => {
      console.error("Fetch error:", error);
      throw error; // Re-throw the error for handling by the caller
    });
}





export function getIncomeLevel(input) {
  const colorMap = {
    Middle: "#2662D9",
    Low: "#E23670",
    High: "#E88C30",
  };

  const result = Object.entries(input).map(([key, value]) => ({
    class: key,
    count: (value/1000) * 100,
    fill: colorMap[key] || "var(--color-default)",
  }));
  return result;
}

export function getRegion(input) {
  const colorMap = {
    Punjab: "#2662D9",
    Karnataka: "#E23670",
    "Tamil Nadu": "#E23670",
    Delhi: "#AF57DB",
    Gujarat: "#2EB88A",
    Kerala: "#BB9054",
    Maharashtra: "#E6E5E5",
  };

  const result = Object.entries(input).map(([key, value]) => ({
    state: key,
    count: value,
    fill: colorMap[key] || "var(--color-default)",
  }));
  return result;
}


export function getProductTrend(input){
    let output=[]
    for (let i = 0; i < input[0].length; i+=4) {
         output.push({
           month: input[0][i],
           [input[1][i + 0]]: input[2][i + 0],
           [input[1][i + 1]]: input[2][i + 1],
           [input[1][i + 2]]: input[2][i + 2],
           [input[1][i + 3]]: input[2][i + 3],
         });
       
        
    }
    
    return output

}