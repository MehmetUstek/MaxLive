package handlers

import (
	"fmt"
	"math/rand"
	"net/http"
	"strconv"
	"user-service/database"

	"github.com/gin-gonic/gin"
)

func Index(c *gin.Context) {
	c.JSON(200, gin.H{
		"message": "Welcome to the User API",
	})
}

func AllUsers(c *gin.Context) {
	// Query general user info
	userInfo, err := database.GetUserDataSummary()
	if err != nil {
		fmt.Println(err)
		// Handle error
		c.JSON(500, gin.H{
			"error": "Failed to query all user info",
		})
		return
	}

	c.JSON(200, gin.H{
		"user_info": userInfo,
	})
}

func CreateUser(c *gin.Context) {
	// Get user info from request body
	var user database.User
	err := c.ShouldBindJSON(&user)
	if err != nil {
		c.JSON(400, gin.H{
			"error": "Invalid user info",
		})
		return
	}

	// Create user
	err = database.CreateUser(user)
	if err != nil {
		c.JSON(500, gin.H{
			"error": "Failed to create user",
		})
		return
	}

	c.JSON(200, gin.H{
		"message": "User created successfully",
	})
}

func QueryUserInfo(c *gin.Context) {
	useridStr := c.Param("userid")
	userid, err := strconv.ParseInt(useridStr, 10, 64)
	fmt.Println(userid)
	if err != nil {
		c.JSON(400, gin.H{
			"error": "Invalid user ID",
		})
		return
	}

	user, err := database.SearchByID(userid)
	if err != nil {
		c.JSON(500, gin.H{
			"error": "Failed to query user info",
		})
		return
	}

	c.JSON(200, gin.H{
		"user_info": user,
	})
}

func UpdateUser(c *gin.Context) {
	// Get user info from request body
	var user database.User
	err := c.ShouldBindJSON(&user)
	if err != nil {
		c.JSON(400, gin.H{
			"error": "Invalid user info",
		})
		return
	}

	// Update user
	err = database.UpdateUser(user)
	if err != nil {
		c.JSON(500, gin.H{
			"error": "Failed to update user",
		})
		return
	}

	c.JSON(200, gin.H{
		"message": "User updated successfully",
	})
}

func DeleteUser(c *gin.Context) {
	useridStr := c.Param("userid")
	userid, err := strconv.ParseInt(useridStr, 10, 64)
	if err != nil {
		c.JSON(400, gin.H{
			"error": "Invalid user ID",
		})
		return
	}

	err = database.DeleteUser(userid)
	if err != nil {
		c.JSON(500, gin.H{
			"error": "Failed to delete user",
		})
		return
	}

	c.JSON(200, gin.H{
		"message": "User deleted successfully",
	})
}

func UserStatus(c *gin.Context) {

	var userStatus string
	role := rand.Intn(3)
	fmt.Println(role)
	switch role {
	case 0:
		userStatus = "basic"
	case 1:
		userStatus = "standard"
	case 2:
		userStatus = "premium"
	default:
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid token"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"userRole": userStatus})
}
