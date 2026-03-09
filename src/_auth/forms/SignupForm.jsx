import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SignUpValidation } from "@/lib/validation/index";
import { FormField } from "@/components/ui/form";
import Loader from "@/components/shared/Loader";
import { Link } from "react-router-dom";

const SignupForm = () => {
  const isLoading = false;
  const form = useForm({
    resolver: zodResolver(SignUpValidation),
    defaultValues: {
      name: "",
      username: "",
      email: "",
      password: "",
    },
  });

  async function onSubmit(data) {
    //create a user
    // const newUser = await createUserAccount(values):
  }

  return (
    <div className=" flex-center flex-col">
      <img className="" src="/assets/images/logo.svg" alt="logo" />

      <h2 className="pt-4  h3-bold md:*:h2-bold sm:*:pt-12">
        Create a new account
      </h2>
      <p className="text-light-3 small-medium md:*:base-regular">
        To use Snapgram ,please enter your account details
      </p>

      <form
        className="flex flex-col gap-5 w-full mt-4"
        id="form-rhf-demo"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <div className="flex flex-col gap-4">
          {/* Title Field */}
          <FormField
            name="name"
            control={form.control}
            render={({ field, fieldState }) => (
              <div
                data-invalid={fieldState.invalid}
                className="flex flex-col gap-1.5"
              >
                <label
                  htmlFor="form-rhf-demo-title"
                  className="text-sm font-medium"
                >
                  Name
                </label>
                <Input
                  type="text"
                  className="shad-input"
                  {...field}
                  id="form-rhf-demo-title"
                  aria-invalid={fieldState.invalid}
                  placeholder="Login button not working on mobile"
                  autoComplete="off"
                />
                {fieldState.invalid && (
                  <p className="text-sm text-destructive">
                    {fieldState.error?.message}
                  </p>
                )}
              </div>
            )}
          />
          <FormField
            name="Username"
            control={form.control}
            render={({ field, fieldState }) => (
              <div
                data-invalid={fieldState.invalid}
                className="flex flex-col gap-1.5"
              >
                <label
                  htmlFor="form-rhf-demo-title"
                  className="text-sm font-medium"
                >
                  Username
                </label>
                <Input
                  type="text"
                  className="shad-input"
                  {...field}
                  id="form-rhf-demo-title"
                  aria-invalid={fieldState.invalid}
                  placeholder="Login button not working on mobile"
                  autoComplete="off"
                />
                {fieldState.invalid && (
                  <p className="text-sm text-destructive">
                    {fieldState.error?.message}
                  </p>
                )}
              </div>
            )}
          />
          <FormField
            name="email"
            control={form.control}
            render={({ field, fieldState }) => (
              <div
                data-invalid={fieldState.invalid}
                className="flex flex-col gap-1.5"
              >
                <label
                  htmlFor="form-rhf-demo-title"
                  className="text-sm font-medium"
                >
                  Email
                </label>
                <Input
                  type="email"
                  className="shad-input"
                  {...field}
                  id="form-rhf-demo-title"
                  aria-invalid={fieldState.invalid}
                  placeholder="Login button not working on mobile"
                  autoComplete="off"
                />
                {fieldState.invalid && (
                  <p className="text-sm text-destructive">
                    {fieldState.error?.message}
                  </p>
                )}
              </div>
            )}
          />
          <FormField
            name="password"
            control={form.control}
            render={({ field, fieldState }) => (
              <div
                data-invalid={fieldState.invalid}
                className="flex flex-col gap-1.5"
              >
                <label
                  htmlFor="form-rhf-demo-title"
                  className="text-sm font-medium"
                >
                  Password
                </label>
                <Input
                  type="password"
                  className="shad-input"
                  {...field}
                  id="form-rhf-demo-title"
                  aria-invalid={fieldState.invalid}
                  placeholder="Login button not working on mobile"
                  autoComplete="off"
                />
                {fieldState.invalid && (
                  <p className="text-sm text-destructive">
                    {fieldState.error?.message}
                  </p>
                )}
              </div>
            )}
          />
        </div>

        <div className="p-4 pt-0 pb-0 flex justify-center gap-3">
          <Button className='w-1/4 active:scale-95' type="button" variant="outline" onClick={() => form.reset()}>
            Reset
          </Button>
          <Button
            className="w-3/4 shad-button_primary active:scale-95"
            type="submit"
            form="form-rhf-demo"
          >
            {isLoading ? (
              <div className="flex-center gap-2">
                <Loader/>Loading...</div>
            ) : (
              "SIgn up"
            )}
          </Button>
          
        </div>
        <p className="text-small-regular  text-light-2 text-center ">
          Already have an account?
          <Link to='/sign-in' className="text-primary-500 text-small-semibold ml-1">Log in</Link>
        </p>
        

      </form>
    </div>
  );
};
export default SignupForm;
