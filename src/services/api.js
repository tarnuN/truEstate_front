const BASE_URL = "http://127.0.0.1:5000";

function normalize(params = {}) {
  const out = {};
  Object.entries(params).forEach(([k, v]) => {
    if (v === null || v === "" || (Array.isArray(v) && v.length === 0)) return;
    out[k] = Array.isArray(v) ? v.join(",") : v;
  });
  return out;
}

export async function getSales(params = {}) {
  const query = new URLSearchParams(normalize(params)).toString();
  const res = await fetch(`${BASE_URL}/api/sales?${query}`); // add /api
  return res.json();
}

export async function getStats(params = {}) {
  const query = new URLSearchParams(normalize(params)).toString();
  const res = await fetch(`${BASE_URL}/api/stats?${query}`);
  return res.json();
}
