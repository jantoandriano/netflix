import { Navbar } from "../components/navbar"

export const PageLayout = ({ children }) => {

    return (
        <>
            <Navbar />
            <div className="p-10 bg-slate-100">
                {children}
            </div>
        </>

    )
}