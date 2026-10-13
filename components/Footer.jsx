import React from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";

const Footer = () => {
  return (
    <footer>
      <div className="flex flex-col md:flex-row items-start justify-center px-6 md:px-16 lg:px-32 gap-10 py-14 border-b border-gray-500/30 text-gray-500">
        <div className="w-4/5">
          <Image className="w-28 md:w-32" src={assets.logo} alt="logo" />
          <p className="mt-6 text-sm">
            Introducing KALPAVYA — A Full-Stack E-Commerce Platform Inspired by the ancient Indian idea of Kalpavriksha — the wish-fulfilling tree, KALPAVYA represents a modern place where customers can discover and find what they are looking for.
          </p>
        </div>

        <div className="w-1/2 flex items-center justify-start md:justify-center">
          <div>
            <h2 className="font-medium text-gray-900 mb-5">Company</h2>
            <ul className="text-sm space-y-2">
              <li>
                <a className="hover:underline transition" href="#">Home</a>
              </li>
              <li>
                <a className="hover:underline transition" href="#">About us</a>
              </li>
              <li>
                <a className="hover:underline transition" href="#">Contact us</a>
              </li>
              <li>
                <a className="hover:underline transition" href="#">Privacy policy</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-1/2 flex items-start justify-start md:justify-center">
          <div>
            <h2 className="font-medium text-gray-900 mb-5">Get in touch</h2>
            <div className="flex flex-row items-center gap-4">
              <a
                className="inline-flex h-[35px] w-[35px] items-center justify-center hover:opacity-80"
                href="https://www.linkedin.com/in/rajdip-mondal-54a877296/"
                target="_blank"
                rel="noreferrer"
              >
                <Image src={assets.linkedin_icon} alt="linkedin_icon" width={35} height={35} />
              </a>
              <a
                className="inline-flex h-[35px] w-[35px] items-center justify-center hover:opacity-80"
                href="https://github.com/Rajdip03"
                target="_blank"
                rel="noreferrer"
              >
                <Image src={assets.github_icon} alt="github_icon" width={35} height={35} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <p className="py-4 text-center text-xs md:text-sm">
        Copyright 2026 © Rajdip Mondal  All Right Reserved.
      </p>
    </footer>
  );
};

export default Footer;