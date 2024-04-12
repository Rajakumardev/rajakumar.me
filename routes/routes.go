package routes

import (
	"github.com/labstack/echo/v4"
	"rajakumar.me/handler"
)

func CreateRoutes(app *echo.Echo) {
	app.GET("", handler.HomePageHandler)
}
