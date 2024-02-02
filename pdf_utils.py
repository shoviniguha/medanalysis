import PyPDF2

def extract_text_from_pdf(pdf_file):
    # Assuming the PDF contains text, extract and return it
    with pdf_file.open(mode='rb') as file:
        pdf_reader = PyPDF2.PdfFileReader(file)
        text = ""
        for page_num in range(pdf_reader.numPages):
            text += pdf_reader.getPage(page_num).extractText()
    return text