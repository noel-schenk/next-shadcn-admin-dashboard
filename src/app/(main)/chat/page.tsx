//#region Imports
import { Chat } from "./_components/chat";
import { conversations } from "./_components/data";
//#endregion

export default function Page() {
  return <Chat conversations={conversations} />;
}
