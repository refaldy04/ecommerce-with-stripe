import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import RoomIcon from "@mui/icons-material/Room";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="flex-1 flex flex-col p-5 gap-5">
        <h1>RESHOP.</h1>
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </p>
        <div className="flex gap-3">
          <div className="w-10 h-10 rounded-full text-white bg-[#4267B2] flex justify-center items-center cursor-pointer">
            <FacebookIcon />
          </div>
          <div className="w-10 h-10 rounded-full text-white bg-[#C13584] flex justify-center items-center cursor-pointer">
            <InstagramIcon />
          </div>
          <div className="w-10 h-10 rounded-full text-white bg-[#1DA1F2] flex justify-center items-center cursor-pointer">
            <TwitterIcon />
          </div>
          <div className="w-10 h-10 rounded-full text-white bg-[#E60023] flex justify-center items-center cursor-pointer">
            <PinterestIcon />
          </div>
        </div>
      </div>
      <div className="flex-1 p-5 hidden lg:block">
        <h3 className="mb-8">Useful Links</h3>
        <ul className="flex flex-wrap gap-y-2">
          <li className="w-1/2">Home</li>
          <li className="w-1/2">Cart</li>
          <li className="w-1/2">Man Fashion</li>
          <li className="w-1/2">Woman Fashion</li>
          <li className="w-1/2">Accessories</li>
          <li className="w-1/2">My Account</li>
          <li className="w-1/2">Order Tracking</li>
          <li className="w-1/2">Whislist</li>
          <li className="w-1/2">Term</li>
        </ul>
      </div>
      <div className="flex-1 flex flex-col p-5 gap-y-5">
        <h3>Contact</h3>
        <p>
          <RoomIcon /> Dayeuhkolot Street 20, Bandung 40432
        </p>
        <p>
          <LocalPhoneIcon /> +62 82123123456
        </p>
        <p>
          <MailOutlineIcon /> contact@reshop.com
        </p>
        <Image
          src="/images/credit.png"
          alt="payments"
          width={600}
          height={300}
        />
      </div>
    </div>
  );
};

export default Footer;
