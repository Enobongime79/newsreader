import { SquareLibrary, X, Menu } from "lucide-react";
import { Button } from "../../components/ui/button";

function Navbar(){
  return (
    <div className="font-[Inter_Tight] flex flex-row items-center py-4 px-4 lg:px-16 border">
      <div className="text-xl flex flex-row items-center gap-2 font-semibold">
        <SquareLibrary />
        <h1 className="">iReader</h1>
      </div>
      <div className="ms-auto items-center font-[Geist] text-xl gap-2 flex flex-row">
        <Button variant="link" className="hover:cursor-pointer">Log in</Button>
        <Button className="rounded-full px-3 hover:cursor-pointer">Sign up</Button>
        <Menu className="lg:hidden" />
      </div>
    </div>
  )
}

export default Navbar;
