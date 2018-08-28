import h5py

import sys

from keras.models import load_model
import numpy as np
from sklearn.preprocessing import StandardScaler
sc = StandardScaler()
model = load_model('/home/sonu/webdevelopment/integrating_ML/ML/model.h5')

a = 0.0
Geograpy = sys.argv[1]
Credit_Score = sys.argv[2]
Gender = sys.argv[3]
Age = sys.argv[4]
Tenure = sys.argv[5]
Balance = sys.argv[6]
Products = sys.argv[7]
CreditCard =  sys.argv[8]
Member =  sys.argv[9]
Salary =  sys.argv[10]


x = [a, Geograpy, Credit_Score, Gender, Age, Tenure, Balance, Products, CreditCard, Member, Salary]
new_prediction = model.predict((np.array([x])))
#new_prediction = classifier.predict(sc.transform(np.array([[0.0, 0, 600, 1, 40, 3, 60000, 2, 1, 1, 50000]])))
new_prediction = (new_prediction > 0.5)

# print(new_prediction)

z = np.array2string(new_prediction)
print(z)

sys.stdout.flush()
