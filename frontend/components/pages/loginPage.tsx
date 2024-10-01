import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useRouter } from "next/navigation";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // API request for login logic here...

      setErrorMessage('');
      router.push('/dashboard'); // Redirect on successful login (example route)
    } catch {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      setErrorMessage('Failed to log in');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Label>Email</Label>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <Label>Password</Label>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Login</button>
      {errorMessage && <p>{errorMessage}</p>}
    </form>
  );
};

export default LoginPage;