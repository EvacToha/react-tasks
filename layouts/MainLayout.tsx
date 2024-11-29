﻿import {Outlet} from "react-router-dom";
import Header from "../views/Header";

const MainLayout = () => {
    return <div>
        <Header/>
        <main>
            <Outlet/>
        </main>
    </div>;

}


export default MainLayout;