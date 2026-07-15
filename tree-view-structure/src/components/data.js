export const Menus = [
    {
        label: "Dashboard",
        to: "/dashboard",
    },
    {
        label: "Products",
        to: "/products",
        children: [
            {
                label: "Inventory",
                to: "inventory",
                children: [
                    {
                        label: "Stock Levels",
                        to: "stock-levels",
                    },
                    {
                        label: "Suppliers",
                        to: "suppliers",
                    },
                ],
            },
            {
                label: "Categories",
                to: "categories",
            },
        ],
    },
    {
        label: "Orders",
        to: "/orders",
        children: [
            {
                label: "Pending",
                to: "pending",
            },
            {
                label: "Shipped",
                to: "shipped",
                children: [
                    {
                        label: "Tracking",
                        to: "tracking",
                    },
                ],
            },
            {
                label: "Returns",
                to: "returns",
            },
        ],
    },
    {
        label: "Customers",
        to: "/customers",
        children: [
            {
                label: "All Customers",
                to: "all",
            },
            {
                label: "Support Tickets",
                to: "tickets",
            },
        ],
    },
    {
        label: "Reports",
        to: "/reports",
        children: [
            {
                label: "Sales",
                to: "sales",
                children: [
                    {
                        label: "Monthly",
                        to: "monthly",
                    },
                    {
                        label: "Yearly",
                        to: "yearly",
                    },
                ],
            },
            {
                label: "Analytics",
                to: "analytics",
            },
        ],
    },
];
export default Menus;