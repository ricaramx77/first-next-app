import Image from "next/image";

export default function Header() {
    return (
      <>
        <Image src="/logo.png" alt="A server surrounded by magic sparkles." width={500} height={500} />
              <h1>Welcome to my page!</h1>
      </>
    );
  }