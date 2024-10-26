import Link from "next/link"
import { Button } from "./ui/button"

import Nav from "./Nav"

const Header = () => {
  return (
    <header className="py-8 text-white bg-primary">
        <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
            {/* logo */}
            <h1 className="text-4xl font-semibold">
            CRUD
            </h1>
        </Link>
        
        {/* desktop nav & Hire me button*/}
        <div className="xl:flex items-center gap-8">
            <Nav />
        </div>

        {/* mobile nav */}
        <div className="xl:hidden">
            {/* <MobileNav/> */}
        </div>
        </div>
    </header>
  )
}

export default Header