import { T } from "@/components/shared";

export default function PageShell({ children }) {
  return (
    <main
      id="main-content"
      role="main"
      className="page-fade"
      style={{ background: T.bg2, minHeight: "100vh", paddingTop: 88 }}
    >
      {children}
    </main>
  );
}
