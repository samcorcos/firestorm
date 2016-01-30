defmodule Firestorm.Router do
  use Firestorm.Web, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/", Firestorm do
    pipe_through :browser # Use the default browser stack

    get "/", PageController, :index
  end

  scope "/user", Firestorm do
    pipe_through :api

    get "/me", UserController, :show
  end

  scope "/auth", Firestorm do
    pipe_through :api

    get "/", AuthController, :test
  end
end
