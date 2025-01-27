from PyPDF2 import PdfReader

# Carga el archivo PDF
reader = PdfReader("coosercun.pdf")

# Extrae texto de cada página
for page in reader.pages:
    print(page.extract_text())

# Carga el archivo PDF
reader = PdfReader("coosercun.pdf")

# Extrae texto de cada página
for page in reader.pages:
    print(page.extract_text())
