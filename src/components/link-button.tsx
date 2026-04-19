import { cn } from "@mr4torr/ui/lib/utils";
import { type VariantProps } from "class-variance-authority";
import { buttonVariants } from "./button";
import { LinkHTMLAttributes } from "react";
import { mergeProps, useRender } from "@base-ui/react";

interface LinkButtonProps extends useRender.ComponentProps<'a', LinkHTMLAttributes<HTMLAnchorElement>>, VariantProps<typeof buttonVariants> { }

function LinkButton({
    className,
    variant = "default",
    size = "default",
    render,
    ...props
}: LinkButtonProps) {
    return useRender({
        defaultTagName: 'a',
        render,
        props: mergeProps<"a">({
            className: cn(buttonVariants({ variant, size, className }))
        }, props),
    });
}

export { LinkButton };
