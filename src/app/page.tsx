 import Link from "next/link";
import { db } from "~/server/db";

// tip 2 : once a page is deployed on vercel, it caches on the server and hence it doesn't update dynamically
// to force it to update, you can use the dynamic variable below
export const dynamic = "force-dynamic";

const fakeUrls = [
  "https://utfs.io/f/fb10db4d-e943-423f-8d17-1e332c6a254d-dun1mq.webp",
  "https://utfs.io/f/b6f901ed-9f1d-4408-ae6b-36719ab61175-itsrey.png",
  "https://utfs.io/f/b6f901ed-9f1d-4408-ae6b-36719ab61175-itsrey.png"
]

const fakeImages = fakeUrls.map((url, index) => ({
  id: index+1,
  url, 
}))

export default async function HomePage() {
  
  const posts = await db.query.posts.findMany();
  // tip 1: this component is running on a server and not on client side
  // previously in react land, your component ran both on server and client side, 
  // but now in next.js, it only runs on server, which means you can 
  // do db call and don't have to worry about it
  // that's why this console log --> console.log(posts); won't work

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-r from-rose-100 to-teal-100 text-gray text-xl font-bolder">
      <span className= "p-4 font-bold">Which do you prefer</span>
      <div className = "flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key = {post.id}> {post.name} </div>
        ))}
        {/* don't use index as a key */}
        {[...fakeImages, ...fakeImages, ...fakeImages, ...fakeImages, ...fakeImages].map((image, index) => (
          //cool trick to add fake mock datas
          <div key={image.id + "-" + index} className="w-52">
            <img src = {image.url} alt="image" className="w-full h-52 object-cover"/>
          </div>
        ))}
      </div>
    </main>
  );
}
