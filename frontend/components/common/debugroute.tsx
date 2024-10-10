'use client';
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const DebugRoute = () => {
  const router = useRouter();

  const routes = [
    { name: "Landing", path: "/" },
    { name: "Login", path: "/login" },
    { name: "Profile", path: "/profile" },
    { name: "Items", path: "/items" },
    { name: "AdminLogin", path: "/adminlogin" },
    { name: "Admin", path: "/admin" },
    { name: "Signup", path: "/signup" },
  ];

  return (
    <div className="flex justify-center  bg-gray-100">
      {routes.map((route) => (
        <Button key={route.path} onClick={() => router.push(route.path)} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          {route.name}
        </Button>
      ))}
    </div>
  );
};

export default DebugRoute;
