import json
import string

data = json.load(open("dictionary.json"))

data2 = []
for x in data:
    if len(x)==5:
        data2.append(x)
data3 = []

for x1 in data2:
    for x2 in data2:
        for x3 in data2:
            for x4 in data2:
                for x5 in data2:
                    tmp1 = True;
                    for ltr in x1:
                        if ltr in x2:
                            tmp1=False;
                        if ltr in x3:
                            tmp1=False;
                        if ltr in x4:
                            tmp1=False;
                        if ltr in x5:
                            tmp1=False;
                    for ltr in x2:
                        if ltr in x1:
                            tmp1=False;
                        if ltr in x3:
                            tmp1=False;
                        if ltr in x4:
                            tmp1=False;
                        if ltr in x5:
                            tmp1=False;
                    for ltr in x3:
                        if ltr in x2:
                            tmp1=False;
                        if ltr in x1:
                            tmp1=False;
                        if ltr in x4:
                            tmp1=False;
                        if ltr in x5:
                            tmp1=False;
                    for ltr in x4:
                        if ltr in x2:
                            tmp1=False;
                        if ltr in x3:
                            tmp1=False;
                        if ltr in x1:
                            tmp1=False;
                        if ltr in x5:
                            tmp1=False;
                    for ltr in x5:
                        if ltr in x2:
                            tmp1=False;
                        if ltr in x3:
                            tmp1=False;
                        if ltr in x4:
                            tmp1=False;
                        if ltr in x1:
                            tmp1=False;
                    if tmp1 == True:
                        tmp3 = []
                        tmp3.append(x1)
                        tmp3.append(x2)
                        tmp3.append(x3)
                        tmp3.append(x4)
                        tmp3.append(x5)
                        print(tmp3)
                        data3.append(tmp3)         
print(data3)
