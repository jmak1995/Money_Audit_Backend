BEGIN;

DROP TABLE IF EXISTS users, transactions CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL
);

CREATE TABLE transactions (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  amount INTEGER,
  transaction_type TEXT,
  transcation_date DATE DEFAULT CURRENT_DATE
);

INSERT INTO users (username, password) VALUES
  ('user1', '1234'),
  ('user2', '1234'),
  ('user3', '1234'),
  ('user4', '1234')
;

INSERT INTO transactions (amount, transaction_type, user_id) VALUES
  (1290,'income', 1 ),
  (330,'expenditure', 1 ),
  (550,'income', 3 )
;

COMMIT;