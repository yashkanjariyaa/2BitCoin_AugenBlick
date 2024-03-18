## Project: EcoScore

EcoScore is a web application that allows users to upload images of waste, which are then classified into categories such as paper, metal, glass, and plastic. The application evaluates the environmental friendliness of the waste and provides users with points based on the classification. It further makes sure that these points are equitable for all family sizes. These points can be redeemed at local businesses for various rewards.

### Tech Stack:

- **Frontend**: React.js
- **Backend**: Node.js (Express.js)
- **Machine Learning Model**: ResNet
- **Model Integration**: Flask
- **Dataset**: TrashNet (available on GitHub)

### Work Distribution:

| Task                                      | Contributor            |
| -------------------------------------     | ---------------------- |
| Frontend Development                      | Yash Kanjariya         |
| Backend Development (Node.js, Express.js) | Yash Kanjariya         |
| Model Training and Integration (Flask)    | Vaishnavi Shridhar     |
| Dataset Selection and Preparation         | Vaishnavi Shridhar     |

### User Story Flowchart:

```
                            +-------------+
                            |   Start     |
                            +-------------+
                                  |
                                  V
                            +-------------+
                            |  Upload     |
                            |  Image      |
                            +------+------+
                                   |
                                   V
                            +------+------+
                            |   Classify  |
                            |   Image     |
                            +------+------+
                                   |
                                   V
                            +------+------+
                            | Environmental|
                            |   Evaluation |
                            +------+------+
                                   |
                                   V
                            +------+------+
                            |    Points   |
                            |   Reward    |
                            +------+------+
                                   |
                                   V
                            +------+------+
                            |   Redeem    |
                            |   Points    |
                            +------+------+
                                   |
                                   V
                            +------+------+
                            |   End       |
                            +-------------+
```

### How to Run the Project:

1. Clone the repository: `git clone <repository-url>`
2. Install dependencies:
   - For Frontend: `cd frontend && npm install`
   - For Backend: `cd backend && npm install`
   - For Flask server:`pip install Flask
                  pip install opencv-python-headless
                  pip install numpy
                  pip install tensorflow
                  pip install scikit-learn
                  pip install pillow
                  pip install flask-cors`
3. Start the server:
   - For Frontend: `cd frontend && npm start`
   - For Backend: `cd backend && npm start`
   - For Flask: `cd Flask && python app.py`

   

### Additional Notes:

- Make sure to install Python and Flask for model integration.
- Ensure that the TrashNet dataset is available and accessible to the model during training.
- To modify the preprocessing images make changes in the ipynb notebook.
- Adjust the file paths and configurations as necessary for your environment.
- For more detailed instructions on setting up the project, refer to the project documentation or README files in the respective directories.
