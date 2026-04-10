import { getConfig } from "../actions";
import ConfigUI from "./ConfigUI";

export const metadata = {
  title: "Admin Panel",
};

export default async function ConfigPageServer() {
  const config = await getConfig();
  return <ConfigUI initialConfig={config} />;
}
