package database

import (
	"database/sql"
	"fmt"
	"user-service/models"

	_ "github.com/mattn/go-sqlite3"
)

type Database struct{ db *sql.DB }

var dbPath string = "./storage/userdata.db"

type User models.User

func CreateUser(newUser User) error {
	db, err := sql.Open("sqlite3", dbPath)
	if err != nil {
		return err
	}
	defer db.Close()

	// Check if user already exists
	var count int
	err = db.QueryRow("SELECT COUNT(*) FROM users WHERE userid = ?", newUser.UserID).Scan(&count)
	if err != nil {
		return err
	}
	if count > 0 {
		return fmt.Errorf("user with ID %d already exists", newUser.UserID)
	}

	// Insert new user
	_, err = db.Exec("INSERT INTO users (userid, username, passwd, historyid, playlistid, preference) VALUES (?, ?, ?)", newUser.UserID, newUser.Username, newUser.Passwd, newUser.HistoryID, newUser.PlaylistID, newUser.Preference)
	if err != nil {
		return err
	}

	return nil
}

func SearchByID(id int64) (User, error) {
	db, err := sql.Open("sqlite3", dbPath)
	if err != nil {
		return User{}, err
	}
	defer db.Close()

	var user User
	err = db.QueryRow("SELECT * FROM users WHERE userid = ?", id).Scan(&user.UserID, &user.Username, &user.Passwd, &user.HistoryID, &user.PlaylistID, &user.Preference)
	user.Passwd = ""
	if err != nil {
		return User{}, err
	}

	return user, nil
}

func GetUserDataSummary() (int, error) {
	db, err := sql.Open("sqlite3", dbPath)
	if err != nil {
		return 0, err
	}
	defer db.Close()

	// Count number of users
	var userCount int
	err = db.QueryRow("SELECT COUNT(*) FROM users").Scan(&userCount)
	if err != nil {
		return 0, err
	}

	return userCount, nil
}

func UpdateUser(user User) error {
	db, err := sql.Open("sqlite3", dbPath)
	if err != nil {
		return err
	}
	defer db.Close()

	// Check if user exists
	var count int
	err = db.QueryRow("SELECT COUNT(*) FROM users WHERE userid = ?", user.UserID).Scan(&count)
	if err != nil {
		return err
	}
	if count == 0 {
		return fmt.Errorf("user with ID %d does not exist", user.UserID)
	}

	// Update user
	_, err = db.Exec("UPDATE users SET username = ?, passwd = ?, historyid = ?, playlistid = ?, preference = ? WHERE userid = ?", user.Username, user.Passwd, user.HistoryID, user.PlaylistID, user.Preference, user.UserID)
	if err != nil {
		return err
	}

	return nil
}

func DeleteUser(id int64) error {
	db, err := sql.Open("sqlite3", dbPath)
	if err != nil {
		return err
	}
	defer db.Close()

	// Check if user exists
	var count int
	err = db.QueryRow("SELECT COUNT(*) FROM users WHERE userid = ?", id).Scan(&count)
	if err != nil {
		return err
	}
	if count == 0 {
		return fmt.Errorf("user with ID %d does not exist", id)
	}

	// Delete user
	_, err = db.Exec("DELETE FROM users WHERE userid = ?", id)
	if err != nil {
		return err
	}

	return nil
}
