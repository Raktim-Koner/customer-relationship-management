// export const API_URL = "https://api.jsonbin.io/v3/b/68a35031d0ea881f405c99dd";
// export const API_KEY = "$2a$10$G/HlnQAYpisDw2MDqTuJqefIWbRD3NM39enboXGgbNomTtQZiSmYG";

const BASE_URL = "https://crm-server-dun.vercel.app";

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

/* =========================
   DEAL APIs
========================= */

export const getDeals = async () => {
  const response = await fetch(`${BASE_URL}/deals`);
  return response.json();
};

export const addDeal = async (data) => {
  const response = await fetch(`${BASE_URL}/deals`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });

  return response.json();
};

export const deleteDeal = async (id) => {
  const response = await fetch(`${BASE_URL}/deals/${id}`, {
    method: "DELETE"
  });

  return response.json();
};

/* =========================
   PROJECT APIs
========================= */

export const getProjects = async () => {
  const response = await fetch(`${BASE_URL}/projects`);
  return response.json();
};

export const addProject = async (data) => {
  const response = await fetch(`${BASE_URL}/projects`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });

  return response.json();
};

export const deleteProject = async (id) => {
  const response = await fetch(`${BASE_URL}/projects/${id}`, {
    method: "DELETE"
  });

  return response.json();
};

/* =========================
   TASK APIs
========================= */

export const getTasks = async () => {
  const response = await fetch(`${BASE_URL}/tasks`);
  return response.json();
};

export const addTask = async (data) => {
  const response = await fetch(`${BASE_URL}/tasks`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });

  return response.json();
};

export const deleteTask = async (id) => {
  const response = await fetch(`${BASE_URL}/tasks/${id}`, {
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

/* =========================
   ACCOUNT APIs
========================= */

export const getAccounts = async () => {
  const response = await fetch(`${BASE_URL}/accounts`);
  return response.json();
};

export const addAccount = async (data) => {
  const response = await fetch(`${BASE_URL}/accounts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });

  return response.json();
};

export const deleteAccount = async (id) => {
  const response = await fetch(`${BASE_URL}/accounts/${id}`, {
    method: "DELETE"
  });

  return response.json();
};