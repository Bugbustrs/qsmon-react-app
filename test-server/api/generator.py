import random
import json
import string


def generate_ping_data():
    data={}


    values =[]


    for i in range(100):
    
        values.append({
            'target_ip':'192.34.112.12',
            'ping_method':'whatever',
           'mean_rtt_ms':random.random()*100,
        'min_rtt_ms':random.random()*100,
        'max_rtt_ms':random.random()*100,
        'stddev_rtt_ms':random.random()*100

        })
    with open('data1.json', 'w') as outfile:
        json.dump(values,outfile,indent=4)
        print(data)

def generate_tcp_data():
    data={}


    values =[]


    for i in range(50):
        values.append({
            "tcp_speed_results":[x for x in range(50)],
            "data_limit_exceeded":False,
            "duration":round(random.random()*100,2),
            "server_version":"1.0.2",           
            
            })


    with open('tcp.json','w') as outfile:
        json.dump(values,outfile,indent =2)

def generate_dns_data():
    data ={}
    values =[]

    for i in range(50):
        values.append({
            "address":"www.example.com",
            "real_hostname":"192.23.142.12",
            "time_ms":round(random.random()*100,2)
            })

    with open('dns.json','w') as outfile:
        json.dump(values,outfile,indent=4)

def generate_http_data():
    values =[]
    data = {}

    for i in range(50):
        values.append({
            "time_ms":round(random.random()*100,2),
            "code":200
            
            })

    with open('http.json','w') as outfile:
        json.dump(values,outfile,indent =4)


generate_http_data()
#generate_dns_data()
