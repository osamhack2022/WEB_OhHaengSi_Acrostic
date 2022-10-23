type ClassNameType = string | undefined;

export default function mergeClassNames(...styles: ClassNameType[]) {
  return styles.reduce(
    (prev, cur) => (cur ? prev + " " + cur.trim() : prev),
    ""
  );
}
