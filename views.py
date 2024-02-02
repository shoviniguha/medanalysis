import pymongo

client = pymongo.MongoClient("mongodb+srv://anirbanGG:anirbang1607@report-analyzer.5ee1wj2.mongodb.net/report-analyzer?retryWrites=true&w=majority")

db = client["report-analyzer"]

col = db["PdfDetails"]

def get_pdf():
    x = col.find()
    for record in x:
        docs=record
    return docs['pdf']
