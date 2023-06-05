package graph

import (
	"ridemate-backend/db"
)

//go:generate go run github.com/99designs/gqlgen generate

// This file will not be regenerated automatically.
//
// It serves as dependency injection for your app, add any dependencies you require here.

type Resolver struct {
	client *db.DB
}

func NewResolver() *Resolver {
	clinet, err := db.NewDB("localhost", 5432, "postgres", "postgres", "ridemate")
	if err != nil {
		panic(err)
	}

	return &Resolver{
		client: clinet,
	}
}

func (r *Resolver) Close() {
	r.client.Close()
}
