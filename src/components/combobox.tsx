"use client";

import { Combobox as ComboboxPrimitive } from "@base-ui/react/combobox";
import { cn } from "@mr4torr/ui/lib/utils";
import { CaretDownIcon, CheckIcon, MagnifyingGlassIcon } from "@phosphor-icons/react";
import type * as React from "react";

const ComboboxRoot = ComboboxPrimitive.Root;

interface ComboboxOption {
  id: string;
  label: string;
  disabled?: boolean;
}

function ComboboxInput({
  className,
  placeholder,
  ...props
}: ComboboxPrimitive.Input.Props & {
  placeholder?: string;
}) {
  return (
    <ComboboxPrimitive.Input
      className={cn(
        "flex h-9 w-full min-w-0 rounded-md border border-input bg-background-weak px-2.5 py-1 text-base outline-none transition-[color,box-shadow] md:text-sm",
        "placeholder:text-muted-foreground/50",
        "focus-visible:border-ring focus-visible:bg-ring/5 focus-visible:ring-3 focus-visible:ring-ring/25 dark:focus-visible:bg-ring/10 dark:focus-visible:ring-ring/40",
        "disabled:cursor-not-allowed disabled:opacity-50",
        "aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20",
        "dark:bg-input/30",
        className
      )}
      data-slot="combobox-input"
      placeholder={placeholder}
      {...props}
    />
  );
}

function ComboboxTrigger({
  className,
  ...props
}: ComboboxPrimitive.Trigger.Props) {
  return (
    <ComboboxPrimitive.Trigger
      className={cn(
        "absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground",
        className
      )}
      data-slot="combobox-trigger"
      {...props}
    >
      <CaretDownIcon className="size-4" />
    </ComboboxPrimitive.Trigger>
  );
}

function ComboboxContent({
  className,
  children,
  side = "bottom",
  sideOffset = 4,
  align = "center",
  ...props
}: ComboboxPrimitive.Popup.Props &
  Pick<ComboboxPrimitive.Positioner.Props, "align" | "side" | "sideOffset">) {
  return (
    <ComboboxPrimitive.Portal>
      <ComboboxPrimitive.Positioner
        align={align}
        className="isolate z-50"
        side={side}
        sideOffset={sideOffset}
      >
        <ComboboxPrimitive.Popup
          className={cn(
            "relative z-50 max-h-60 min-w-(--anchor-width) origin-(--transform-origin) overflow-y-auto rounded-md bg-popover/70 p-1 text-popover-foreground shadow-xl ring-1 ring-foreground/10 duration-100 before:pointer-events-none before:absolute before:inset-0 before:-z-1 before:rounded-[inherit] before:backdrop-blur-2xl before:backdrop-saturate-150",
            "data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95",
            className
          )}
          data-slot="combobox-content"
          {...props}
        >
          {children}
        </ComboboxPrimitive.Popup>
      </ComboboxPrimitive.Positioner>
    </ComboboxPrimitive.Portal>
  );
}

function ComboboxList({
  className,
  children,
  ...props
}: ComboboxPrimitive.List.Props) {
  return (
    <ComboboxPrimitive.List
      className={cn("flex flex-col gap-0.5", className)}
      data-slot="combobox-list"
      {...props}
    >
      {children}
    </ComboboxPrimitive.List>
  );
}

function ComboboxItem({
  className,
  children,
  ...props
}: ComboboxPrimitive.Item.Props & {
  disabled?: boolean;
}) {
  return (
    <ComboboxPrimitive.Item
      className={cn(
        "relative flex w-full cursor-default select-none items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden data-disabled:pointer-events-none data-disabled:opacity-50 data-highlighted:bg-foreground/10",
        className
      )}
      data-slot="combobox-item"
      {...props}
    >
      <span className="flex flex-1 shrink-0">{children}</span>
      <ComboboxPrimitive.ItemIndicator
        render={
          <span className="pointer-events-none absolute right-2 flex size-4 items-center justify-center" />
        }
      >
        <CheckIcon className="size-4" />
      </ComboboxPrimitive.ItemIndicator>
    </ComboboxPrimitive.Item>
  );
}

function ComboboxEmpty({ className, children, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("px-2 py-4 text-center text-muted-foreground text-sm", className)}
      data-slot="combobox-empty"
      {...props}
    >
      {children}
    </div>
  );
}

function ComboboxLoading({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("flex items-center justify-center gap-2 px-2 py-4 text-muted-foreground text-sm", className)}
      data-slot="combobox-loading"
      {...props}
    >
      <MagnifyingGlassIcon className="size-4 animate-pulse" />
      Buscando...
    </div>
  );
}

export {
  ComboboxRoot,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
  ComboboxLoading,
  ComboboxTrigger,
};

export type { ComboboxOption };
