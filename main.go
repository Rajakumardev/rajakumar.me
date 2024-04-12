package main

import (
	"log"

	"github.com/labstack/echo/v4"
	"rajakumar.me/routes"
)

func main() {
	app := echo.New()
	routes.CreateRoutes(app)
	log.Fatal(app.Start(":3000"))
}
