// app/page.tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <main className="h-screen w-full flex flex-col">
      {/* Navigation */}
      <nav className="px-8 py-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold">SIG STUDIO</h1>
        <ul className="flex space-x-6">
          <li>
            <Link href="#about" className="text-lg">
              About
            </Link>
          </li>
          <li>
            <Link href="#features" className="text-lg">
              Features
            </Link>
          </li>
          <li>
            <Link href="#contact" className="text-lg">
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      {/* Hero */}
      <section className="flex-grow flex items-center justify-center px-8">
        <div className="max-w-2xl text-center space-y-6">
          <h2 className="text-5xl font-extrabold">
            Craft Your Signature
            <br /> With Creativity
          </h2>
          <p className="text-lg text-muted-foreground">
            Transform your professional identity with AI-generated signature
            art.
          </p>
          <Button size="lg" asChild>
            <Link href="/generate">Create My Signature</Link>
          </Button>
        </div>
      </section>

      {/* Footer or additional sections can go here */}
    </main>
  );
}
