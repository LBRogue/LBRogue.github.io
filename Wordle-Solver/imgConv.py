   
  
# Imports PIL module 
from PIL import Image
  
# open method used to open different extension image file
img = Image.open(r"C:\Users\USER\Documents\GitHub\LBRogue.github.io\Wordle-Solver\v.png") 
width,height = img.size
t1 = 115
t2 = 160
rList=[]
yList=[]
gList=[]
mainList=[]
mainList2=[]
mainStr=""
for xc in range(height):
    list1=[]
    for yc in range(width):
        [r,g,b]=img.getpixel((yc,xc))
        ave = .3*r+.59*g+.11*b
        if ave <= t1:
            ave = 0
            color = 'r'
            ##rList.append(width*xc+yc)
        elif ave <= t2:
            ave = 127
            color = 'g'
            ##gList.append(width*xc+yc)
        else:
            ave = 255;
            color = 'y'
            ##yList.append(width*xc+yc)
        if ave == 0:
            r,g,b=58,58,60
        elif ave ==127:
            r,g,b=83,141,78
        else:
            r,g,b=181,159,59
        value=(r,g,b)
        img.putpixel((yc,xc),value)
        mainList2.append(color)
        mainStr+=color
        #list1.append(color)
    #mainList.append(list1)
#print(mainList)
print(mainStr)
img.show()
