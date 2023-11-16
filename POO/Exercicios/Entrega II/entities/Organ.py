from Tissue import Tissue

class Organ:
    def __init__(self, tissue: Tissue, qnty_tissues: int = 4):
        # Agregação: O todo(Orgão), Parte(Tecido).
        self.tissues = [tissue for _ in range(qnty_tissues)] # O orgão por padrão tem 4 tecidos
        
    def show_details(self):
        return f"Tecidos: {len(self.tissues)} | {self.tissues[1].show_details()}"
        
class Heart(Organ):
    def __init__(self, tissue: Tissue, beats_per_minute):
        super().__init__(tissue, 3)
        self.bpm = beats_per_minute
        
    
    def pump_blood():
        print("O coração está bobeado sangue. Estado: Normal")
    
    def change_heart_rate(self, beat_per_minute):
        self.bpm = beat_per_minute
        print(f"Frequência Cardiaca alterada. Frequência: {self.bpm} bpm")
        
    def __str__(self):
        return f"Coração - Frequência Cardiaca: {self.bpm} bmp | {self.show_details()}"
        
class BloodVessels: #vasos sanguinios
    def __init__(self, type):
        # em milimetros
        self.type = type
    def __str__(self):
        return f"Vaso Sanguinio: {self.type}"
    
    