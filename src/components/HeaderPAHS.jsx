import { Button, Navbar } from "flowbite-react";

const HeaderPAHS = () => {
return (
  <Navbar fluid rounded>
    
    <Navbar.Brand href="https://flowbite-react.com">
      <img
        src="/images/PAHSSchool.jpg"
        className="mr-3 h-6 sm:h-9"
        alt="Perry Area Historical Society Logo"
      />
      <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
        Perry Area Historical Society
      </span>
    </Navbar.Brand>
    <div className="flex md:order-2">
      <Button>Get started</Button>
      <Navbar.Toggle />
    </div>
    <Navbar.Collapse>
      <Navbar.Link href="#" active>
        Home
      </Navbar.Link>
      <Navbar.Link href="#">About</Navbar.Link>
      <Navbar.Link href="#">Services</Navbar.Link>
      <Navbar.Link href="#">Pricing</Navbar.Link>
      <Navbar.Link href="#">Contact</Navbar.Link>
    </Navbar.Collapse>
  </Navbar>
);
};

export default HeaderPAHS;
