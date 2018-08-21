#!/usr/bin/env python2
# -*- coding: utf-8 -*-
"""
Created on Mon Aug 20 22:32:39 2018

@author: sonu
"""

from ann_single import *

import sys

# Predicting a single new observation
"""Predict if the customer with the following informations will leave the bank:
Geography: France
Credit Score: 600
Gender: Male
Age: 40
Tenure: 3
Balance: 60000
Number of Products: 2
Has Credit Card: Yes
Is Active Member: Yes
Estimated Salary: 50000"""
a = 0.0
Geograpy = 1 #int(sys.argv[1])
Credit_Score = 600 #int(sys.argv[2])
Gender = 1 #int(sys.argv[3])
Age = 21 #int(sys.argv[4])
Tenure = 3 #int(sys.argv[5])
Balance = 20000 #int(sys.argv[6])
Products = 2 #int(sys.argv[7])
CreditCard = 1 #int(sys.argv[8])
Member = 1 #int(sys.argv[9])
Salary = 50000 #int(sys.argv[10])


x = [a, Geograpy, Credit_Score, Gender, Age, Tenure, Balance, Products, CreditCard, Member, Salary]
new_prediction = classifier.predict(sc.transform(np.array([x])))
#new_prediction = classifier.predict(sc.transform(np.array([[0.0, 0, 600, 1, 40, 3, 60000, 2, 1, 1, 50000]])))
new_prediction = (new_prediction > 0.5)

print(''.join(new_prediction))

sys.stdout.flush()