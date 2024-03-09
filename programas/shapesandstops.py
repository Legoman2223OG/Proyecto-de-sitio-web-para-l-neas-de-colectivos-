import json
import csv
jsdic = []
"""{"id_agencia": 0,"linea_nombre": "", "shapes": [],"paradas": []}"""
with open('C:/Users/massa/Downloads/Feed-gtfs/Txt/json/agency.json','r',encoding="utf-8") as f:
        datagency = json.load(f)
with open('C:/Users/massa/Downloads/Feed-gtfs/Txt/json/routes.json','r',encoding="utf-8") as f:
        dataroutes = json.load(f)
with open('C:/Users/massa/Downloads/Feed-gtfs/Txt/json/trips.json','r',encoding="utf-8") as f:
        datatrips = json.load(f)
with open('C:/Users/massa/Downloads/Feed-gtfs/Txt/json/shapes.json','r',encoding="utf-8") as f:
        datashapes = json.load(f)
with open('C:/Users/massa/Downloads/Feed-gtfs/Txt/json/stops.json','r',encoding="utf-8") as f:
        datastops = json.load(f)
with open('C:/Users/massa/Downloads/Feed-gtfs/Txt/listajson.json','r',encoding="utf-8") as f:
        datatripsjson = json.load(f)
dictionary = dict()
templist = []
dictionaryshapes = dict()
templiststops = []
dictionarystops = dict()
for agency in datagency:
        dictionary = {}
        agencyid= agency['agency_id']
        routeshortname= ""
        routeid= ""
        tripid= ""
        shapeid= ""
        stopid= ""
        stopname= ""
        templist = []
        templiststops = []
        dictionaryshapes = {}
        dictionarystops = {}
        dictionary['id_agencia'] = agency['agency_id']
        for routes in dataroutes:
                if routes['agency_id'] == agencyid:
                        routeshortname= routes['route_short_name']
                        routeid= routes['route_id']
                        dictionary['linea_nombre']= routes['route_short_name']
                        for trips in datatrips:
                                if trips['route_id'] == routeid:
                                        tripid = trips['trip_id']
                                        shapeid = trips['shape_id']
                                        for shapes in datashapes:
                                                if shapes['shape_id'] == shapeid:
                                                        dictionaryshapes['shape_pt_lat'] = shapes['shape_pt_lat']
                                                        dictionaryshapes['shape_pt_lon'] = shapes['shape_pt_lon']
                                                        templist.append(dictionaryshapes)
                                                        dictionary['shapes'] = templist
        for datatrips in datatripsjson:
                if datatrips['trip_id'] == tripid:
                        with open(datatrips['csv_path'],'r',encoding="utf-8") as f:
                                stoptimes = csv.DictReader(f)
                                for row in stoptimes:
                                        if row['trip_id'] == tripid:
                                                stopid = row['stop_id']
                                                for stops in datastops:
                                                        if stops['stop_id'] == stopid:
                                                                dictionarystops['stop_lat'] = stops['stop_lat']
                                                                dictionarystops['stop_lon'] = stops['stop_lon']
                                                                dictionarystops['stop_name'] = stops['stop_name']
                                                                templiststops.append(dictionarystops)
                                                                dictionary['paradas'] = templiststops
        jsdic.append(dictionary)
        
listpasarajson = json.dumps(jsdic, ensure_ascii=False,indent=2)
with open('C:/Users/massa/Downloads/Feed-gtfs/Txt/shapesyparadas.json','w',encoding="utf-8") as f:
        f.write(listpasarajson)
