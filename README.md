## 🚀 Быстрый старт

Клонирование репозитория:
```bash
git clone https://github.com/RaisZzz/fullstack-parser-test-task.git
cd fullstack-parser-test-task
```
⚙️ Настройка окружения

Backend

```bash
cd backend
npm install
cp .env.example .env  # Заполните переменные в .env
npx knex migrate:latest
npm run dev
```

Frontend

```bash
cd frontend
npm install
cp .env.example .env  # Заполните переменные в .env
npm run dev
```