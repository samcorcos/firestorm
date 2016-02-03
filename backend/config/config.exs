# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.
use Mix.Config

# Configures the endpoint
config :firestorm, Firestorm.Endpoint,
  url: [host: "localhost"],
  root: Path.dirname(__DIR__),
  secret_key_base: "7z2rG+//nUGfybHBqLzoBHTDwx4B6rvD+1eG32ClGj6yTnNQmnKW+80W67CnU8MQ",
  render_errors: [accepts: ~w(html json)],
  pubsub: [name: Firestorm.PubSub,
           adapter: Phoenix.PubSub.PG2]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env}.exs"

# Configure phoenix generators
config :phoenix, :generators,
  migration: true,
  binary_id: false

config :ueberauth, Ueberauth,
  providers: [
    identity: {Ueberauth.Strategy.Identity, []}
  ]

config :joken, config_module: Guardian.JWT

config :guardian, Guardian,
  issuer: "Firestorm",
  ttl: { 30, :days },
  verify_issuer: true,
  secret_key: "24wesniq3p4nwepsofewankfnois3fleububflasfubiub4u4",
  serializer: Firestorm.GuardianSerializer
