import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs"

export function TopNav() {
  return (
    <nav className="flex w-full justify-between items-center border-b p-4 text-xl font-semibold">
      <div>Gallery</div>

      <div>
        <SignedOut>
          <SignInButton/>
        </SignedOut>
        <SignedIn>
          <UserButton/>
        </SignedIn>
      </div>

    </nav>
  )
}