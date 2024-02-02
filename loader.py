from llama_index import VectorStoreIndex, SimpleDirectoryReader, ServiceContext
from llama_index.llms import HuggingFaceLLM
def load_documents(file_path):
    return SimpleDirectoryReader(input_files=[file_path]).load_data()
