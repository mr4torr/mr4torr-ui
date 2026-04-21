import { mergeProps, useRender } from "@base-ui/react";
import { cn } from "@mr4torr/ui/lib/utils";
import type { VariantProps } from "class-variance-authority";
import type { LinkHTMLAttributes } from "react";
import { buttonVariants } from "./button";

interface LinkButtonProps
    extends useRender.ComponentProps<"a", LinkHTMLAttributes<HTMLAnchorElement>>,
        VariantProps<typeof buttonVariants> {}

function LinkButton({ className, variant = "default", size = "default", render, ...props }: LinkButtonProps) {
    return useRender({
        defaultTagName: "a",
        render,
        props: mergeProps<"a">(
            {
                className: cn(buttonVariants({ variant, size, className })),
            },
            props,
        ),
    });
}

export { LinkButton };
