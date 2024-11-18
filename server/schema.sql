CREATE TABLE todolist(
    id SERIAL PRIMARY KEY,
    task VARCHAR(45) NOT NULL,
    date date NOT NULL,
    status VARCHAR(10) NOT NULL DEFAULT 'Active'
);