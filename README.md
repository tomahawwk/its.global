## Frontend
```
cd /frontend

yarn

yarn dev - Развернуть локально

yarn generate - Сбилдить
```

## Backend

### Развернуть на локалке
```
cd /backend

Поместить .env файл из заметок в корень

yarn

yarn dev - Развернуть локально
```

### Деплой на хероку (пока нет сервера)

```
heroku login

cd /backend

git add .

git commit -am "Коммит с изменением"

git push heroku master
```

## Админка

### Создать блок
1. Разворачиваем админку локально (см. Backend)
2. Переходим по http://localhost:1337/admin/
3. Переходим в Content-Type Builder и создаем новый single type
![создаем новый single type](guide-img/1.png)
4. Выбираем поле Component
![Выбираем поле Component](guide-img/2.png)
5. Если в Components есть нужный компонент, то выбираем "Use an existing component".
Если нет, то "Create a new component".
![Выбираем поле Component](guide-img/3.png)
5. Выбираем тип компонента и именуем. Если хотим создать пополняемый список компонентов, то выбираем Reapetable, если поле предназначено для еденичного компонента, то Single.
![Выбираем тип компонента](guide-img/4.png)
6. Жмем Save и ждем, пока изменения зафиксируются.
![ждем](guide-img/5.png)
7. Идём в Settings - Roles - Public.
![Идём в Settings - Roles - Public](guide-img/6.png)
8. Ищем блок Permissions. Находим там наш Single type и выставляем галочку Find. Сохраняем. Теперь компонент доступен для обращения через /api или /graphql
![Ищем блок Permissions](guide-img/7.png)
9. Идем в Content Manager. В Syngle types находим наш блок и добавляем контент. 
![Идем в Content Manager.](guide-img/8.png)
10. Заполняем все нужные поля, сохраняем и публикуем.
![Заполняем все нужные поля и сохраняем.](guide-img/9.png)
11. Переходим в плейграунд graphql по http://localhost:1337/graphql/ и пишем запрос за данными на языке graphql. В области справа будет отображаться ошибка или полученные данные в формате JSON. Эта площадка нужна для проверки правильности запроса. Если все правильно - копируем graphql запрос.
![graphql](guide-img/10.png)
12. Переходим по пути "frontend/graphql/queries" и создаем файл для нашего запроса. Оформляем, как на скрине ниже.
![Оформляем запрос](guide-img/11.png)
13. Используем, где нам нужно. P.S.: для списков ещё выводим в graphql id(генерируется самим strapi), чтобы прокинуть в key
![Используем](guide-img/12.png)