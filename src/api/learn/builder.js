import {createBuilder} from '@ibnlanre/portal'
import { AUTHAPI } from "./axios-config";

//creating a builder
export const builder = createBuilder({
  auth: {
    api: {
      login: (data) => AUTHAPI.post("/api/auth/login/", data),
      forgetPassword: (data) =>
        AUTHAPI.post("/api/auth/forget-password/", data),
      verifyPin: (paylode) =>
        AUTHAPI.post("/api/auth/verify-pin/", paylode),
      passwordreset: (data) =>
        AUTHAPI.post("/api/auth/reset-password/", data),
      activityLog: () => AUTHAPI.get("/api/address/{id}/update"),
      activityLogExorted: () => AUTHAPI.get("/api/auth/activity-log/export"),
      activityLogSorted: () => AUTHAPI.post("/api/auth/activity-log/sorted"),
    },
  }})