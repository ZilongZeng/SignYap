# Take images from our data then parameterize and correctly label each image
# 
import os
import pickle

import mediapipe as mp
import cv2

mp_hands = mp.solutions.hands # uses mediapipe's hand detection to track hand 'landmarks'
mp_drawing = mp.solutions.drawing_utils
mp_drawing_styles = mp.solutions.drawing_styles

# static_image_mode = True sets model to treat each frame as a separate individual image
# maybe play around with this to see if we set it to false (i.e. continuous), we can accurately represent
# the ASL letter Z
# min_detection_confidence is how confident the model must be in order to consider something valid
hands = mp_hands.Hands(static_image_mode=True, min_detection_confidence=0.5)

DATA_DIR = './data'

# Make the arrays for data and labels
data = []
labels = []

for dir_ in os.listdir(DATA_DIR):
    for img_path in os.listdir(os.path.join(DATA_DIR, dir_)):
        # this stores entries of x and y coords for each landmark of each image
        data_aux = []

        # we only need to track x and y coordinates of the landmarks for our inferences
        x_ = []
        y_ = []

        # define variable img as an image from one of our collected data sets
        img = cv2.imread(os.path.join(DATA_DIR, dir_, img_path))
        # convert img to rgb so that we can import the img to mediapipe
        img_rgb = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)

        #
        results = hands.process(img_rgb)
        if results.multi_hand_landmarks:
            for hand_landmarks in results.multi_hand_landmarks:
                for i in range(len(hand_landmarks.landmark)):
                    x = hand_landmarks.landmark[i].x
                    y = hand_landmarks.landmark[i].y

                    x_.append(x)
                    y_.append(y)
                for i in range(len(hand_landmarks.landmark)):
                    x = hand_landmarks.landmark[i].x
                    y = hand_landmarks.landmark[i].y
                    data_aux.append(x - min(x_))
                    data_aux.append(y - min(y_))

            if (len(data_aux) == 42):
                data.append(data_aux)
                labels.append(dir_)

# Open pickle file which basically just holds arrays of data for ML models
f = open('data.pickle', 'wb')
# put data and labels into pickle file
pickle.dump({'data': data, 'labels': labels}, f)
# close file
f.close()
