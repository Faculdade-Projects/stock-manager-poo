class System:
    def __init__(self, organs: list):
        # Associação: Um sistema tem muitos orgão, mas um orgão pode exister sem um sistema
        self.organs = organs
    
    def add_organ(self, organ):
        self.organs.append(organ)
    
    def show_details(self):
        strinfyOrgans = ""
        for organ in self.organs:
            strinfyOrgans += f"\n\t\t\t{organ}"
        return f"\n\t\tOrgãos: {strinfyOrgans}\n"
        
class CardiovascularSystem(System):
    def __init_(self, organs: list):
        super.__init__()
        
        for organ in organs:
            self.add_organ(organ)
            
    def __str__(self):
        return self.show_details()