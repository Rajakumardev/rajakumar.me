package main

import (
	"log"

	"github.com/labstack/echo/v4"
)

func main() {
	router := echo.New()
	log.Fatal(router.Start(":3000"))
}
