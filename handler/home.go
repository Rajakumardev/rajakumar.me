package handler

import (
	"net/http"

	"github.com/labstack/echo/v4"
	"rajakumar.me/views"
)

func HomePageHandler(ctx echo.Context) error {
	return views.RenderViews(ctx, http.StatusOK, views.Home())
}
