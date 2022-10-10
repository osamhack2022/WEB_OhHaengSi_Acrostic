export default function mergeStyles(...styles: string[]) {
  return styles.reduce((prev, cur) => prev + " " + cur.trim(), "");
}
