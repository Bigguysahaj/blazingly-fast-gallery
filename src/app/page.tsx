import { SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";
import { db } from "~/server/db";

// tip 2 : once a page is deployed on vercel, it caches on the server and hence it doesn't update dynamically
// to force it to update, you can use the dynamic variable below
export const dynamic = "force-dynamic";

const Images = async() => {
   
  // by default the order of images would be from the oldest to newest
  const images = await db.query.images.findMany({
    // to reverse the order
    orderBy: (model, {desc}) => desc(model.id)
  });

  // tip 1: this component is running on a server and not on client side
  // previously in react land, your component ran both on server and client side, 
  // but now in next.js, it only runs on server, which means you can 
  // do db call and don't have to worry about it
  // that's why this console log --> console.log(posts); won't work

  return(
    <div className = "flex flex-wrap gap-4 p-4">
      {/* don't use index as a key */}
      {/* {[...images, ...images, ...images, ...images].map((image, index) => (
        //cool trick to add fake mock datas */}
      {images.map((image) => (
        <div key={image.id} className="flex w-52 flex-col">
          <img src={image.url} className="aspect-square object-cover rounded-lg"/>
          <div className="py-4 m-4 rounded-lg bg-slate-200">{image.name}</div>
        </div>
      ))}
    </div>
  )
}

export default async function HomePage() {
  return (
    <main className="">
      <SignedOut>
        <div className="h-full w-full text-2l text-center">Please Sign up above</div>
      </SignedOut>
      <SignedIn>
        <Images/>
      </SignedIn>
    </main>
  );
}
