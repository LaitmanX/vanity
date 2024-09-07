import Image from "next/image";

export default function Header() {
  return (
    <header className="flex flex-col text-center text-oranges bg-black">
      <h1 className="text-3xl">THE FASTEST VANITY ADDRESS GENERATOR</h1>
      <p className="text-xl text-foreground">
        Unleash Style. Generate sleek vanity addresses with a modern twist and
        make your mark in the digital era.
      </p>
      <div className="flex justify-between items-end ml-6 md:ml-16 mb-3">
        <div>
          <p className="text-5xl">10X</p>
          <p className="text-xs">FASTER</p>
        </div>
        <div>
          <p className="text-5xl">4+</p>
          <p className="text-xs">BLOCKCHAINS</p>
        </div>
        <div>
          <p className="text-5xl">40B</p>
          <p className="text-xs">GENERATED</p>
        </div>
        <Image
          priority={true}
          className="-mb-6"
          src="/images/dog.gif"
          alt="Dog animation demonstrating happiness"
          width={150}
          height={150}
          unoptimized={true}
        />
      </div>
    </header>
  );
}
