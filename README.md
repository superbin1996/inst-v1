> # Project App: `Instagram`

https://youtu.be/lt2pLhJaFck

## Project structure

- `django/server` directory is project folder,   
- `django/instagram` directory is app folder,   
- `react` is client-frontend,   
- `django/instagram/media` directory stores media/image files  

________________

### To run project (work both for production and development) 
Make sure you have installed docker desktop and you are opening it. In bash terminal, run command:   
```sh
docker compose up
```


<!-- 
#### Setup backend
- In `django directory` on terminal i (if `npm` and `python` was installed):  
    - **Create python visual environment and activate it**.   
    After that, run:  

        ```js
        npm run setup-project
        npm install concurrently
        ```
This command will trigger `pip install` and `npm install`, `npm run build` for both of server and client.

> Open package.jon and refer to scripts for more details  

________________

#### Setup frontend
**This project's frontend version run on `node@18.12.1` and `npm@9.2.0`**  
> ### If your engine has different version and project cannot run after finishing other below steps. Try to change your nodejs and npm version by following steps of `setup frontend`

- Install node version manager  
    > https://www.freecodecamp.org/news/node-version-manager-nvm-install-guide/

- Install `node@18.12.1` by `nvm`   
    ```nodejs
    nvm install v18.12.1
    nvm use v18.12.1
    ```
- `npm@9.2.0` need to be installed globally, if you have different version npm, you might need to uninstall it first. 
Locate to directory `./instagram/client/` just in case need to install some package which are not installed automatically

_______________

## To run project (for both client and server simultaneously, for development)  

on terminal in `root directory`, run (if `npm` was installed):  

- On `windows`:
    ```js
    npm start
    ```

- On `ubuntu`:
    ```js
    npm run start-ubuntu
    ```
________________
## Run server only (production)

on terminal in `root directory`, run:  

For `windows`:  
```py
python manage.py runserver --insecure
```

For 'ubuntu':

```py
python3 manage.py runserver --insecure
```
Add `--insecure` if in `server/settings.py`, `DEBUG=False`

________________
## Run server and client separately or more details about setup and operate command

> Open package.jon and refer to scripts


________________
## For deployment on Render

https://render.com/docs/deploy-django

Refer to `render.yaml`, `build.sh`, `server/wsgi.py`, `instagram/management`, `server/settings.py`, `server/urls.py`

Remember to create `.env` file in `root directory` and define `SUPERUSER_NAME`, `SUPERUSER_PASSWORD`, `SUPERUSER_EMAIL` to create `superuser`  

_________

Modify Image path need to change in `settings.py`, `instagram/views.py`, `client/src/context/appContext.js`, `instagram/models.py`, `server/urls.py`  

  
Default hostname for development is `http:127.0.0.1:8000`  

If login in `http:127.0.0.1:8000/admin` and `http:localhost:8000/admin` with the same account with the same time. Then only can login in `http:127.0.0.1:8000` with that account.  

UserViewSet used for register need won't allow register if set permission_classes to permissions.IsAuthenticated  

Cannot register if admin is login  
 -->
