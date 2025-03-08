import { PrismaClient } from "@repo/db/client"

export default function Home() {
  return (
    <h1 className="hover:text-3xl not-hover::text-xl font-bold underline">
      Hi from tailwind

    </h1>

  )
}
