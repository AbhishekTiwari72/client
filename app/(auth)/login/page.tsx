"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { login } from "../../../redux/loginSlice";
import { AppDispatch, RootState } from "../../../redux/store";
import { useEffect, useState } from "react";

export interface LoginFormValues {
  email: string;
  password: string;
}

const LoginForm: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state.login); // Get the user from state

  const [isClient, setIsClient] = useState(false);
  const router = useRouter();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<LoginFormValues>();

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (user && isClient) {
      // Redirect based on user role
      if (user?.role === "user") {
        router.push("/profile");
      } else if (user?.role === "developer") {
        router.push("/developer");
      } else {
        router.push("/profile");
      }
    }
  }, [user, isClient, router]);

  const onSubmit = async (data: LoginFormValues) => {
    console.log("Login form submitted with data:", data);
    try {
      await dispatch(login({ email: data.email, password: data.password }));
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 min-h-screen p-4">
      <div className="md:col-span-8 flex justify-center mb-4 md:mb-0">
        <img
          src="/swiper8.jpg"
          alt="Image"
          className="w-full h-auto max-w-full"
        />
      </div>
      <div className="md:col-span-4 flex items-center justify-center">
        <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle className="text-2xl">Login</CardTitle>
            <CardDescription>
              Enter your email below to login to your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  {...register("email", { required: "Email is required" })}
                />
                {errors.email && (
                  <p className="text-red-500">{errors.email.message}</p>
                )}
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <Link
                    href="#"
                    className="ml-auto inline-block text-sm underline"
                  >
                    Forgot your password?
                  </Link>
                </div>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  {...register("password", {
                    required: "Password is required",
                  })}
                />
                {errors.password && (
                  <p className="text-red-500">{errors.password.message}</p>
                )}
              </div>
              <Button type="submit" className="w-full">
                Login
              </Button>
              <Button variant="outline" className="w-full">
                Login with Google
              </Button>
            </form>
            <div className="mt-4 text-center text-sm">
              Don't have an account?{" "}
              <Link href="/signup" className="underline">
                Sign up
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LoginForm;
