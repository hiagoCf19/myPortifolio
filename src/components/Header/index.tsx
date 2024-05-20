import { MenuIcon } from "lucide-react";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet";
import Nav from "./navegations";
import { Button } from "../ui/button";


const Header = () => {
  return (
    <>
      <header className="fixed top-0 right-0 left-0  flex flex-col justify-center w-full sm:px-40 py-5 border-b border-foreground px-5 bg-background mt-0 z-50 ">
        <nav className="flex justify-between items-center w-full ">
          <h1 className="sm:text-xl text-lg font-medium">
            Hiago Ferreira
          </h1>
          <div className="hidden sm:block">
            <div className="flex items-center sm:gap-8 text-xl ">
              <Nav to={"sobre-mim"} content={"Sobre mim"} />
              <Nav to={"habilidades"} content={"Habilidades"} />
              <Nav to={"projetos"} content={"Projetos"} />
              <Nav to={"contatos"} content={"Contatos"} />
            </div>
          </div>
          <Sheet >
            <SheetTrigger asChild>
              <Button size={"icon"} variant={"default"} className="bg-background border border-primary hover:bg-accent text-muted">
                <MenuIcon />
              </Button>
            </SheetTrigger>
            <SheetContent className="border-none">
              <SheetHeader>
                <SheetTitle className="text-muted mb-6 text-xl">Hiago Ferreira</SheetTitle>
                <SheetDescription className="flex flex-col space-y-5 ">

                  <h3 className="text-lg text-start font-medium">Navegação</h3>
                  <div className="flex flex-col gap-4 text-base justify-start items-start">
                    <Nav to={"sobre-mim"} content={"Sobre mim"} />
                    <Nav to={"habilidades"} content={"Habilidades"} />
                    <Nav to={"projetos"} content={"Projetos"} />
                    <Nav to={"contatos"} content={"Contatos"} />
                  </div>

                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>


        </nav>
      </header>
      <div className="h-[81px] "></div>
    </>





  );
};

export default Header;
