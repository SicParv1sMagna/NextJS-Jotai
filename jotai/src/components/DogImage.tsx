'use client'
import { useHydrateAtoms } from "jotai/utils"
import { Suspense } from "react";
import { dogImage } from "~/store"

export const DogImage = ({ image = { message: '' } }) => {
  useHydrateAtoms([[dogImage, image]], {
    dangerouslyForceHydrate: true,
  },);

  const reloadPage = () => {
    window.location.reload();
  }

  return (
    <Suspense fallback="Loading...">
      <div style={{ display: "flex", flexDirection: "column" }}>
        <button onClick={() => reloadPage()}>Reload</button>
        <img src={image.message} alt="dog"></img>
      </div>
    </Suspense>
  )
}