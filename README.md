# fairy-circle-api

## Database 
### Setup
```bash
$ createdb fairy-circle-api;
$ createdb fairy-circle-api-test;
```
```env
# .env
NODE_ENV=development
PG_CONNECTION_STRING=<local postgres server>/fairy-circle-api
PG_CONNECTION_STRING_TEST=<local postgres server>/fairy-circle-api-test
```

### Migrations
Making a new migration:
```bash
npm run make-migration <table name>;
```
Running migrations:
```bash
npm run migrate;
```
### Seeds
Creating a new seed file:
```bash
npm run make-seed <seed_number>_<table name>;
```
*Seeds run by default in alpha order, so including a seed_number is required to ensure entries exist before referencing foreign keys*  

Running seeds:
```bash
npm run seed;
```
Removing all data and restarting (useful for testing):
```bash
npm run reset-db;
```