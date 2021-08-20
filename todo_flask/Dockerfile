FROM python
ENV LANG=C.UTF-8 LC_ALL=C.UTF-8 PYTHONUNBUFFERED=1 DB_URL=mongodb://host.docker.internal DB_USERNAME=admin DB_PASSWORD=password DB_PORT=27017
WORKDIR /
COPY requirements.txt ./  
RUN pip install --no-cache-dir -r requirements.txt  
RUN rm requirements.txt  
COPY . /todo_flask

CMD [ "python","-m", "todo_flask.app" ]

