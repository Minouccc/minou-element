import { makeInstaller } from "@minou-element/utils";
import components from "./components";
import "@minou-element/theme/index.css";

const installer = makeInstaller(components);

export * from "@minou-element/components";
export default installer;
