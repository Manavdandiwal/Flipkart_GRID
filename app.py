from flask import Flask,request
from flask_cors import CORS
from flask import jsonify, json
import openai
import requests
import os

# global gender, age, color

app = Flask(__name__)
CORS(app)

# Load the OpenAI API key from an environment variable
keyy = "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"
openai.api_key = keyy

url = "https://api.openai.com/v1/chat/completions"

@app.route('/api/related', methods=['GET'])
def get_related():
    value = request.args.get('query')
    que2nd = "write brief para about 70 words about the fashion sense of the text string, string:- "
    que2nd += value

    completion = openai.ChatCompletion.create(
    model="gpt-3.5-turbo",
    messages=[
    {"role": "system", "content": "You are a helpful assistant."},
    {"role": "user", "content": que2nd}
    ])

    response = completion.choices[0].message['content']
    print(response)
    return jsonify(response)


@app.route('/api/keywords', methods=['GET'])
def get_keywords():
    response = {
        "keywords": [],
        "relatedText": ""
    }
    
    value = request.args.get('query')
    que = "array : [shirt, pant, modern, new, classic , t-shirt , red, white , cargo , sunglasses , black , dress , uv400 , leather]. From the above array, find me the keywords that are present in the below string. There may be a possibility of errors also, so give me the possible keywords also. The answer should be just an json object that contains array of the keywords, no other text should be returned. The string is :"
    que += value
    
    completion = openai.ChatCompletion.create(
    model="gpt-3.5-turbo",
    messages=[
    {"role": "system", "content": "You are a helpful assistant."},
    {"role": "user", "content": que}
    ])

    response = completion.choices[0].message['content']
    print(response)
    return jsonify(response)

@app.route('/api/items', methods=['GET'])
def get_items():
    response = {}
    with open('data.json', 'r') as json_file:
        response = json.load(json_file)

    return jsonify(response)

@app.route('/api/photos', methods=['GET'])
def get_photos():
    gendata = {
        'data':[]
    }
    value = request.args.get('query')
    print("Hi")
    
    que = "find out what is the gender, age and skin color from the string which ill be providing you, if you can't conclude return them as empty just return the json object which contains gender, age and skin_color,nothing else should be there in output, The string: - "
    que+=value

    completion = openai.ChatCompletion.create(
    model="gpt-3.5-turbo",
    messages=[
    {"role": "system", "content": "You are a helpful assistant."},
    {"role": "user", "content": que}
    ])

    response = completion.choices[0].message['content']
    response = json.loads(response)
    # print(response.headers.get('content-type'))
    # print("gender,age,color -> ",response)

    # if len(response['gender']) > 0:
    #     gender = response['gender']
    # if len(response['age']) > 0:
    #     age = response['age']
    # if len(response['skin_color']) > 0:
    #     color = response['skin_color']

    # ans = ""
    # if len(gender) > 0:
    #     ans+= gender
    # if len(age) > 0:
    #     ans+= "age "+age
    # if len(color) > 0:
    #     ans+= "skin color: "+color
    
    # ans+=value

    # print("value->> ",ans)
    res = openai.Image.create(
            prompt=value,
            n=4,
            size="1024x1024"
        )
    
    # print(res['data'])
    gendata['data'] = res['data']
    return gendata

@app.route('/')
def index():
    headers = {
    "Content-Type": "application/json",
    "Authorization": f"Bearer {keyy}"
    }

if __name__ == '__main__':
    app.run(debug=True)


# openai.Model.list()