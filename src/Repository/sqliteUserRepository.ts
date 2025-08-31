import { db } from "../Database/index";
import { UserRepository } from "../Repository/interface";

export const sqliteUserRepository: UserRepository = {
  createUser: async (firstName, lastName, phone) => new Promise((resolve, reject) => {
    const account = `INSERT INTO accounts (firstName, lastName, phone, balance) VALUES (?, ?, ?, 0)`;
    db.run(account, [firstName, lastName, phone], function(err) {
      err ? reject(err) : resolve(this.lastID);
    });
  }),

  getUserIdByPhone: async (phone) => new Promise((resolve, reject) => {
    const id = `SELECT id FROM accounts WHERE phone = ?`;
    db.get(id, [phone], (err, row: any) => {
      err ? reject(err) : resolve(row ? row.id : null);
    });
  }),

  setBalance: async (userId, amount) => new Promise((resolve, reject) => {
    const sql = `UPDATE accounts SET balance = balance + ? WHERE id = ?`;
    db.run(sql, [amount, userId], (err) => {
      err ? reject(err) : resolve();
    });
  }),
  
  getBalance: async (userId) => new Promise((resolve, reject) => {
    const sql = `SELECT balance FROM accounts WHERE id = ?`;
    db.get(sql, [userId], (err, row: any) => {
      err ? reject(err) : resolve(row ? row.balance : 0);
    });
  }),

  checkUserExists: async (userId) => new Promise((resolve, reject) => {
    const sql = `SELECT id FROM accounts WHERE id = ?`;
    db.get(sql, [userId], (err, row: any) => {
      err ? reject(err) : resolve(!!row);
    });
  }),

  deleteUser: async (userId) => new Promise((resolve, reject) => {
    const sql = `DELETE FROM accounts WHERE id = ?`;
    db.run(sql, [userId], (err) => {
      err ? reject(err) : resolve();
    });
  }),
};
