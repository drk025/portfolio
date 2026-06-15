import { useState, useEffect } from "react";

const SHEET_ID = "1cMYBnzE2RQk_RJmsWu4gYTa3TQODo1F4UkPiqB2dKSI";

// To find gid: open the sheet tab → look at URL → ...#gid=XXXXXXXXX
// Replace the gid values below with the ones from your sheet URLs
const SHEETS = {
  XI: `https://docs.google.com/spreadsheets/d/${SHEET_ID}/export?format=csv&gid=0`,
  XII: `https://docs.google.com/spreadsheets/d/${SHEET_ID}/export?format=csv&gid=1923737416`,
};

function parseCSV(text) {
  const [headerLine, ...rows] = text.trim().split("\n");
  const headers = headerLine
    .split(",")
    .map((h) => h.trim().replace(/^"|"$/g, ""));
  return rows
    .filter((row) => row.trim())
    .map((row) => {
      const cols = [];
      let current = "";
      let inQuotes = false;
      for (const char of row) {
        if (char === '"') {
          inQuotes = !inQuotes;
        } else if (char === "," && !inQuotes) {
          cols.push(current.trim());
          current = "";
        } else {
          current += char;
        }
      }
      cols.push(current.trim());
      return Object.fromEntries(
        headers.map((h, i) => [h, (cols[i] ?? "").replace(/^"|"$/g, "")]),
      );
    });
}

export function useSheetResources() {
  const [data, setData] = useState({ XI: [], XII: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    Promise.all([
      fetch(SHEETS.XI).then((r) => {
        if (!r.ok) throw new Error("Failed to fetch Class 11 sheet");
        return r.text();
      }),
      fetch(SHEETS.XII).then((r) => {
        if (!r.ok) throw new Error("Failed to fetch Class 12 sheet");
        return r.text();
      }),
    ])
      .then(([xi, xii]) => {
        setData({ XI: parseCSV(xi), XII: parseCSV(xii) });
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const forGrade = (grade) => data[grade.toUpperCase()] ?? [];

  return { forGrade, loading, error };
}
