# Collect data for training model
import os
import cv2

# Make a directory for our data
DATA_DIR = './data'
if not os.path.exists(DATA_DIR):
    os.makedirs(DATA_DIR)

# Make list of letters for ASL alphabet
# only 25 for right now since letter Z is a letter that requires motion to convey
# it is hard to accurately represent Z from a static image
letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y']

dataset_size = 200



cap = cv2.VideoCapture(0)

for cur_letter in letters:
    if not os.path.exists(os.path.join(DATA_DIR, cur_letter)):
        os.makedirs(os.path.join(DATA_DIR, cur_letter))
    
    print('Collecting data for letter', cur_letter)

    done = False
    while True:
        ret, frame = cap.read()
        
        cv2.putText(frame, f"Press R to start collecting data for letter {cur_letter}!)", (100, 50), cv2.FONT_HERSHEY_SIMPLEX, 1.3, (0, 255, 0), 3,
                    cv2.LINE_AA)
        cv2.imshow('frame', frame)
        if cv2.waitKey(25) == ord('R'):
            break

    counter = 0
    while counter < dataset_size:
        ret, frame = cap.read()
        cv2.imshow('frame', frame)
        cv2.waitKey(15)
        cv2.imwrite(os.path.join(DATA_DIR, cur_letter, '{}.jpg'.format(counter)), frame)

        counter += 1

cap.release()
cv2.destroyAllWindows()