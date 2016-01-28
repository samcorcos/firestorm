# defmodule Firestorm.AuthView do
#   use Firestorm.Web, :view
#
#   def render("show.json", %{jwt: jwt, id: id, username: username}) do
#     %{data: %{ jwt: jwt, id: id, username: username}}
#   end
#
#   def render("error.json", %{error: error}) do
#     %{error: error}
#   end
# end

defmodule Firstorm.AuthView do
  use Firestorm.Web, :view

  def render("show.json", _params) do
    IO.puts "test"
    %{data: %{ test: "test"}}
  end
end
