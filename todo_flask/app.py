from bson.objectid import ObjectId
from flask import Flask, json, jsonify,request
from .db_connection import collection
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/my-tasks', methods=['GET', 'POST'])
def get_task_data():
    if request.method == 'GET':
        data = collection.find({})
        data = [{"id":str(x["_id"]),"task":x["task"],"status":x["status"]} for x in data]
        return {'data': data}
    elif request.method == 'POST':
        data = request.json
        collection.insert_one(data)
        return {"message":"one task inserted"}

@app.route('/my-task/<task_id>', methods=['GET', 'PUT', 'DELETE'])
def get_task_with_id(task_id):
    if request.method == 'GET':
        data = collection.find({"id":int(task_id)})
        data = [{"id":str(x["_id"]),"task":x["task"],"status":x["status"]} for x in data]
        return data[0]
    elif request.method == 'PUT':
        data = request.json
        collection.update_one({"_id":ObjectId(task_id)},{"$set":data})
        return {"message":"one task updated"}
    elif request.method == 'DELETE':
        collection.delete_one({"_id":ObjectId(task_id)})
        return {"message":"one task deleted"}


if __name__=='__main__':
    app.run(debug=True)