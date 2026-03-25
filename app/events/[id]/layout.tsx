import { events } from "@/lib/data"

export function generateStaticParams() {
  return events.map((event) => ({ id: event.id.toString() }))
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
