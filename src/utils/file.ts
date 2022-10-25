import fs from 'fs';

export const deleteFiles = async (filename: string) => {
  try {
    await fs.promises.stat(filename);
  } catch (err: any) {
    return;
  }

  await fs.promises.unlink(filename);
};
