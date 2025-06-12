
# 🚀 NestJS + Sequelize + MariaDB Project Setup

## 📦 1. Create the Project

```bash
nest new application-settings-backend
npm i @nestjs/cli
cd application-settings-backend
```

---

## 🛠️ 2. Install Required Packages

### Sequelize + MariaDB (via `mysql2`):

```bash
npm install --save sequelize sequelize-typescript mysql2
```

### Sequelize CLI (for migrations):

```bash
npm install --save-dev sequelize-cli
```

---

## 🗂️ 3. Configure Sequelize CLI

### Create a `.sequelizerc` file in the project root:

```js
const path = require('path');

module.exports = {
  'config': path.resolve('src/database', 'config.js'),
  'models-path': path.resolve('src/database', 'models'),
  'migrations-path': path.resolve('src/database', 'migrations'),
  'seeders-path': path.resolve('src/database', 'seeders'),
};
```

### Initialize Sequelize project structure:

```bash
npx sequelize-cli init
```

This will create folders like:

```
src/
└── database/
    ├── config/
    ├── migrations/
    ├── models/
    └── seeders/
```

> 💡 You can **delete `models/index.js`** — we will keep models inside module folders instead.

---

## ⚙️ 4. Configure `src/database/config.js`

```js
module.exports = {
  development: {
    username: 'root',
    password: 'your_password',
    database: 'nestdb',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
  production: {
    // your prod config
  }
};
```

---

## 🔗 5. Install NestJS Sequelize Integration

```bash
npm install --save @nestjs/sequelize
```

---

## 🧱 6. Update `app.module.ts`

```ts
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'your_password',
      database: 'nestdb',
      models: [__dirname + '/models/*.model.ts'], // or [] if using module-based model structure
      autoLoadModels: true,
      synchronize: false,
    }),
  ],
})
export class AppModule {}
```

---

## 🧩 7. Generate a New Resource (Route + Module + Controller + Service)

```bash
npx nest g res modules/user
```

---

## 🧬 8. Generate Migration for a Model

```bash
npx sequelize-cli migration:generate --name create-users
```

---

## 🚀 9. Run Migrations

```bash
npx sequelize-cli db:migrate
```

---

Let me know if you'd like to include DTOs, Swagger, or folder restructuring into `modules/` for feature-based organization.
