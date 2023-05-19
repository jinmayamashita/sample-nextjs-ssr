export function LayoutSection({ children }: React.PropsWithChildren) {
  return <section style={style}>{children}</section>;
}

const style: React.CSSProperties = {
  boxSizing: "border-box",
  width: 320,
  height: 240,
  boxShadow:
    "rgba(0, 0, 0, 0.1) 0px 1px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
  overflow: "scroll",
  borderRadius: 4,
};
