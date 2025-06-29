// app/page.tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="h-screen w-full flex flex-col bg-[#fffdf9]">
      {/* Navigation */}
      <nav className="px-8 py-6 flex justify-between items-center">
        <Image
          src="/logo.png"
          alt="SIG Studio Logo"
          className="h-12 md:h-16 lg:h-20 w-auto"
          width={0}
          height={0}
          sizes="(max-width: 768px) 48px, (max-width: 1024px) 64px, 80px"
          priority
        />
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
          <Image
            src="/logo_black_square.png"
            alt="SIG Studio Black Square Logo"
            className="mx-auto h-40 md:h-64 lg:h-80 w-auto"
            width={0}
            height={0}
            sizes="(max-width: 768px) 160px, (max-width: 1024px) 256px, 320px"
            priority
          />
          <p className="text-lg text-muted-foreground mt-44">
            Design unique email signatures that match your personality.
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
