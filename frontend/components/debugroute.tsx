'use client';
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
// a component i made to test out routing 
const DebugRoute = () => {
  const router = useRouter(); // initialize next/naviations router thing

  const routes = [ //hard code the routes that we have made 
    { name: "Landing", path: "/" },
    { name: "Login", path: "/login" },
    { name: "Profile", path: "/profile" },
    { name: "Signup", path: "/signup" },
    { name: "Items", path: "/items" },
  ];

  return (
    <div>
      <h1>Routing Buttons</h1>
      <div>
        {routes.map((route) => ( 
          <Button key={route.path} onClick={() => router.push(route.path)}>
            {route.name}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default DebugRoute;