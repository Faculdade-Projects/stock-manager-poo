# Células
class Shape:
    def __init__(self, form):
        self.form = form
        
    def __str__(self):
        return f"{self.form}"
class Cell:
    def __init__(self, form): 
        # Partes principais de uma célula
        self.plasmatic_membrane = True
        self.cytoplasm = True
        self.core = True
        self.shape = Shape(form) # Composição: O todo( class Celula ) depende da parte( class Formato ) para existir. Uma célula sem um formato não exite.
    
    def show_details(self):
        return (f"""
                            \t\t    Membrana Plamatica: {self.plasmatic_membrane} | 
                            \t\t    Citoplasma: {self.cytoplasm<30} | 
                            \t\t    Núcleo: {self.core} | 
                            \t\t    Formato: {self.shape}""")