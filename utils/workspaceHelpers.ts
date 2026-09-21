export interface WorkspaceItem {
  id: string;
  title: string;
  type: string;
  content: string;
  date: string;
}

// Συνάρτηση αποθήκευσης στο Vault με έλεγχο διπλοεγγραφής
export function saveItemToWorkspace(title: string, type: string, content: string) {
  try {
    const existing: WorkspaceItem[] = JSON.parse(localStorage.getItem("utility_hub_workspace") || "[]");
    
    // Αποφυγή αποθήκευσης ακριβώς του ίδιου περιεχομένου
    const isDuplicate = existing.some(item => item.content === content && item.type === type);
    if (isDuplicate) return;

    const newItem: WorkspaceItem = {
      id: Date.now().toString(),
      title,
      type,
      content,
      date: new Date().toLocaleDateString("el-GR"),
    };
    
    const updated = [newItem, ...existing];
    localStorage.setItem("utility_hub_workspace", JSON.stringify(updated));
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
