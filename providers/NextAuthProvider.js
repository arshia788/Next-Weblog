'use client';

// ! chon dari client side  anjam midi bayad  behesh begi ke amadeh basheh. 
// in ro miay inja dorost mikoni va wrap mikoni dor layout. 
// inja miay client side ro migi ta faght hamin bashe na on layout ma ke kolesh client side hast.

import { SessionProvider } from "next-auth/react";

export default function NextAuthProvider({children}) {
  return (
    <SessionProvider>
        {children}
    </SessionProvider>
  )
}
