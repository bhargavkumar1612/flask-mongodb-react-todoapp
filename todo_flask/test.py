import  unittest
import requests

class api_test(unittest.TestCase):
    URL = "http://127.0.0.1:5000/"
    def test1_add_task(self):
        response = requests.post(self.URL+"my-tasks", 
                                json={"id":3,
                                      "task":"Delete me",
                                      "status":False
                                     },
                                headers={'Content-Type': 'application/json'})
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.json(),{"message":"one task inserted"})

    def test2_get_all_tasks(self):
        response = requests.get(self.URL+'my-tasks')
        self.assertEqual(response.status_code, 200)

    def test3_get_task_with_id(self):
        response = requests.get(self.URL+"my-task/1")
        self.assertEqual(response.status_code, 200)
        self.assertDictEqual(response.json(),{"id": 1,
                                            "task": "Do the Todo-app",
                                            "status": False})

    def test4_update_product(self):
        response = requests.put(self.URL+"my-task/1", json={"id": 1,
                                                            "task": "Do the Todo-app",
                                                            "status": True})
        self.assertEqual(response.status_code, 200)
        self.assertDictEqual(response.json(), {"message":"one task updated"})
    
    def test5_delete_a_task_with_id(self):
        response = requests.delete(self.URL+'my-task/2')
        self.assertEqual(response.status_code, 200)
        self.assertDictEqual(response.json(), {"message":"one task deleted"})

if __name__ == '__main__':
    t = api_test()
    # t.test1_add_task()
    # print(True)
    # t.test2_get_all_tasks()
    # print(True)
    # t.test3_get_task_with_id()
    # print(True)
    # t.test4_update_product()
    # print(True)
    t.test5_delete_a_task_with_id()
    print(True)
