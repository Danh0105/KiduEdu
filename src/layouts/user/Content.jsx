import { Outlet } from "react-router-dom";


export default function Content() {

    return (
        <div style={{ marginTop: "250px" }}>

            <Outlet />
        </div>
    );
}
