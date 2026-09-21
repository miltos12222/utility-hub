export interface WorkspaceItem {
  id: string;
  title: string;
  type: string;
  content: string;
  date: string;
}

// Συνάρτηση αποθήκευσης στο Vault
export function saveItemToWorkspace(title: string, type: string, content: string) {
  try {
    const existing = JSON.parse(localStorage.getItem("utility_hub_workspace") || "[]");
    const newItem: WorkspaceItem = {
      id: Date.now().toString(),
      title,
      type,
      content,
      date: new Date().toLocaleDateString("el-GR"),
    };
    localStorage.setItem("utility_hub_workspace", JSON.stringify([newItem, ...existing]));
    return true;
  } catch (e) {
    console.error("Failed to save to workspace", e);
    return false;
  }
}

// Συνάρτηση για πραγματικό download αρχείου κειμένου (TXT)
export function downloadFile(filename: string, content: string, mimeType = "text/plain;charset=utf-8") {
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
