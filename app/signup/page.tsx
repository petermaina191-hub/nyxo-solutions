import { User, Mail, Lock } from "lucide-react";
import { AuthShell } from "@/components/AuthShell";
import { Field } from "@/components/Field";
import { Button } from "@/components/Button";

export default function SignupPage() {
  return (
    <AuthShell
      title="Create your account"
      subtitle="Track your project and stay in touch with the team."
      switchText="Already have an account?"
      switchLabel="Log in"
      switchHref="/login"
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        <Field icon={<User size={16} />} type="text" placeholder="Full name" />
        <Field icon={<Mail size={16} />} type="email" placeholder="Email" />
        <Field icon={<Lock size={16} />} type="password" placeholder="Password" />
        <Button type="submit" style={{ width: "100%", marginTop: 4 }}>
          Create account
        </Button>
      </div>
    </AuthShell>
  );
}
