package main

import (
	"user-service/handlers"

	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()

	r.GET("/", handlers.Index)

	r.GET("/users", handlers.AllUsers)

	r.GET("/user/:userid", handlers.QueryUserInfo)

	r.PUT("/user", handlers.CreateUser)

	r.POST("/user", handlers.UpdateUser)

	r.POST("user/token", handlers.UserStatus)

	r.DELETE("/user/:userid", handlers.DeleteUser)

	r.Run(":8000")
}
