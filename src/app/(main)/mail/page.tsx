//#region Imports
import { getValueFromCookie } from "@/server/server-actions";

import { mails } from "./_components/data";
import { MailComponent } from "./_components/mail";
import { DEFAULT_MAIL_LAYOUT, MAIL_LAYOUT_COOKIE } from "./_components/mail-layout-config";
//#endregion

export default async function Page() {
  //#region Page
  const layoutCookie = await getValueFromCookie(MAIL_LAYOUT_COOKIE);
  //#endregion

  return (
    <div className="h-dvh min-h-0 overflow-hidden">
      <MailComponent mails={mails} defaultLayout={layoutCookie ? JSON.parse(layoutCookie) : [...DEFAULT_MAIL_LAYOUT]} />
    </div>
  );
}
