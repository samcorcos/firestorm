defmodule Firestorm.AuthController do
  use Firestorm.Web, :controller

  def test(conn, _params) do
    conn
    |> render(Firestorm.AuthView, "show.json")
  end
end
