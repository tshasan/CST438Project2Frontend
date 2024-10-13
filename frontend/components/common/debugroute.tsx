'use client';
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const DebugRoute = () => {
  const router = useRouter();

  const routes = [
    { name: "Home", path: "/" },
    { name: "Login", path: "/login" },
    { name: "Signup", path: "/signup" },
    { name: "Items", path: "/items" },
    { name: "EditProfile", path: "/editprofile" },
    { name: "AdminLogin", path: "/adminlogin" },
    { name: "Admin", path: "/admin" },
  ];

  return (
    <div className="flex flex-wrap gap-2 justify-center bg-gray-100 p-4">
      {routes.map((route) => (
        <Button
          key={route.path}
          onClick={() => router.push(route.path)}
          className="w-full sm:w-auto bg-black text-white rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500"
        >
          {route.name}
        </Button>
      ))}
    </div>
  );
};

export default DebugRoute;
