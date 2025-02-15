import { api } from "./index";

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
}

export interface SignUpType {
  message: string;
  payload: User;
}

export interface SignInType {
  message: string;
  token: string;
  payload: User;
}

export interface SignInRequest {
  email: string;
  password: string;
}

const authApi = api.injectEndpoints({
  endpoints: (build) => ({
    signUp: build.mutation<SignUpType, Partial<User> & { password: string }>({
      query: (body) => ({
        url: "/auth/sign-up",
        method: "POST",
        body,
      }),
    }),

    signIn: build.mutation<SignInType, SignInRequest>({
      query: (body) => ({
        url: "/auth/sign-in",
        method: "POST",
        body,
      }),
    }),

    verifyOtp: build.mutation<{ token: string }, { email: string; otp: string }>({
      query: (data) => ({
        url: "/auth/send-otp",
        method: "POST",
        body: data,
      }),
    }),

    resendOtp: build.mutation<{ message: string }, { email: string }>({
      query: (data) => ({
        url: "/auth/resend-otp",
        method: "POST",
        body: data,
      }),
    }),
  }),
  overrideExisting: false,
});

export const {
  useSignUpMutation,
  useSignInMutation,
  useVerifyOtpMutation,
  useResendOtpMutation,
} = authApi;
