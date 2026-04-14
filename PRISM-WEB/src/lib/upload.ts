import { storage } from "@/lib/firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

export type ProgressCallback = (progressPercent: number) => void;

export const uploadFilesWithProgress = async (
  files: File[],
  folder: string,
  onProgress?: ProgressCallback
): Promise<string[]> => {
  const urls: string[] = [];

  for (const file of files) {
    const storageRef = ref(storage, `public/${folder}/${Date.now()}-${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    await new Promise<void>((resolve, reject) => {
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          if (onProgress) onProgress(Math.round(progress));
        },
        (err) => reject(err),
        async () => {
          const url = await getDownloadURL(uploadTask.snapshot.ref);
          urls.push(url);
          resolve();
        }
      );
    });
  }

  return urls;
};

export const uploadFiles = (files: File[], folder: string) =>
  uploadFilesWithProgress(files, folder);
