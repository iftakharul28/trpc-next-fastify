export function getRandomNumber(min: number, max: number): string {
  return Math.floor(Math.random() * (max - min + 1) + min).toString();
}
export function bytesToMB(bytes: number): number {
  const MB = 1048576;
  return bytes / MB;
}

export function imagevalidator(name: string | undefined, size: number | undefined): string | null {
  let flag: string | null = null;

  if (name) {
    const getImgExt = name.split('.');
    const imgExtType: Array<string> = ['svg', 'png', 'jpeg', 'jpg'];
    if (!imgExtType.includes(getImgExt[1])) {
      flag = 'Image must be .png,.jpeg,.jpg,.svg';
    } else {
      flag = null;
    }
  }
  if (size) {
    const fileInMB = bytesToMB(size!);
    if (fileInMB > 2) {
      flag = 'Image should be less than 2 MB.';
    } else {
      flag = null;
    }
  }

  return flag;
}
