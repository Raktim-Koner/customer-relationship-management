// export const API_URL = "https://api.jsonbin.io/v3/b/68a35031d0ea881f405c99dd";
// export const API_KEY = "$2a$10$G/HlnQAYpisDw2MDqTuJqefIWbRD3NM39enboXGgbNomTtQZiSmYG";

const BASE_URL = "http://localhost:5000";

/* =================================
   CUSTOMER APIs
================================= */

// Add Customer
export const addCustomer = async (data) => {
  const response = await fetch(`${BASE_URL}/customers`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });

  return response.json();
};

// Get Customers
export const getCustomers = async () => {
  const response = await fetch(`${BASE_URL}/customers`);
  return response.json();
};

// Delete Customer
export const deleteCustomer = async (id) => {
  const response = await fetch(`${BASE_URL}/customers/${id}`, {
    method: "DELETE"
  });

  return response.json();
};


/* =================================
   REPORT APIs
================================= */

// Get Reports
export const getReports = async () => {
  const response = await fetch(`${BASE_URL}/reports`);
  return response.json();
};

// Add Report
export const addReport = async (data) => {
  const response = await fetch(`${BASE_URL}/reports`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });

  return response.json();
};

// Delete Report
export const deleteReport = async (id) => {
  const response = await fetch(`${BASE_URL}/reports/${id}`, {
    method: "DELETE"
  });

  return response.json();
};