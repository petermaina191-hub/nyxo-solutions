import { Mail, Lock } from "lucide-react";
import { AuthShell } from "@/components/AuthShell";
import { Field } from "@/components/Field";
import { Button } from "@/components/Button";

export default function LoginPage() {
  return (
    <AuthShell
      title="Welcome back"
      subtitle="Log in to manage your project with Nyxo Solutions."
      switchText="New here?"
      switchLabel="Create an account"
      switchHref="/signup"
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        <Field icon={<Mail size={16} />} type="email" placeholder="Email" />
        <Field icon={<Lock size={16} />} type="password" placeholder="Password" />
        <Button type="submit" style={{ width: "100%", marginTop: 4 }}>
          Log in
        </Button>
      </div>
    </AuthShell>
  );
}
