-- Initial schema for the Cloudflare D1 deployment.

CREATE TABLE IF NOT EXISTS visits (
  id            INTEGER PRIMARY KEY AUTOINCREMENT,
  ts            TEXT    NOT NULL,
  day           TEXT    NOT NULL,
  path          TEXT    NOT NULL,
  session_id    TEXT,
  visitor_hash  TEXT    NOT NULL,
  country       TEXT,
  device        TEXT,
  browser       TEXT,
  os            TEXT,
  lang          TEXT,
  referrer      TEXT,
  screen        TEXT
);

CREATE INDEX IF NOT EXISTS idx_visits_day     ON visits(day);
CREATE INDEX IF NOT EXISTS idx_visits_visitor ON visits(visitor_hash);
CREATE INDEX IF NOT EXISTS idx_visits_ts      ON visits(ts);

CREATE TABLE IF NOT EXISTS events (
  id            INTEGER PRIMARY KEY AUTOINCREMENT,
  ts            TEXT    NOT NULL,
  day           TEXT    NOT NULL,
  visitor_hash  TEXT    NOT NULL,
  name          TEXT    NOT NULL,
  step          TEXT,
  lang          TEXT
);

CREATE INDEX IF NOT EXISTS idx_events_day  ON events(day);
CREATE INDEX IF NOT EXISTS idx_events_name ON events(name);
