import cookie from "js-cookie";
import Router from "next/router";

export function handleLogin(token) {
  cookie.set("token", token);
  Router.push("/account");
}

export function redirectUser(ctx, location) {
  if (ctx.req) {
    // if we are on the server
    ctx.res.writeHead(302, { Location: location });
    ctx.res.end();
  } else {
    // if we are on the client
    Router.push(location);
  }
}

export function handleLogout() {
  cookie.remove("token");
  Router.push("/login");
}
