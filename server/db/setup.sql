
-- delete from users;
-- delete from user_uploads;
-- delete from item_Details;

CREATE TABLE IF NOT EXISTS users (
    user_id SERIAL PRIMARY KEY,
    name text,
    email_id text,
    auth_id text,
    profile_pic TEXT
);

CREATE TABLE IF NOT EXISTS user_uploads (
    doc_id SERIAL PRIMARY KEY,
    posting_date date not null default current_date,
    created_at TIMESTAMPTZ default now(),
    doc_date date,
    doc_time time,
    store_name text,
    comments text,
    total   numeric(8,2),
    user_id integer references users (user_id)
);

create table if not exists item_details (
    item_id serial primary key,
    item_name    text,
    item_desc text,
    item_upc  text,
    price_per_unit  numeric(8,2),
    total_price     numeric(8,2),
    units           decimal(8,2),
    misc_data text,
    doc_id integer references user_uploads(doc_id)
);