# we will train the classifier with our pickle file which has all our landmark data
import pickle

# We will use the RandomForestClassifier as our classifier model
from sklearn.ensemble import RandomForestClassifier

# import useful functions
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score
import numpy as np

# open pickle file and set as our data dictionary
data_dict = pickle.load(open('./data.pickle', 'rb'))

# convert our data dict entries into numpy array
data = np.asarray(data_dict['data'])
labels = np.asarray(data_dict['labels'])

# we are splitting our data into training sets and test sets.
# x_train and x_test is our split up 'data' array 
# y_train and y_test is our split up 'labels' array
# test_size is the size of the test set, we set it to 20%
# shuffle data to try and reduce possible bias in dataset
x_train, x_test, y_train, y_test = train_test_split(data, labels, test_size=0.2, shuffle=True, stratify=labels)

# we are using RandomForestClassifier
model = RandomForestClassifier()

# we will train our classifier using training data
model.fit(x_train, y_train)

# we predict using our model
y_predict = model.predict(x_test)

# cross check against our test 
score = accuracy_score(y_predict, y_test)

print('{}% of samples were classified correctly !'.format(score * 100))

f = open('model.p', 'wb')
pickle.dump({'model': model}, f)
f.close()