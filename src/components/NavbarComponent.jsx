
import { Outlet, NavLink } from "react-router-dom";
import { Navbar, Dropdown, Button, Menu } from "react-daisyui";

import NavbarElement from "./NavbarElement";

import ThemeToggle from "./ThemeToggle";
import Logo from "./Logo";


function NavbarComponent(args) {
    return (
        <>

            <div className="z-50 flex w-full component-preview p-4 items-center justify-center gap-2 font-sans fixed top-[0]">
                <Navbar >
                    <Navbar.Start>


                        <Dropdown>
                            <Button color="ghost" tabIndex={0} className="lg:hidden ">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h8m-8 6h16"
                                    />
                                </svg>
                            </Button>
                            <Dropdown.Menu tabIndex={0} className="w-52 menu-compact mt-3">

                                <NavbarElement link='/cartography'>
                                    Visual Cartography
                                </NavbarElement>

                                <Dropdown className="dropdown-hover dropdown-right nav-link">
                                    <Button tabIndex={0} color="ghost" className="text-transform-none nav-link m1">
                                        Maps <svg
                                            className="fill-current"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={20}
                                            height={20}
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                                        </svg>
                                    </Button>
                                    <Dropdown.Menu className="p-2 bg-base-100" >


                                        <NavbarElement link='/util_maps'>
                                            Utilitarian
                                        </NavbarElement>

                                        <NavbarElement link='/decorative'>
                                            Decorative
                                        </NavbarElement>


                                    </Dropdown.Menu>
                                </Dropdown>

                                <NavbarElement link='/contact'>
                                    Contact
                                </NavbarElement>

                            </Dropdown.Menu>
                        </Dropdown>

    
                        <Logo link='/'>
                        <svg style={{display:'inline'}} xmlns="http://www.w3.org/2000/svg" width={17} height={17}  viewBox="0 0 384 512"><path d="M384 192c0 87.4-117 243-168.3 307.2c-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192C0 86 86 0 192 0S384 86 384 192z"/></svg>
                            map-salad
                        </Logo>

                    </Navbar.Start>


                    <Navbar.Center className="hidden lg:flex ">
                        <Menu horizontal className="p-0">

                            <NavbarElement link='/cartography'>
                                Visual Cartography
                            </NavbarElement>

                            <Dropdown >
                                <Button tabIndex={0} color="ghost" className="text-transform-none nav-link">
                                    Maps <svg
                                        className="fill-current"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={20}
                                        height={20}
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                                    </svg>
                                </Button>
                                <Dropdown.Menu className="p-2 bg-base-100">


                                    <NavbarElement link='/util_maps'>
                                        Utilitarian
                                    </NavbarElement>



                                    <NavbarElement link='/decorative'>
                                        Decorative
                                    </NavbarElement>


                                </Dropdown.Menu>
                            </Dropdown>



                            <NavbarElement link='/contact'>
                                Contact
                            </NavbarElement>

                        </Menu>

                    </Navbar.Center>


                    <Navbar.End>
                        <ThemeToggle light='catppuccin-mocha' dark='morning' /> {/* coffe/luxury */}
                        {/*<Button>Get started</Button>*/}
                    </Navbar.End>
                </Navbar>


            </div>
            <Outlet />
        </>



    );
};

export default NavbarComponent;