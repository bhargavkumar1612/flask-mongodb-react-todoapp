## This is a simple todo app 
## 1) Built a basic flask api with CRUD operations
##    Running it locally
##        # cd todo_flask
##        # pip install -r requirements.txt
##        # python app.py
##    Running in Docker
##        # docker build -t todo-flask-app-backend todo_flask
##        # docker run -p 5000:5000 --name todo-flask-backend _image_id
## 2) Built a basic react app to facilitate these operations
##    Running it locally
##        # cd todo-react
##        # npm i
##        in the package.json make sure "start": "react-scripts start " is set
##        # npm start
##    Running it in docker
##        in package.json make sure "start": "PORT=5001 HOST=0.0.0.0 react-scripts start " is set
##        # docker build -t todo-react-frontend todo-react
##        # docker run -d -p 5001:5001 --name todo-react-frontend _image_id