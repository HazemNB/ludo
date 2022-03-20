import React from 'react'
import { useState, useEffect } from "react";
import '@coreui/coreui/dist/css/coreui.min.css'
// import 'bootstrap/dist/css/bootstrap.min.css'
import {
    CNavbar, CContainer, CNavbarBrand, CNavbarToggler, CCollapse, CNavbarNav,
    CNavItem, CNavLink, CDropdown, CDropdownToggle, CDropdownMenu, CDropdownItem,
    CDropdownDivider, CForm, CFormInput, CButton
} from '@coreui/react';
import { getAuth, signOut } from "firebase/auth";
import { Navigate } from 'react-router-dom';
import "../Css/Home.css"

const CustomNav = ({CurrentUser,  }) => {
    const Logout = () => {

        const auth = getAuth();
        signOut(auth).then(() => {
            <Navigate to="/" />;
        }).catch((error) => {
            // An error happened.
        });
    }

    const [visible, setVisible] = useState(false)
    return (
        <>
            <CNavbar expand="lg" colorScheme="dark" className="bg-dark">
                <CContainer fluid>
                    <CNavbarBrand href="#" onClick={() => SetCurrentViewClick ("HomeContent")}>Ludo Coin</CNavbarBrand>
                    <CNavbarToggler onClick={() => setVisible(!visible)} />
                    <CCollapse className="navbar-collapse" visible={visible}>
                        <CNavbarNav  >
                            <CNavItem>
                                <CNavLink href="#" onClick={() => SetCurrentViewClick ("HomeContent")} active>
                                    Home
                                </CNavLink>
                            </CNavItem>
                            <CNavItem>
                            <CDropdown  variant="nav-item" popper={false}>
                            <CDropdownToggle color="secondary">Game</CDropdownToggle>
                            <CDropdownMenu>
                                <CDropdownItem href="#" onClick={() => SetCurrentViewClick ("FindGame")}>Find Games</CDropdownItem>
                                <CDropdownItem href="#" onClick={() => SetCurrentViewClick ("CreateGame")}>Create New Game</CDropdownItem>
                                <CDropdownDivider />
                                <CDropdownItem href="/Offline">Play Offline</CDropdownItem>
                            </CDropdownMenu>
                        </CDropdown>
                            </CNavItem>

                            <CNavItem>
                                <CNavLink href="#" disabled>
                                    Market Place
                                </CNavLink>
                            </CNavItem>
 
                        </CNavbarNav>

                        <CNavbarNav className='ddpos'>

                        <CDropdown  variant="nav-item" popper={false}>
                            <CDropdownToggle color="secondary">{UserData.Name + "      "}, Gold: {UserData.Gold + "      "} </CDropdownToggle>
                            <CDropdownMenu>
                                <CDropdownItem href="#">Profile</CDropdownItem>
                                <CDropdownItem href="#">Settings</CDropdownItem>
                                <CDropdownDivider />
                                <CDropdownItem href="#" onClick={() => Logout()}>Logout</CDropdownItem>
                            </CDropdownMenu>
                        </CDropdown>
                        </CNavbarNav>
                        

                        {/* <CForm className="d-flex">
                            <CFormInput type="search" className="me-2" placeholder="Search" />
                            <CButton type="submit" color="success" variant="outline">
                                Search
                            </CButton>
                        </CForm> */}
                    </CCollapse>
                </CContainer>
            </CNavbar>
        </>
    )
}

export default CustomNav