import { DarkThemeToggle, Flowbite } from "flowbite-react";
import { Footer } from "flowbite-react";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";

const FooterPAHS = () => {
  return (
    <Footer container>
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div className="text-sm">
            <Footer.Brand
              href="https://perryhistoricalsociety.org/"
              src="/images/PAHSSchool.jpg"
              alt="Perry Area Historical Society"
            //   name="Perry Area Historical Society"
            />
            <div>
              <br />
              <br />
              <DarkThemeToggle />
              <h5>Toggle display mode</h5>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-9 sm:mt-4 sm:grid-cols-4 sm:gap-6">
            <div>
              <Footer.Title title="Contact" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Contact Us</Footer.Link>
                <Footer.Link href="#">Membership</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow us" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Github</Footer.Link>
                <Footer.Link href="#">Discord</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="about" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Sponsors & Partners</Footer.Link>
                <Footer.Link href="#">Volunteers</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright
            href="#"
            by="Perry Area Historical Society™"
            year={2024}
          />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsTwitter} />
            <Footer.Icon href="#" icon={BsGithub} />
            <Footer.Icon href="#" icon={BsDribbble} />
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default FooterPAHS;
