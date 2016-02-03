defmodule Firestorm.UserController do
  use Firestorm.Web, :controller

  alias Firestorm.User

  plug :scrub_params, "user" when action in [:create, :update]

  def create(conn, %{"user" => user_params}) do
    changeset = User.create_changeset(%User{}, user_params)

    if changeset.valid? do
      user = Repo.insert(changeset)

      conn
      |> put_flash(:info, "User created successfully.")
      |> Guardian.Plug.sign_in(user, :token)
      |> redirect(to: user_path(conn, :index))
    else
      render(conn, "new.html", changeset: changeset)
    end
  end
  #
  #
  # def create(conn, %{"user" => user_params}) do
  #   changeset = User.changeset(%User{}, user_params)
  #
  #   case Repo.insert(changeset) do
  #     {:ok, user} ->
  #       conn
  #       |> put_status(:created)
  #       |> put_resp_header("location", user_path(conn, :show, user))
  #       |> render("show.json", user: user)
  #     {:error, changeset} ->
  #       conn
  #       |> put_status(:unprocessable_entity)
  #       |> render(Firestorm.ChangesetView, "error.json", changeset: changeset)
  #   end
  # end

end
