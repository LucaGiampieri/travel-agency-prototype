import MainHeader from "../components/MainHeader"

import { Outlet } from "react-router-dom"

function DefaultLayout() {

    return (
        <>
            <MainHeader />
            <Outlet />
        </>
    )
}

export default DefaultLayout
