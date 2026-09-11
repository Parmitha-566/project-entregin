import api from "./api";

// Dashboard statistics
export const getDashboardStats = () =>
    api.get("/dashboard");

// Beneficiaries
export const getBeneficiaries = () =>
    api.get("/beneficiaries");

// Schemes
export const getSchemes = () =>
    api.get("/schemes");

// Channel Partners
export const getPartners = () =>
    api.get("/partners");

// Analytics
export const getAnalytics = () =>
    api.get("/analytics");

// Map
export const getMapData = () =>
    api.get("/map");