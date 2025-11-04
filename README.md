# Playwright Project

Пример тестового проекта на Playwright для автоматизации UI-тестов.

## Установка зависимостей

1. Клонируем репозиторий:
git clone https://github.com/dZENcode/dZENcode.git
cd dZENcode
2. Устанавливаем зависимости Node.js:
npm install
## Запуск тестов

- Запуск всех тестов:
npx playwright test
- Запуск конкретного теста:
npx playwright test tests/example.spec.js
- Запуск тестов в браузере с GUI:
npx playwright test --headed
## Требования

- Node.js v18+
- Playwright v1.45+

## Структура проекта

/tests # Тестовые сценарии
/playwright.config.js # Конфигурация Playwright
/package.json # Список зависимостей
/package-lock.json


## Примечания

- Все тесты можно запускать как в headless, так и в headed режиме.
- Для наблюдения за браузером используйте `--headed`.
- Перед пушем изменений проверяйте, что локальная ветка синхронизирована с main на GitHub.
