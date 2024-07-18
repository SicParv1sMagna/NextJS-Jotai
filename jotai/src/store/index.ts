import { atom, createStore } from "jotai";
import { getDogImagePhoto } from "~/api/getDogImage";

const INITIAL_PAGE_NUMBER = 1;

export const pageNumber = atom(INITIAL_PAGE_NUMBER);

export const dogImage = atom(
  async () => {

    const fetchedImage = await getDogImagePhoto("store");

    return fetchedImage || {};
  },
  (_, set, image) => {
    console.log("set", image);
  }
)

// export const dogImage = atom({});

export const myStore = createStore();

myStore.set(dogImage, {});
