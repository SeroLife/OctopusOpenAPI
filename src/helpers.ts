import { copyFile, rmdir } from 'fs';

export function getFileExtension(filename: string): string {
  const ext = /^.+\.([^.]+)$/.exec(filename);
  return ext == null ? '' : ext[1];
}

export async function copyFilesAsync(srcFile: string, dstFile: string): Promise<boolean> {
  return new Promise((resolve, reject) => {
    copyFile(srcFile, dstFile, (err) => {
      if (err) {
        reject(err);
      }

      resolve(true);
    });
  });
}

export async function removeDirectoryAsync(dirPath: string): Promise<boolean> {
  return new Promise((resolve, reject) => {
    rmdir(dirPath, (err) => {
      if (err) {
        reject(err);
      }

      resolve(true);
    });
  });
}