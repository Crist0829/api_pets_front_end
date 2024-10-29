import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BASE_URL_API } from "@/config";
import { AuthLayout } from "@/layouts/AuthLayout";
import useAuthStore from "@/stores/AuthStore";
import { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import api from "@/services/api";

export function Login() {
  const navigate = useNavigate();
  const { authenticate } = useAuthStore();

  async function handleLogin(e: FormEvent) {
    e.preventDefault();

    const idForm = e.currentTarget.id;
    const url =
      idForm === "form-register"
        ? `${BASE_URL_API}/auth/register`
        : `${BASE_URL_API}/auth/login`;

    const formData = new FormData(e.currentTarget as HTMLFormElement);
    const dataToSend = {
      email: formData.get("email"),
      password: formData.get("password"),
      name: formData.get("name"),
    };

    try {
      const res = await api.post(url, dataToSend);
      const data = res.data;
      // Success: guarda el token y autentica al usuario
      localStorage.setItem("access_token", data.access_token);
      authenticate({
        email: data.email as string,
        name: data.name as string ?? "",
        userId: data.id

      });
      navigate("/feed");
    } catch (error: any) {
      // Error: muestra mensajes de error
      const messages = error.response?.data?.message || [
        "Error en el servidor",
      ];
      messages.forEach((msg: string) => toast.error(msg));
      console.error("Error:", error);
    }
  }

  return (
    <AuthLayout>
      <div className="grid place-content-center min-h-[60vh]">
        <Tabs defaultValue="login" className="w-[400px]">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="register">Register</TabsTrigger>
          </TabsList>

          {/* LOGIN */}
          <TabsContent value="login">
            <form onSubmit={handleLogin} id="form-login">
              <Card>
                <CardHeader>
                  <CardTitle>Login</CardTitle>
                  <CardDescription>
                    Make changes to your login here. Click save when you're
                    done.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="space-y-1">
                    <Label htmlFor="login-email">Email</Label>
                    <Input
                      id="login-email"
                      name="email"
                      type="email"
                      placeholder="Pedro Duarte"
                    />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="login-password">Password</Label>
                    <Input
                      id="login-password"
                      name="password"
                      placeholder="********"
                      type="password"
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button type="submit">Login</Button>
                </CardFooter>
              </Card>
            </form>
          </TabsContent>

          {/* REGISTER */}
          <TabsContent value="register">
            <form onSubmit={handleLogin} id="form-register">
              <Card>
                <CardHeader>
                  <CardTitle>Register</CardTitle>
                  <CardDescription>
                    Change your register here. After saving, you'll be logged
                    out.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="space-y-1">
                    <Label htmlFor="register-name">Name</Label>
                    <Input
                      id="register-name"
                      name="name"
                      placeholder="Pedro Duarte"
                    />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="register-email">Email</Label>
                    <Input
                      id="register-email"
                      name="email"
                      type="email"
                      placeholder="Pedro@gmail.com"
                    />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="register-password">Password</Label>
                    <Input
                      id="register-password"
                      name="password"
                      placeholder="********"
                      type="password"
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button type="submit">Register</Button>
                </CardFooter>
              </Card>
            </form>
          </TabsContent>
        </Tabs>
      </div>
    </AuthLayout>
  );
}
