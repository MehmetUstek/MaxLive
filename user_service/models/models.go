package models

type User struct {
	UserID     int64  `json:"userid"`
	Username   string `json:"username"`
	Passwd     string `json:"passwd"`
	HistoryID  string `json:"historyid"`
	PlaylistID string `json:"playlistid"`
	Preference string `json:"preference"`
}

type History struct {
	ID      int64    `json:"id"`
	Content []string `json:"content"`
}

type Playlist struct {
	ID      int64    `json:"id"`
	Content []string `json:"content"`
}

type Preference struct {
	ID      int64    `json:"id"`
	Content []string `json:"content"`
}
