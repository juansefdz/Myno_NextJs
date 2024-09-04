"use client";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";


export default function Header() {
  return (
    <Popover className="container mx-auto flex items-center border-b-2 px-4 py-2 h-20 ">
      <h1>MyNotes</h1>

      <div className="grow">
        <div className="hidden sm:flex items-center justify-center gap-2 md:gap-8 font-bold   ">
          <Link href="/" className=" hover:text-gray-400">
            Home
          </Link>

          <Link href="/MyTasks" className=" hover:text-gray-400">
            My Task&apos;s
          </Link>

          <Link href="/Contact" className=" hover:text-gray-400">
            Contact
          </Link>
        </div>
      </div>
      <div className="flex grow items-center justify-end sm:hidden">
        <PopoverButton
          className={
            "inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
          }
        >
          <span className="sr-only">Open Menu</span>
          <Bars3Icon className="h-6 w-6" aria-hidden="true" />
        </PopoverButton>
      </div>

      <PopoverPanel
        focus
        className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden"
      >
        <div className="rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 divide-y-2 divide-gray-50">
          <div className="px-5 pt-5 pb-6">
            <div className="flex items-center justify-between">
              <h1>MyNotes</h1>
              <div className="-mr-2">
                <PopoverButton
                  className={
                    "inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                  }
                >
                  <span className="sr-only">Close Menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </PopoverButton>
              </div>
            </div>
            <div className="mt-6">
              <nav className="grid gap-y-8">
                <Link
                  className="focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 px-2"
                  href="home"
                >
                  Home
                </Link>
                <Link
                  className="focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 px-2"
                  href="home"
                >
                  Home
                </Link>
                <Link
                  className="focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 px-2"
                  href="home"
                >
                  Home
                </Link>
                <Link
                  className="focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 px-2"
                  href="contact"
                >
                  Contact
                </Link>
              </nav>
            </div>
            <div className="mt-6 flex flex-col items-center gap-2">
              <Link
                href="register"
                className="rounded-mg bg-white px-4 text-sm font-medium text-black md:text-xl w-full border-2 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 "
              >
                Sing Up
              </Link>
              <Link
                href="register"
                className="rounded-mg bg-white px-4 text-sm font-medium text-black md:text-xl w-full border-2 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
              >
                LogIn
              </Link>
            </div>
          </div>
        </div>
      </PopoverPanel>
      <div className="hidden sm:block">
        <Link href="register" className="mr-2 font-bold">
          Sing Up
        </Link>
        <Link href="login" className="mr-2 font-bold">
          LogIn
        </Link>
      </div>
    </Popover>
  );
}
