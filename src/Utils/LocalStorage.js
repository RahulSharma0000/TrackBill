// src/utils/localStorageUtils.js

const STORAGE_KEY = 'receipts';

// ➕ Add receipt to localStorage
export const addReceipt = (receipt) => {
  const existing = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  existing.push(receipt);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(existing));
};

// 📦 Get all receipts
export const getReceipts = () => {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
};

// ❌ Delete a receipt by ID
export const deleteReceipt = (id) => {
  const existing = getReceipts();
  const updated = existing.filter((r) => r.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
};

// 🧹 Clear all receipts
export const clearReceipts = () => {
  localStorage.removeItem(STORAGE_KEY);
};
