"use client"

//#region Imports
import { AspectRatio as AspectRatioPrimitive } from "radix-ui"
//#endregion

function AspectRatio({
  ...props
}: React.ComponentProps<typeof AspectRatioPrimitive.Root>) {
  return <AspectRatioPrimitive.Root data-slot="aspect-ratio" {...props} />
}

export { AspectRatio }
