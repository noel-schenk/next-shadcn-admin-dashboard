"use client";

//#region Imports
import { FormProvider, useForm, useWatch } from "react-hook-form";

import { defaultInvoiceValues, type InvoiceFormValues } from "./data";
import { InvoiceForm } from "./invoice-form";
import { InvoicePreview } from "./invoice-preview";
//#endregion

export function Invoice() {
  //#region Invoice
  const form = useForm<InvoiceFormValues>({
    defaultValues: defaultInvoiceValues,
  });
  const invoice = useWatch({ control: form.control }) as InvoiceFormValues;
  //#endregion

  return (
    <FormProvider {...form}>
      <form className="grid gap-5 xl:grid-cols-2" noValidate onSubmit={(event) => event.preventDefault()}>
        <InvoiceForm />
        <InvoicePreview invoice={invoice} />
      </form>
    </FormProvider>
  );
}
