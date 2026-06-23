"use client";

//#region Imports
import * as React from "react";

import { createPortal } from "react-dom";

import type { InvoiceFormValues } from "./data";
import { InvoicePaper } from "./invoice-paper";
//#endregion

export function PrintInvoice({ invoice }: { invoice: InvoiceFormValues }) {
  //#region PrintInvoice
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  //#endregion

  return createPortal(
    <div data-print-root>
      <InvoicePaper invoice={invoice} />
    </div>,
    document.body,
  );
}
