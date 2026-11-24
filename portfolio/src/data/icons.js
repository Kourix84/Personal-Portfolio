// Maps icon file names (src/assets/icons/<name>.svg) to their built URLs.
const modules = import.meta.glob("../assets/icons/*.svg", { eager: true, import: "default" });

const icons = Object.fromEntries(
  Object.entries(modules).map(([path, url]) => [path.split("/").pop().replace(".svg", ""), url])
);

export default function icon(name) {
  return icons[name];
}
