# Playwright Project

Пример тестового проекта на Playwright для автоматизации UI-тестов.

## Установка зависимостей

1. Клонируем репозиторий:
```bash
git clone https://github.com/dZENcode/dZENcode.git
cd dZENcode
Устанавливаем зависимости Node.js:

bash
Копировать код
npm install
Запуск тестов
Запуск всех тестов:

bash
Копировать код
npx playwright test
Запуск конкретного теста:

bash
Копировать код
npx playwright test tests/example.spec.js
Запуск тестов в браузере с GUI:

bash
Копировать код
npx playwright test --headed
Требования
Node.js v18+

Playwright v1.45+

Структура проекта
bash
Копировать код
/tests                  # Тестовые сценарии
/playwright.config.js    # Конфигурация Playwright
/package.json            # Список зависимостей
/package-lock.json
Примечания
Все тесты можно запускать как в headless, так и в headed режиме.

Для наблюдения за браузером используйте --headed.

Перед пушем изменений проверяйте, что локальная ветка синхронизирована с main на GitHub.
