 import Link from "next/link";

const fakeUrls = [
  "https://utfs.io/f/fb10db4d-e943-423f-8d17-1e332c6a254d-dun1mq.webp",
  "https://utfs.io/f/b6f901ed-9f1d-4408-ae6b-36719ab61175-itsrey.png"
]

const fakeImages = fakeUrls.map((url, index) => ({
  id: index+1,
  url, 
}))

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-r from-rose-100 to-teal-100 text-gray text-xl font-bolder">
      <span className= "p-4 font-bold">Which do you prefer</span>
      <div className = "flex flex-wrap gap-4">
        {[...fakeImages, ...fakeImages, ...fakeImages, ...fakeImages, ...fakeImages].map((image) => (
          //cool trick to add fake mock datas
          <div key={image.id} className="w-52">
            <img src = {image.url} alt="image" className="w-full h-52 object-cover"/>
          </div>
        ))}
      </div>
    </main>
  );
}
