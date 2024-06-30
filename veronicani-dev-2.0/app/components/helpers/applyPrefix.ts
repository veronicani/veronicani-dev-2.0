/** applyPrefix: Applies prefix to every class in class string.
   * E.g. "gray, w-500" -> "hover:gray hover:w-500"
   */
export default function applyPrefix(prefix: String, classesStr: String) {
  const classes = classesStr.split(" ");
  return classes.map((c) => prefix + ":" + c).join(" ");
}