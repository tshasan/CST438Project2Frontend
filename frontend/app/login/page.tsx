import DebugRoute from "@/components/common/debugroute";
import LoginPage from "@/components/pages/loginpage";
import loginpage from "@/components/pages/loginpage"

export default function Home() {
  return (
    <div>
      <header/>
      <h1>login Page</h1> {/* Placeholder to make sure routing is working */}
      <LoginPage/>
      <DebugRoute />
    </div>
  );
}
