// A template re-mounts on every page change, so this gives each page a short
// fade-and-rise as you navigate between pages.
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="page-enter">{children}</div>;
}
