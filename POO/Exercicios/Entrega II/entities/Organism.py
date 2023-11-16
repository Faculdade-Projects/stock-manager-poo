from System import System

class Organism:
    def __init__(self, name, age):
        self.name = name
        self.age = age
        # Associação: Um organismo contém sistemas(respiratorio, cardiovascular,etc.), mas um sistema pode existir sem um organimo
        self.systems = {} # nomeDoSistema<chave>: instância de uma classe<valor>
        
    def add_system(self, name_system, system: System):
        self.systems[name_system] = system
    
    def __str__(self):
        stringfySystem = ""
        for key, value in self.systems.items():
                stringfySystem += f"\t{key}: {value}"
        
        return ( f"Nome: {self.name}\nIdade: {self.age}\nDetalhes:\n{stringfySystem}")