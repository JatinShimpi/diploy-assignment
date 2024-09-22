import Button from "./Button";
import NavbarItem from "./NavbarItem";

function Header() {
  return (
    <header className="bg-white shadow-md">
      <nav className="z-50 bg-white">
        <div className="h-10vh flex justify-between gap-10 lg:py-5 px-20  py-20 border-b">
          <div className="flex items-center flex-1">
            <h2 className="text-3xl font-bold text-pink-500">hello</h2>
          </div>
          <div>
            <ul className="flex gap-8 text-black mr-16 text-[18px]">
              <NavbarItem text={"Catalog"} />
              <NavbarItem
                text={"How it Works"}
                textData={[
                  "How Printify Works",
                  "Print On Demand",
                  "Printify Quality",
                  "Promise",
                  "What to Sell?",
                ]}
                dropDown={true}
              />
              <NavbarItem text={"Pricing"} />
              <NavbarItem text={"Blog"} />
              <NavbarItem text={"Services"} />
              <NavbarItem text={"Use-cases"} />
              <NavbarItem text={"Need help"} />
              <Button text={"login"} size={"small"} />
              <Button text={"Signup"} size={"small"} />
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
