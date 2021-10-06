export type CustomButtonProps = {
    label: string,
    icon: any,
    type: "ghost" | "link" | "text" | "default" | "primary" | "dashed" | undefined,
    ghost: boolean,
    style: any,
    onClick: () => any
};