import { AvatarIcon, Pencil1Icon } from "@radix-ui/react-icons";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import LanguageChanger from "@/components/LanguageChanger";
import {
  MenuIcon,
  CreditCard,
  ShieldQuestion,
  RssIcon,
  MailIcon,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import Link from "next/link";
import { Button } from "./ui/button";
import React from "react";
import { Database } from "@/types/supabase";
import ClientSideCredits from "./realtime/ClientSideCredits";
import Image from "next/image";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export const dynamic = "force-dynamic";

const stripeIsConfigured = process.env.NEXT_PUBLIC_STRIPE_IS_ENABLED === "true";

const packsIsEnabled = process.env.NEXT_PUBLIC_TUNE_TYPE === "packs";

export const revalidate = 0;

export default async function Navbar() {
  const supabase = createServerComponentClient<Database>({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: credits } = await supabase
    .from("credits")
    .select("*")
    .eq("user_id", user?.id ?? "")
    .single();

  return (
    <>
      <div className=" bg-white flex w-full px-4 lg:px-40 py-3  border-b text-center gap-8 justify-between ">
        {!user && (
          <div className="flex gap-2 h-full ">
            <Link href="/">
              <h2 className=" font-medium  text-2xl items-center   flex">
                <Image src="/logo.png" width={20} height={20} alt="Logo" />{" "}
                <span className=" mt-1 ml-1 pb-1 px-2 text-xl">
                  Photoshoot 4u
                </span>{" "}
              </h2>
            </Link>
          </div>
        )}
        {!user && (
          <div className="md:block hidden  lg:ml-auto align-items: flex-end;  justify-end">
            <Link href="/#How">
              <Button variant={"ghost"}>How it works</Button>
            </Link>
            <Link href="/#Faq ">
              <Button variant={"ghost"}>Faq</Button>
            </Link>
            <Link href="/#Pricing">
              <Button variant={"ghost"}>Pricing</Button>
            </Link>{" "}
          </div>
        )}
        {user && packsIsEnabled && (
          <Link href="/overview/packs">
            <Button variant={"ghost"}>Packs</Button>
          </Link>
        )}
        {user && (
          <div className=" flex flex-row lg:ml-auto  gap-2 ">
            {stripeIsConfigured && (
              <Link href="/get-credits">
                <Button variant={"ghost"}>Buy credits</Button>
              </Link>
            )}
          </div>
        )}{" "}
        <div className=" flex gap-4 lg:ml-auto scroll-smooth">
          {" "}
          {user && (
            <div className="flex flex-row gap-4 text-center align-middle pt-1 justify-center">
              {stripeIsConfigured && (
                <ClientSideCredits creditsRow={credits ? credits : null} />
              )}
              <DropdownMenu>
                <DropdownMenuTrigger asChild className="cursor-pointer">
                  <AvatarIcon height={24} width={24} className="text-sky-600" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuLabel className="text-primary text-center overflow-hidden text-ellipsis">
                    {user.email}
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <form action="/auth/sign-out" method="post">
                    <Button
                      type="submit"
                      className="w-full text-left"
                      variant={"ghost"}>
                      Uitloggen
                    </Button>
                  </form>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          )}{" "}
        </div>{" "}
        {!user && (
          <>
            <div className="md:block hidden  lg:ml-auto align-items: flex-end;  justify-end">
              <Link href="/login">
                <Button className="bg-white hover:bg-gray-100    border text-black">
                  {" "}
                  Login / Register
                </Button>
              </Link>{" "}
            </div>{" "}
          </>
        )}
        <div className=" pt-2 ">
          <LanguageChanger />
        </div>
        <Sheet>
          <div className=" md:hidden mr-4">
            <SheetTrigger>
              <MenuIcon className="mt-3" />
            </SheetTrigger>
            <div className="">
              <SheetContent className="w-[220px] h-[250px] text-black p-1 text-align: leftsm:w-[240px]">
                {" "}
                <div className="overflow-anchor: none;">
                  <ul>
                    <li className="flex flex-col pt-4   ">
                      {" "}
                      <div className="px-2">
                        <LanguageChanger />
                      </div>
                      <Link href="/Examples" className="items-cemter">
                        <Button
                          variant={"ghost"}
                          className="text-l	text-align: left">
                          Examples
                        </Button>
                      </Link>
                      <Link href="/#How" className="items-cemter">
                        <Button
                          variant={"ghost"}
                          className="text-l	text-align: left">
                          How it works
                        </Button>
                      </Link>
                      <Link href="/#Pricing" className="items-cemter">
                        <Button
                          variant={"ghost"}
                          className="text-l	text-align: left">
                          Pricing
                        </Button>
                      </Link>
                      <Link href="/#Faq">
                        <Button variant={"ghost"} className="text-l	">
                          Faq
                        </Button>
                      </Link>
                      <SheetClose asChild>
                        {!user && (
                          <Link href="/login" className="pl-4 pt-4">
                            <Button className="bg-blue-600 hover:bg-blue-500 pl-4">
                              Login / Register
                            </Button>
                          </Link>
                        )}
                      </SheetClose>
                    </li>
                  </ul>
                </div>{" "}
              </SheetContent>{" "}
            </div>
          </div>
        </Sheet>
      </div>
    </>
  );
}
