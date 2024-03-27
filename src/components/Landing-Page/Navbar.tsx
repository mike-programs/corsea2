
import DesktopNav from "./DesktopNav"
import MobileNav from "./MobileNav"

export default function Navbar() {
    return (
        <div>
            <div className="md:hidden">
                <MobileNav />
            </div>

            <div className="hidden md:block">
                <DesktopNav />
            </div>
        </div>
    )
}