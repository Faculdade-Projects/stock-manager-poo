from Cell import Cell

# Tecidos
class Tissue: 
    def __init__(self, type, cell: Cell, qnty_cells: int = 1000):
        self.type = type
        # Agregação: O todo(Tecido), Parte(céluas).
        self.cells = [cell for _ in range(qnty_cells)] # um tecido tem milhares ou milhões de células
        
    def show_details(self):
        return f"""
                \t\tTipo de Tecido: {self.type} - Qnt. Células/tecido: {len(self.cells)}
                        \t\tcélula: {self.cells[1].show_details()}"""

class MuscleTissue(Tissue):
    def __init__(self, cell: Cell,qnty_cells):
        super().__init__("Muscular", cell, qnty_cells) # Definindo o Tipo de tecido para "Muscular"
        self.contracted = False
        self.temperature = 37 # temperatura em celcius
    
    def twitch(self):
        self.contracted = True
        self.temperature += 0.1 # contração do musculo gera calor
        print(f"O tecido muscular está contraido. Temperatura atual do tecido {self.temperature}")
        
    def relax(self):
        self.contracted = False
        print("O tecido muscular está relaxado")
    
    def __str__(self):
        return f"Contraido: {self.contracted}\nTemperatura: {self.temperature} |{self.show_details()}\n"