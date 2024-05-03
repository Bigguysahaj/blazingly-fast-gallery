 import Link from "next/link";
import { db } from "~/server/db";

// tip 2 : once a page is deployed on vercel, it caches on the server and hence it doesn't update dynamically
// to force it to update, you can use the dynamic variable below
export const dynamic = "force-dynamic";

export default async function HomePage() {
  
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

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-r from-rose-100 to-teal-100 text-gray text-xl font-bolder">
      <span className= "p-4 font-bold">Which do you prefer</span>
      <div className = "flex flex-wrap gap-4">
        {/* don't use index as a key */}
        {/* {[...images, ...images, ...images, ...images].map((image, index) => (
          //cool trick to add fake mock datas */}
        {[...images, ...images, ...images, ...images].map((image, index) => (
          <div key={image.id + "-" + index} className="w-52">
            <img src = {image.url} alt="image" className="w-full h-52 object-cover"/>
            <div>{image.url}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
