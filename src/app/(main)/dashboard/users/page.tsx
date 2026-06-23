//#region Imports
import { users } from "./_components/data";
import { Users } from "./_components/users";
//#endregion

export default function Page() {
  return <Users users={users} />;
}
