"use client";
import Link from "next/link";
import { useForm } from "react-hook-form";
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
import { useDispatch } from "react-redux";
import { signupResolver } from "@/utils/validation"; // Adjust path as per your project structure
import { AppDispatch } from "../../../redux/store";
import { signup } from "@/redux/signupSlice";
import { SignupFormValues } from "@/utils/types";
export default function SignupForm() {
  const dispatch: AppDispatch = useDispatch();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<SignupFormValues>({
    resolver: signupResolver, // Set the resolver to use Yup validation
  });

  const onSubmit = async (data: SignupFormValues) => {
    const {
      firstName,
      lastName,
      email,
      phoneNumber,
      confirmPassword,
      password,
    } = data;
    try {
      await dispatch(
        signup(
          firstName,
          lastName,
          email,
          phoneNumber,
          confirmPassword,
          password
        )
      );
      // Handle success (optional)
    } catch (error) {
      // Handle failure (optional)
      console.error("Signup failed:", error);
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
            <CardTitle className="text-2xl">Sign Up</CardTitle>
            <CardDescription>
              Enter your information to create an account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="firstName">First name</Label>
                <Input
                  id="firstName"
                  type="text"
                  placeholder="Enter your first name"
                  {...register("firstName")}
                />
                {errors.firstName && (
                  <p className="text-red-500">{errors.firstName.message}</p>
                )}
              </div>
              <div className="grid gap-2">
                <Label htmlFor="lastName">Last name</Label>
                <Input
                  id="lastName"
                  type="text"
                  placeholder="Enter your last name"
                  {...register("lastName")}
                />
                {errors.lastName && (
                  <p className="text-red-500">{errors.lastName.message}</p>
                )}
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  {...register("email")}
                />
                {errors.email && (
                  <p className="text-red-500">{errors.email.message}</p>
                )}
              </div>
              <div className="grid gap-2">
                <Label htmlFor="phoneNumber">Phone number</Label>
                <Input
                  id="phoneNumber"
                  type="text"
                  placeholder="Enter your phone number"
                  {...register("phoneNumber")}
                />
                {errors.phoneNumber && (
                  <p className="text-red-500">{errors.phoneNumber.message}</p>
                )}
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  {...register("password")}
                />
                {errors.password && (
                  <p className="text-red-500">{errors.password.message}</p>
                )}
              </div>
              <div className="grid gap-2">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  placeholder="Confirm your password"
                  {...register("confirmPassword")}
                />
                {errors.confirmPassword && (
                  <p className="text-red-500">{errors.confirmPassword.message}</p>
                )}
              </div>
              <Button type="submit" className="w-full">
                Create an account
              </Button>
              <Button variant="outline" className="w-full">
                Sign up with GitHub
              </Button>
            </form>
            <div className="mt-4 text-center text-sm">
              Already have an account?{" "}
              <Link href="/login" className="underline">
                Sign in
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
