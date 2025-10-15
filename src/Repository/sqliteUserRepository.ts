import { dbPromise } from "../Database/index";
import { UserRepository } from "../Repository/interface";

export const sqliteUserRepository: UserRepository = {
  createUser: async (firstName, lastName, phone, hashedPassword, initialDeposit) => {
    const db = await dbPromise;
    return new Promise((resolve, reject) => {
      const sql = `INSERT INTO accounts (firstName, lastName, phone, password, balance)VALUES (?, ?, ?, ?, ?)`;
      db.run(sql, [firstName, lastName, phone, hashedPassword, initialDeposit], function (err) {
        err ? reject(err) : resolve(this.lastID);
      });
    });
  },

  getUserIdByPhone: async (phone) => {
    const db = await dbPromise;
    return new Promise((resolve, reject) => {
      const sql = `SELECT id FROM accounts WHERE phone = ?`;
      db.get(sql, [phone], (err, row: any) => {
        err ? reject(err) : resolve(row ? row.id : null);
      });
    });
  },

  setBalance: async (userId, amount) => {
    const db = await dbPromise;
    return new Promise((resolve, reject) => {
      const sql = `UPDATE accounts SET balance = balance + ? WHERE id = ?`;
      db.run(sql, [amount, userId], (err) => {
        err ? reject(err) : resolve();
      });
    });
  },

  getBalance: async (userId) => {
    const db = await dbPromise;
    return new Promise((resolve, reject) => {
      const sql = `SELECT balance FROM accounts WHERE id = ?`;
      db.get(sql, [userId], (err, row: any) => {
        err ? reject(err) : resolve(row ? row.balance : 0);
      });
    });
  },

  checkUserExists: async (userId) => {
    const db = await dbPromise;
    return new Promise((resolve, reject) => {
      const sql = `SELECT id FROM accounts WHERE id = ?`;
      db.get(sql, [userId], (err, row: any) => {
        err ? reject(err) : resolve(!!row);
      });
    });
  },

  deleteUser: async (userId) => {
    const db = await dbPromise;
    return new Promise((resolve, reject) => {
      const sql = `DELETE FROM accounts WHERE id = ?`;
      db.run(sql, [userId], (err) => {
        err ? reject(err) : resolve();
      });
    });
  },

  getUserByPhone: async (phone) => {
    const db = await dbPromise;
    return new Promise((resolve, reject) => {
      const sql = `SELECT * FROM accounts WHERE phone = ?`;
      db.get(sql, [phone], (err, row: any) => {
        err ? reject(err) : resolve(row || null);
      });
    });
  },

};
