//#region Imports
import { Roles } from "./_components/roles";
import { roles } from "./_components/roles-table/data";
//#endregion

export default function Page() {
  return <Roles roles={roles} />;
}
