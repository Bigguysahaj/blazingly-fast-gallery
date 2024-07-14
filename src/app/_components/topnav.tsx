"use client"

import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import { useRouter } from "next/navigation"
import { UploadButton } from "~/utils/uploadthing"

export function TopNav() {
  const router = useRouter()

  return (
    <nav className="flex w-full justify-between items-center border-b p-4 text-xl font-semibold">
      <div>Gallery</div>

      <div className="flex flex-row">
        <SignedOut>
          <SignInButton/>
        </SignedOut>
        <SignedIn>
          {/* can't write on-complete call here because this is not client component */}
          <UploadButton 
            endpoint="imageUploader" 
            onClientUploadComplete={() => {
              //Router refresh is magical!!! re-runs the route on the server,
              // and sends you required stuff to update content.
              router.refresh()
            }}
          />
          <UserButton/>
        </SignedIn>
      </div>

    </nav>
  )
}