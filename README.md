# Book Worm

-   Book Worm is a app for writing and reading Books. idea from "Amir Salar Soleymani".

## Technology

-   Laravel (PHP framework) and mySql for backend
-   React JS for frontend

## use

-   `git clone https://github.com/mohsen12999/bookworm.git`
-   for first time: `composer update && npm install && npm run dev && php artisan serve`
-   `npm run dev && php artisan serve`

## TODO

-   [ ] order of chapter - change order
-   [ ] change theme [dark/light]
-   [ ] change font and color
-   [ ] autocomplete for input in subject and genre
-   [ ] difference table for note[write] and book[publish]
-   [ ] difference table for blog[write] and post[publish]
-   [ ] change user password
-   [ ] user role
-   [ ] free host
-   [ ] free domain
-   [ ] followers and following
-   [ ] rating for book
-   [ ] comment for book and posts
-   [ ] ticket, support and report
-   [ ] show website news

## for deploy in cpanel

-   rename `public` to `public_html`
-   add this line to `index.php` under app definition

```php
$app->bind('path.public', function () {
    return __DIR__;
});
```
