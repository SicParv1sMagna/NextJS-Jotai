import Link from 'next/link';
import { getDogImagePhoto } from '~/api/getDogImage';
import { DogImage } from '~/components/DogImage';
import { dogImage, myStore } from '~/store';

export default async function IndexPage() {
  // const initialImage = await getDogImagePhoto("page.tsx");
  const image = await myStore.get(dogImage);

  // myStore.set(dogImage, initialImage);

  return (
    <>
      <nav>
        <Link href="/about">About</Link>
      </nav>
      <h1>Index page</h1>
      <article>
        <DogImage image={image} />
      </article>
    </>
  )
}