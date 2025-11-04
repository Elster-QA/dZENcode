# Playwright Project

Пример тестового проекта на Playwright для автоматизации UI-тестов.

## Установка зависимостей

1. Клонируем репозиторий:
git clone https://github.com/dZENcode/dZENcode.git
cd dZENcode

markdown
Копировать код

2. Устанавливаем зависимости Node.js:
npm install

markdown
Копировать код

## Запуск тестов

- Запуск всех тестов:
npx playwright test

diff
Копировать код

- Запуск конкретного теста:
npx playwright test tests/example.spec.js

diff
Копировать код

- Запуск тестов в браузере с GUI:
npx playwright test --headed

markdown
Копировать код

## Требования

- Node.js v18+
- Playwright v1.45+

## Структура проекта

/tests # Тестовые сценарии
/playwright.config.js # Конфигурация Playwright
/package.json # Список зависимостей
/package-lock.json

markdown
Копировать код

## Примечания

- Все тесты можно запускать как в headless, так и в headed режиме.
- Для наблюдения за браузером используйте `--headed`.
- Перед пушем изменений проверяйте, что локальная ветка синхронизирована с main на GitHub.
