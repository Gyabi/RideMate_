package db

import (
	"database/sql"
	"fmt"

	_ "github.com/lib/pq"
)

type ItemDB struct {
	ID        string
	Title     string
	Content   string
	AccountID string
	UpdatedAt string
	CreatedAt string
}

type AccountDB struct {
	ID       string
	Username string
}

type DB struct {
	db *sql.DB
}

func NewDB(dbHost string, dbPort int, dbUser string, dbPassword string, dbName string) (*DB, error) {
	// PostgreSQLへの接続文字列を構築します
	connStr := fmt.Sprintf("host=%s port=%d user=%s password=%s dbname=%s sslmode=disable", dbHost, dbPort, dbUser, dbPassword, dbName)

	// PostgreSQLに接続します
	db, err := sql.Open("postgres", connStr)
	if err != nil {
		return nil, fmt.Errorf("failed to connect to the database: %w", err)
	}

	newdb := &DB{db: db}
	// CreateTableを実行
	newdb.CreateTable()

	return newdb, nil
}

func (d *DB) Close() {
	// データベース接続を閉じます
	d.db.Close()
}

func (d *DB) CreateTable() error {
	fmt.Println("create table")
	// itemsテーブルを作成します
	_, err := d.db.Exec(`CREATE TABLE IF NOT EXISTS items (
		id VARCHAR(100) PRIMARY KEY,
		title VARCHAR(100) NOT NULL,
		content TEXT NOT NULL,
		account_id VARCHAR(100) NOT NULL,
		updated_at VARCHAR(100),
		created_at VARCHAR(100)
	);`)
	if err != nil {
		return fmt.Errorf("failed to create items table: %w", err)
	}

	// accountsテーブルを作成します
	_, err = d.db.Exec(`CREATE TABLE IF NOT EXISTS accounts (
		id VARCHAR(100) PRIMARY KEY,
		username VARCHAR(100) NOT NULL
	);`)
	if err != nil {
		return fmt.Errorf("failed to create accounts table: %w", err)
	}

	return nil
}

func (d *DB) InsertItem(item ItemDB) error {
	// レコードを挿入します
	err := d.db.QueryRow("INSERT INTO items (title, content, account_id) VALUES ($1, $2, $3) RETURNING id, updated_at, created_at", item.Title, item.Content, item.AccountID).Scan(&item.ID, &item.UpdatedAt, &item.CreatedAt)
	if err != nil {
		return fmt.Errorf("failed to insert item: %w", err)
	}

	return nil
}

func (d *DB) GetItems() ([]ItemDB, error) {
	// レコードを取得します
	rows, err := d.db.Query("SELECT id, title, content, account_id, updated_at, created_at FROM items")
	if err != nil {
		return nil, fmt.Errorf("failed to get items: %w", err)
	}
	defer rows.Close()

	var items []ItemDB
	for rows.Next() {
		var item ItemDB
		err := rows.Scan(&item.ID, &item.Title, &item.Content, &item.AccountID, &item.UpdatedAt, &item.CreatedAt)
		if err != nil {
			return nil, fmt.Errorf("failed to scan item row: %w", err)
		}
		items = append(items, item)
	}

	return items, nil
}

func (d *DB) GetItem(id string) (ItemDB, error) {
	// レコードを取得します
	var item ItemDB
	err := d.db.QueryRow("SELECT id, title, content, account_id, updated_at, created_at FROM items WHERE id = $1", id).Scan(&item.ID, &item.Title, &item.Content, &item.AccountID, &item.UpdatedAt, &item.CreatedAt)
	if err != nil {
		return ItemDB{}, fmt.Errorf("failed to get item: %w", err)
	}

	return item, nil
}

func (d *DB) UpdateItem(item ItemDB) (ItemDB, error) {
	// レコードを更新します
	_, err := d.db.Exec("UPDATE items SET title = $1, content = $2, account_id = $3 WHERE id = $4", item.Title, item.Content, item.AccountID, item.ID)
	if err != nil {
		return ItemDB{}, fmt.Errorf("failed to update item: %w", err)
	}

	return item, nil
}

func (d *DB) DeleteItem(id string) error {
	// レコードを削除します
	_, err := d.db.Exec("DELETE FROM items WHERE id = $1", id)
	if err != nil {
		return fmt.Errorf("failed to delete item: %w", err)
	}

	return nil
}

func (d *DB) InsertAccount(account AccountDB) error {
	// レコードを挿入します
	_, err := d.db.Exec("INSERT INTO accounts (username) VALUES ($1)", account.Username)
	if err != nil {
		return fmt.Errorf("failed to insert account: %w", err)
	}

	return nil
}

func (d *DB) GetAccounts() ([]AccountDB, error) {
	// レコードを取得します
	rows, err := d.db.Query("SELECT id, username FROM accounts")
	if err != nil {
		return nil, fmt.Errorf("failed to get accounts: %w", err)
	}
	defer rows.Close()

	var accounts []AccountDB
	for rows.Next() {
		var account AccountDB
		err := rows.Scan(&account.ID, &account.Username)
		if err != nil {
			return nil, fmt.Errorf("failed to scan account row: %w", err)
		}
		accounts = append(accounts, account)
	}

	return accounts, nil
}

func (d *DB) GetAccount(id string) (AccountDB, error) {
	// レコードを取得します
	var account AccountDB
	err := d.db.QueryRow("SELECT id, username FROM accounts WHERE id = $1", id).Scan(&account.ID, &account.Username)
	if err != nil {
		return AccountDB{}, fmt.Errorf("failed to get account: %w", err)
	}

	return account, nil
}

func (d *DB) UpdateAccount(account AccountDB) error {
	// レコードを更新します
	_, err := d.db.Exec("UPDATE accounts SET username = $1 WHERE id = $2", account.Username, account.ID)
	if err != nil {
		return fmt.Errorf("failed to update account: %w", err)
	}

	return nil
}

func (d *DB) DeleteAccount(id string) error {
	// レコードを削除します
	_, err := d.db.Exec("DELETE FROM accounts WHERE id = $1", id)
	if err != nil {
		return fmt.Errorf("failed to delete account: %w", err)
	}

	return nil
}
