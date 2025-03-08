"use client"

import { atom, useAtom } from "@repo/store"

const countAtom = atom(0)

export default function Home() {

  const [count, setCount] = useAtom(countAtom)
  return (
    <div>

      <h1 className="hover:text-3xl not-hover::text-xl font-bold underline">
        Hi from tailwind

      </h1>
      <div>{count}</div>
      <button onClick={() => {
        setCount(count + 1)
      }} >Click </button>
    </div>

  )
}
