'use client';
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const DebugRoute = () => {
  const router = useRouter();

  const routes = [
    { name: "Home", path: "/" },
    { name: "Login", path: "/login" },
    { name: "Signup", path: "/signup" },
    { name: "Edit Profile", path: "/editProfile" },

    { name: "Items", path: "/items" },
    { name: "AdminLogin", path: "/adminlogin" },
    { name: "Admin", path: "/admin" },
    { name: "Signup", path: "/signup" },
  ];

  return (
    <div className="flex justify-center bg-gray-100 space-x-4 py-4">
      {routes.map((route) => (
        <Button
          key={route.path}
          onClick={() => router.push(route.path)}
          className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800"

          {route.name}
        </Button>
      ))}
    </div>
  );
  
};

export default DebugRoute;
