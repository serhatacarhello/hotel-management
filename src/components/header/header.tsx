"use client";
import Link from "next/link";
import { FaUserCircle } from "react-icons/fa";
import { useSession } from "next-auth/react";
import Image from "next/image";
import DarkMode from "./dark-mode";

const Header = () => {
  const { data: session } = useSession();
  return (
    <header className="py-10 px-4 container mx-auto text-xl flex flex-wrap md:flex-nowrap items-center justify-between">
      <div className="flex items-center w-full md:2/3">
        <Link href="/" className="font-black text-tertiary-dark">
          Hotelzz
        </Link>
        <ul className="flex items-center ml-5">
          <li className="flex items-center">
            {session?.user ? (
              <Link href={`/users/${session.user.id}`}>
                <div className="relative w-8 h-8">
                  {session.user.image ? (
                    <Image
                      src={session.user.image}
                      alt={session.user.name!}
                      fill
                      className="object-contain rounded-full hover:scale-125 transition-transform"
                      placeholder="blur"
                      blurDataURL={`/_next/image?url=${session.user.image}&w=8&q=1`}
                    />
                  ) : (
                    <FaUserCircle className="cursor-pointer" />
                  )}
                </div>
              </Link>
            ) : (
              <Link href="/auth">
                {" "}
                <FaUserCircle className="cursor-pointer" />
              </Link>
            )}
          </li>
          <li className="ml-2">
            <DarkMode />
          </li>
        </ul>
      </div>

      <ul className="flex items-center justify-between w-full md:w-1/3 mt-4">
        <li className="hover:-translate-y-2 duration-500 transition-all pr-1">
          <Link href="/">Home</Link>
        </li>
        <li className="hover:-translate-y-2 duration-500 transition-all pr-1">
          <Link href="/rooms">Rooms</Link>
        </li>
        <li className="hover:-translate-y-2 duration-500 transition-all">
          <Link href="/">Contact</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
