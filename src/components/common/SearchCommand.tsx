import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
    User,
    Home,
    Info,
    Package,
    Wrench,
    Stethoscope,
    Briefcase,
    Phone,
    FileText,
    Pill,
} from "lucide-react";

import {
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
} from "@/components/ui/command";
import { products } from "@/lib/products";
import { blogPosts } from "@/lib/blog";

export const SearchCommand = ({ open, setOpen }: { open: boolean; setOpen: (open: boolean) => void }) => {
    const navigate = useNavigate();

    useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                setOpen(true);
            }
        };

        document.addEventListener("keydown", down);
        return () => document.removeEventListener("keydown", down);
    }, [setOpen]);

    const runCommand = (command: () => void) => {
        setOpen(false);
        command();
    };

    const pages = [
        { title: "Home", href: "/", icon: Home },
        { title: "About Us", href: "/about", icon: Info },
        { title: "Services", href: "/services", icon: Wrench },
        { title: "Products", href: "/products", icon: Package },
        { title: "Careers", href: "/careers", icon: Briefcase },
        { title: "Contact", href: "/contact", icon: Phone },
        { title: "Blog", href: "/blog", icon: FileText },
    ];

    const specialized = [
        { title: "Clinical Trials", href: "/clinical-trials", icon: Stethoscope },
        { title: "Healthcare Professionals", href: "/healthcare-professionals", icon: User },
    ];

    return (
        <CommandDialog open={open} onOpenChange={setOpen}>
            <CommandInput placeholder="Type a command or search..." />
            <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup heading="Pages">
                    {pages.map((page) => (
                        <CommandItem
                            key={page.href}
                            value={page.title}
                            onSelect={() => runCommand(() => navigate(page.href))}
                        >
                            <page.icon className="mr-2 h-4 w-4" />
                            <span>{page.title}</span>
                        </CommandItem>
                    ))}
                </CommandGroup>
                <CommandSeparator />
                <CommandGroup heading="Specialized">
                    {specialized.map((page) => (
                        <CommandItem
                            key={page.href}
                            value={page.title}
                            onSelect={() => runCommand(() => navigate(page.href))}
                        >
                            <page.icon className="mr-2 h-4 w-4" />
                            <span>{page.title}</span>
                        </CommandItem>
                    ))}
                </CommandGroup>
                <CommandSeparator />
                <CommandGroup heading="Products">
                    {products.map((product) => (
                        <CommandItem
                            key={product.id}
                            value={product.name}
                            onSelect={() => runCommand(() => navigate(`/products#product-${product.id}`))}
                        >
                            <Pill className="mr-2 h-4 w-4" />
                            <span>{product.name}</span>
                        </CommandItem>
                    ))}
                </CommandGroup>
                <CommandSeparator />
                <CommandGroup heading="Blog Posts">
                    {blogPosts.map((post) => (
                        <CommandItem
                            key={post.id}
                            value={post.title}
                            onSelect={() => runCommand(() => navigate(`/blog/${post.id}`))}
                        >
                            <FileText className="mr-2 h-4 w-4" />
                            <span>{post.title}</span>
                        </CommandItem>
                    ))}
                </CommandGroup>
            </CommandList>
        </CommandDialog>
    );
};
