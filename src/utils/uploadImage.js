// Converts a File (from an <input type="file"> or camera capture) into a
// data URL so it can be previewed instantly, client-side, before any
// network upload. Swap the resolve() below for a real POST to
// uploadService.uploadPhoto() when a backend is connected.
export function readFileAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    if (!file) return reject(new Error("No file provided"));
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(file);
  });
}
