"use client";

import React from "react";
import { redirect } from "next/navigation";
import { useSelector } from "react-redux";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const user = useSelector((state: any) => state.persisted.user.currentUser);
  if (!user) {
    return <>{children}</>;
  } else {
    redirect("/");
  }
};

export default Layout;
