# Worm book backend

-   for first time: `npm install && npm run dev && php artisan serve`
-   `npm run dev && php artisan serve`

## command

-   [x] `laravel new .`

-   [x] `composer require laravel/ui`
-   [x] `php artisan ui react`
-   [ ] `php artisan ui react --auth`
-   [x] `npm install && npm run dev`

-   [ ] `php artisan make:model book --migration --resource --controller`

-   [x] `composer require laravel/passport`
-   [x] `php artisan migrate`
-   [x] `php artisan passport:install`

## features

-   separate written and publish content
    -   post -> article
    -   write -> book
-   log table - user time action table row_id new_content[json]
-   show text differences
    -   https://github.com/BillyNate/PHP-FineDiff

```php
function highlight_modified_string($actual_string, $modified_string) {
    $str_array = explode(' ', $actual_string);
    $str_edited_array = explode(' ', $modified_string);
    $str_added = array_diff($str_edited_array, $str_array);

    foreach($str_edited_array as &$str_edited_value) {
        foreach($str_added as $str_added_value) {
            if($str_added_value == $str_edited_value) {
                $str_edited_value = '<span style="font-weight: bold">' . $str_edited_value . '</span>';
            }
        }
        unset($str_edited_value);
    }

    return implode(' ', $str_edited_array);
}

$str = "These are my comments. They are awesome!";
$str_edited = "These are my not so great comments. They are awesome! I disagree.";
$str_modified = highlight_modified_string($str, $str_edited);

echo "<p>{$str}</p>";
echo "<p>{$str_modified}</p>";
```

## Link

-   https://medium.com/i-o-digital/https-medium-com-io-building-progressive-web-apps-with-laravel-57f6bfa3ddb1
-   https://code.tutsplus.com/tutorials/build-a-react-app-with-laravel-restful-backend-part-1-laravel-5-api--cms-29442
-   https://code.tutsplus.com/tutorials/build-a-react-app-with-laravel-backend-part-2-react--cms-29443
-   https://codesource.io/build-a-crud-application-using-laravel-and-react/
-   https://wptheming.com/2019/02/building-a-react-app-on-laravel/
-   https://developer.okta.com/blog/2018/12/06/crud-app-laravel-react
-   https://dev.to/mjsarfatti/introducing-cral-create-react-app-laravel-4n90
-   https://create-react-app.dev/docs/proxying-api-requests-in-development/
-   https://github.com/mjsarfatti/create-react-app-laravel/

-   https://crosstechit.com/blog/2019/01/15/react-js-authentication-with-laravel-back-end/
-   https://webomnizz.com/rest-api-and-passport-authentication-with-laravel/
-   https://webomnizz.com/laravel-passport-working-with-authentication-scope-and-permission/

-   https://laravel.com/docs/7.x/passport#upgrading

-   https://blog.pusher.com/react-laravel-application/
