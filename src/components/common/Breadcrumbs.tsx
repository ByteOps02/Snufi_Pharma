import { useLocation, Link } from "react-router-dom";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Home } from "lucide-react";

export const Breadcrumbs = () => {
    const location = useLocation();
    const pathnames = location.pathname.split("/").filter((x) => x);

    // Hide on home page
    if (location.pathname === "/") {
        return null;
    }

    const getReadableName = (path: string) => {
        const formatName = (str: string) =>
            str
                .split("-")
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(" ");

        const customMappings: Record<string, string> = {
            "about": "About Us",
            "healthcare-professionals": "Healthcare Professionals",
            "clinical-trials": "Clinical Trials",
        };

        return customMappings[path] || formatName(path);
    };

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink asChild>
                            <Link to="/" className="flex items-center gap-1">
                                <Home className="h-4 w-4" />
                                <span className="hidden sm:inline">Home</span>
                            </Link>
                        </BreadcrumbLink>
                    </BreadcrumbItem>

                    {pathnames.map((value, index) => {
                        const to = `/${pathnames.slice(0, index + 1).join("/")}`;
                        const isLast = index === pathnames.length - 1;
                        const readableName = getReadableName(value);

                        return (
                            <div key={to} className="flex items-center">
                                <BreadcrumbSeparator />
                                <BreadcrumbItem className="ml-2">
                                    {isLast ? (
                                        <BreadcrumbPage>{readableName}</BreadcrumbPage>
                                    ) : (
                                        <BreadcrumbLink asChild>
                                            <Link to={to}>{readableName}</Link>
                                        </BreadcrumbLink>
                                    )}
                                </BreadcrumbItem>
                            </div>
                        );
                    })}
                </BreadcrumbList>
            </Breadcrumb>
        </div>
    );
};
