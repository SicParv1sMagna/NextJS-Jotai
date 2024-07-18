import { useAtom, useAtomValue } from "jotai"
import { useHydrateAtoms } from "jotai/utils"
import Link from "next/link"
import { dogImage, myStore } from "~/store"

export default async function AboutPage() {
  const image = await myStore.get(dogImage);

  return (
    <div>
      <nav>
        <Link href="/">Index</Link>
      </nav>
      <h1>About</h1>
      <p>Demo page for jotai</p>

      <img src={image?.message} alt="Picture from server" />
    </div>
  )
}