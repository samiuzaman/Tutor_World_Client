import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarCollapseBtn,
  NavbarContainer,
  NavbarList,
  Tooltip,
  TooltipAction,
  TooltipContent,
  TooltipProvider,
} from "keep-react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import Logo from "../assets/tw_logo.png";
import { MdPerson2 } from "react-icons/md";
import useAuth from "../Hook/useAuth";
import { IoMdExit } from "react-icons/io";

const NavbarComponent = () => {
  const location = useLocation();
  console.log(location);
  const { user, handleSignOut } = useAuth();
  const navigate = useNavigate();

  return (
    <Navbar className={`sticky top-0 z-30 px-[2%] lg:px-[7%] shadow-lg`}>
      <NavbarContainer className="mx-auto p-2 md:p-0 ">
        <NavbarBrand>
          {/* <img src={KeepLogo} alt="keep" /> */}
          <Link
            to="/"
            className="flex justify-center items-center text-2xl text-error-400 font-semibold"
          >
            <img className="w-8 h-7" src={Logo} />
            Tutor World
          </Link>
        </NavbarBrand>
        <NavbarList className="space-x-5 ">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/findTutors">Find Tutors</NavLink>
          <NavLink to="/addTutorials">Add Tutorial</NavLink>
          <NavLink to="/myTutorials">My Tutorials</NavLink>
          <NavLink to="/myBookedTutors">My Booked Tutors</NavLink>
        </NavbarList>
        <NavbarList>
          <div>
            {user && user.email ? (
              <div className="flex gap-3 items-center">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipAction asChild>
                      <Avatar>
                        <img
                          referrerPolicy="no-referrer"
                          src={user?.photoURL}
                        />
                        <AvatarFallback>
                          <MdPerson2 className="text-3xl" />
                        </AvatarFallback>
                      </Avatar>
                    </TooltipAction>
                    <TooltipContent
                      side="top"
                      className="bg-primary-500 space-y-4 text-center"
                    >
                      <h2>{user && user.displayName}</h2>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                <Button
                  onClick={handleSignOut}
                  className="text-base hover:bg-primary-500 hover:text-white"
                  variant="outline"
                >
                  <IoMdExit className="mr-1 text-xl" /> Log Out
                </Button>
              </div>
            ) : (
              <div className="space-x-4">
                <Button
                  onClick={() => navigate("/login")}
                  color="primary"
                  className="text-white"
                >
                  Log In
                </Button>
                <Button
                  onClick={() => navigate("/register")}
                  color="primary"
                  className="text-white"
                >
                  Register
                </Button>
              </div>
            )}
          </div>
        </NavbarList>
        <NavbarCollapseBtn />

        <NavbarCollapse className="bg-primary-25 ">
          <div>
            {user && (
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarImage
                    referrerPolicy="no-referrer"
                    src={user?.photoURL}
                  />
                  <AvatarFallback>
                    <MdPerson2 className="text-3xl" />
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p>{user?.displayName}</p>
                  <p>{user?.email}</p>
                </div>
              </div>
            )}
          </div>

          <NavLink to="/">Home</NavLink>
          <NavLink to="/findTutors">Find Tutors</NavLink>
          <NavLink to="/addTutorials">Add Tutorial</NavLink>
          <NavLink to="/myTutorials">My Tutorials</NavLink>
          <NavLink to="/myBookedTutors">My Booked Tutors</NavLink>
          <div>
            {user && user.email ? (
              <Button onClick={handleSignOut} className="text-[#ffffff]">
                Log Out
              </Button>
            ) : (
              <Button
                onClick={() => navigate("/login")}
                className="text-[#ffffff]"
              >
                Log In
              </Button>
            )}
          </div>
        </NavbarCollapse>
      </NavbarContainer>
    </Navbar>
  );
};

export default NavbarComponent;
