import os, io
from google.cloud import vision
from google.cloud.vision_v1 import types
import pandas as pd

import  base64

from PIL import Image

data = " "

mesto= " "

im = Image.open(io.BytesIO(base64.b64decode(data.split(',')[1])))
im2= Image.open(io.BytesIO(base64.b64decode(mesto.split(',')[1])))

im.save("image.png")
im2.save("image2.png")

os.environ['GOOGLE_APPLICATION_CREDENTIALS'] = r"key.json"

client = vision.ImageAnnotatorClient()

file_name = 'image.png'
fv='image2.png'

with io.open(file_name , 'rb') as image_file:
    content = image_file.read()
# construct an iamge instance
image = vision.Image(content=content)
#annotate Image Response
response = client.text_detection(image=image)  # returns TextAnnotation
df = pd.DataFrame(columns=['locale', 'description'])
texts = response.text_annotations
for text in texts:
    df = df.append(dict(locale=text.locale, description=text.description), ignore_index=True)
#print(df['description'][0])

#место жительства
with io.open(fv , 'rb') as image_file2:
    content = image_file2.read()
# construct an iamge instance
image = vision.Image(content=content)
#annotate Image Response
response2 = client.text_detection(image=image)  # returns TextAnnotation
df2 = pd.DataFrame(columns=['locale', 'description'])
texts2 = response2.text_annotations
for text in texts2:
    df2 = df2.append(dict(locale=text.locale, description=text.description), ignore_index=True)
#(df2['description'][0])


def deb(x,y):
    str=''
    while x!=y:
        str+=df['description'][x]+" "
        x=x+1
    return str
def deb2(x,y):
    str=''
    while x!=y:
        str+=df2['description'][x]+" "
        x=x+1
    return str
one =deb2(8,10)+", "+deb2(11,13)+", "+deb2(14,16)+", "+deb2(16,18)
import json

data ={
    "bord":
        {
            1: df['description'][27],
            2: df['description'][28],
            3: df['description'][29],
            4: df['description'][35],
            5: df['description'][33],
            6: deb(36, 38),
            7: deb(43, 46),
            8: deb(6, 17),
            9: df['description'][17],
            10: df['description'][18],
            11: one




        }
}

with open("your_file.json", "w") as write_file:
    json.dump(data, write_file)


dz = pd.read_json('your_file.json')
print(dz)