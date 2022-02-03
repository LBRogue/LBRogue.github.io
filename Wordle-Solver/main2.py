import json
import string

data = json.load(open("dictionary.json"))

data4 = []
for x in data:
    if len(x)==5:
        data4.append(x)
data3 = []
data2 = []
for x1 in data4:
    tmp4=True;
    for ltr in x1:
        if x1.count(ltr) >1:
            tmp4=False;
    if tmp4:
        data2.append(x1)
for x1 in data2:
    tmp2 = []
    for x2 in data2:
        if x2[0] in x1 or x2[1] in x1 or x2[2] in x1 or x2[3] in x1 or x2[4] in x1:
            continue;
        for x3 in data2:
            if x3[0] in x1 or x3[1] in x1 or x3[2] in x1 or x3[3] in x1 or x3[4] in x1 or x3[0] in x2 or x3[1] in x2 or x3[2] in x2 or x3[3] in x2 or x3[4] in x2:
                continue;
            for x4 in data2:
                if x4[0] in x1 or x4[1] in x1 or x4[2] in x1 or x4[3] in x1 or x4[4] in x1 or x4[0] in x2 or x4[1] in x2 or x4[2] in x2 or x4[3] in x2 or x4[4] in x2 or x4[0] in x3 or x4[1] in x3 or x4[2] in x3 or x4[3] in x3 or x4[4] in x3:
                    continue;
                for x5 in data2:
                    if x5[0] in x1 or x5[1] in x1 or x5[2] in x1 or x5[3] in x1 or x5[4] in x1 or x5[0] in x2 or x5[1] in x2 or x5[2] in x2 or x5[3] in x2 or x5[4] in x2 or x5[0] in x3 or x5[1] in x3 or x5[2] in x3 or x5[3] in x3 or x5[4] in x3 or x5[0] in x4 or x5[1] in x4 or x5[2] in x4 or x5[3] in x4 or x5[4] in x4:
                        continue;
                    tmp3 = []
                    tmp3.append(x1)
                    tmp3.append(x2)
                    tmp3.append(x3)
                    tmp3.append(x4)
                    tmp3.append(x5)
                    print(tmp3)
                    data3.append(tmp3)
            
print(data3)
