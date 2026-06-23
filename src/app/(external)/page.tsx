//#region Imports
import { redirect } from "next/navigation";
//#endregion

export default function Home() {
  redirect("/dashboard/default");
  return <>Coming Soon</>;
}
