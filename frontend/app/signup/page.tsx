import DebugRoute from "@/components/common/debugroute";
import SignupPage from "@/components/pages/signupPage";

export default function Home() {
  return (
    <div>
      <header/>
      <h1>Signup Page</h1> {/* Placeholder to make sure routing is working */}
      <SignupPage/>
      <DebugRoute />
    </div>
  );
}
