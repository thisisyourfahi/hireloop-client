'use client'
import { authClient } from "@/lib/auth-client";
import { LayoutSideContentLeft, Bell, Briefcase, Envelope, Gear, House, Magnifier, Person, Bookmark, CreditCard, LayoutList } from "@gravity-ui/icons";
import { Button, Drawer, DrawerCloseTrigger } from "@heroui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const recruiterNavItems = [
    { icon: House, href: "/dashboard/recruiter", label: "Home" },
    { icon: Magnifier, href: "/dashboard/recruiter/jobs", label: "Jobs" },
    { icon: Bell, href: "/dashboard/recruiter/jobs/new", label: "Post A Job" },
    { icon: Briefcase, href: "/dashboard/recruiter/company", label: "Company Profile" },
    { icon: Envelope, href: "/messages", label: "Messages" },
    { icon: Person, href: "/profile", label: "Profile" },
    { icon: Gear, href: "/settings", label: "Settings" },
];

const seekerNavItems = [
    { icon: LayoutList, href: "/dashboard/seeker", label: 'Dashboard'}, 
    { icon: Magnifier, href: "/dashboard/seeker/jobs", label: "Browse & Apply" },
    { icon: Bookmark, href: "/dashboard/seeker/saved", label: "Saved Jobs" },
    { icon: Briefcase, href: "/dashboard/seeker/applications", label: "My Applications" },
    { icon: CreditCard, href: "/dashboard/seeker/billing", label: "Subscription & Billing" },
    { icon: Gear, href: "/dashboard/seeker/settings", label: "Seeker Settings" },
];

const Sidebar = () => {
    const pathName = usePathname();
    const {data:session} = authClient.useSession()
    const user = session?.user;
    const navItems = user?.role === 'seeker' ? [...seekerNavItems] : [...recruiterNavItems];

    const navContent = <nav className="flex flex-col gap-1">
        {navItems.map((item) => (
            <Link
                key={item.label}
                className={`${pathName === item.href ? 'bg-default' : ''} flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-foreground transition-colors hover:bg-default`}
                href={item.href}
            >
                <item.icon className="size-5 text-muted" />
                {item.label}
            </Link>
        ))}
    </nav>

    return (
        <>
            <aside className="hidden w-64 shrink-0 border-r border-default p-4 lg:block">
                {navContent}
            </aside>
            <Drawer>
                <Button className={'lg:hidden'} variant="secondary">
                    <LayoutSideContentLeft />
                    Sidebar
                </Button>
                <Drawer.Backdrop>
                    <Drawer.Content placement="left">
                        <Drawer.Dialog>
                            <DrawerCloseTrigger />
                            <Drawer.Header>
                                <Drawer.Heading>Navigation</Drawer.Heading>
                            </Drawer.Header>
                            <Drawer.Body>
                                {navContent}
                            </Drawer.Body>
                        </Drawer.Dialog>
                    </Drawer.Content>
                </Drawer.Backdrop>

            </Drawer>
        </>
    );
};

export default Sidebar;