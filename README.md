<p align="center">
  <a href="https://gulpjs.com">
    <img height="257" width="114" src="https://raw.githubusercontent.com/gulpjs/artwork/master/gulp-2x.png">
  </a>
  <p align="center">The streaming build system</p>
</p>

# Сборка Gulp

Этот проект использует Gulp для автоматизации различных задач веб-разработки, таких как компиляция SCSS в CSS, сжатие и оптимизация изображений, сборка JavaScript файлов и многое другое. Сборка Gulp значительно упрощает процесс разработки, позволяя сосредоточиться на написании кода, а не на рутинных операциях.

## Установка

1. Убедитесь, что у вас установлен [Node.js](https://nodejs.org/) и npm.
2. Клонируйте репозиторий на ваш компьютер.
3. Установите зависимости, выполнив команду `npm install`.

## Команды Gulp

- `npm run dev`: Запускает основную задачу Gulp в режиме разработки.
- `npm run build`: Запускает сборку проекта в режиме продакшн.
- `npm run html`: Проверяет HTML файлы на соответствие стандартам W3C.
- `npm run format`: Форматирует код с помощью Prettier.
- `npm run zip`: Создает zip-архив с собранными файлами проекта.

## Структура проекта

- **src/**: Исходные файлы проекта.
  - **components/**: Компоненты проекта.
  - **fonts/**: Файлы шрифтов.
  - **img/**: Изображения проекта.
  - **js/**: JavaScript файлы.
  - **pages/**: Файлы страниц проекта.
  - **scss/**: Файлы стилей (например, SCSS).

- **public/**: Собранные файлы проекта.

## Зависимости

Список основных зависимостей, используемых в этой сборке:

- gulp
- gulp-autoprefixer
- gulp-babel
- gulp-changed
- gulp-file-include
- gulp-fonter
- gulp-group-css-media-queries
- gulp-imagemin
- gulp-newer
- gulp-sass
- gulp-sourcemaps
- gulp-svg-sprite
- gulp-svgmin
- gulp-ttf2woff2
- gulp-typograf
- gulp-zip
- node-w3c-validator
- prettier
- sass
- stylelint
- webpack
- webpack-stream

## Зависимости разработки

- @babel/core
- @babel/preset-env
- browser-sync
- del
- eslint
- eslint-config-airbnb-base
- eslint-config-prettier
- normalize.css
- scroll-lock
- stylelint-config-prettier
- stylelint-config-standard-scss
- stylelint-order

## Пример использования

1. Разработка ведется в директории `src/`.
2. Запустите команду `npm run dev` для сборки проекта в режиме разработки.
3. Изменения в файлах автоматически отслеживаются.

## Конфигурация HTMLHint (.htmlhintrc)

```
{
  // Правила для имен тегов в нижнем регистре
  "tagname-lowercase": true,
  
  // Правила для атрибутов в нижнем регистре
  "attr-lowercase": true,
  
  // Правила для использования двойных кавычек для значений атрибутов
  "attr-value-double-quotes": true,
  
  // Обязательное наличие <!DOCTYPE html> в начале HTML-файла
  "doctype-first": true,
  
  // Проверка парности тегов
  "tag-pair": true,
  
  // Проверка спецсимволов на экранирование
  "spec-char-escape": true,
  
  // Уникальность идентификаторов (id)
  "id-unique": true,
  
  // Проверка на пустое значение атрибута src
  "src-not-empty": true,
  
  // Проверка на уникальность атрибутов
  "attr-no-duplication": true,
  
  // Обязательное наличие элемента <title> в <head>
  "title-require": true,
  
  // Обязательное наличие атрибута alt у тега <img>
  "img-alt-require": true,
  
  // Использование <!DOCTYPE html> в HTML5
  "doctype-html5": true,
  
  // Стиль идентификаторов и классов (id и class) - dash (черточка между словами)
  "id-class-value": "dash",
  
  // Запрет использования стилей внутри HTML-тегов
  "style-disabled": true,
  
  // Запрет использования внутренних стилей (атрибут style)
  "inline-style-disabled": true,
  
  // Запрет использования смешивания табов и пробелов для отступов
  "space-tab-mixed-disabled": "space",
  
  // Запрет использования атрибутов style и script вместе с id и class
  "id-class-ad-disabled": true,
  
  // Проверка атрибутов href на использование абсолютных или относительных путей
  "href-abs-or-rel": false,
  
  // Проверка на наличие небезопасных символов в атрибутах
  "attr-unsafe-chars": true,
  
  // Запрет использования элемента <script> внутри <head>
  "head-script-disabled": true,
  
  // Проверка наличия атрибута src у тега <img>
  "img-req-src": true,
  
  // Использование <!DOCTYPE html> в XHTML 1.0
  "doctype-xhtml-1_0": true,
  
  // Проверка наличия значения у всех атрибутов
  "attr-req-value": true,
  
  // Проверка наличия корректного содержимого в элементе <head>
  "head-valid-content-model": true
}
```
## Конфигурация Prettier (.prettierrc)

```
{
  // Схема JSON, используемая для валидации конфигурации
  "$schema": "https://json.schemastore.org/prettierrc",
  
  // Параметр semi указывает, нужны ли точки с запятой в конце выражений
  "semi": false,
  
  // Количество пробелов для одного уровня отступа
  "tabWidth": 2,
  
  // Использование одинарных кавычек вместо двойных для строковых литералов
  "singleQuote": true,
  
  // Максимальная длина строки кода
  "printWidth": 100,
  
  // Определяет, должна ли быть запятая в конце объектов
  "trailingComma": "none",
  
  // Ставит скобки вокруг единственного параметра стрелочной функции
  "arrowParens": "avoid"
}
```
