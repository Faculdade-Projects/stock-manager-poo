from App import App 

pessoa = App.create_organism("João Carlos", 28)

# Criando Células
cell = App.create_cell("Cilidromo Longo")

# Criando Tecido Muscular 
cardiacStriated = App.create_muscleTissue(cell, 1234456) 

# Criando Orgãos
heart = App.create_heart(cardiacStriated, 107)
arterie = App.create_bloodVessels("Artérias")
vein = App.create_bloodVessels("Veia")
capillares = App.create_bloodVessels("Capilares")

# Criando Sistema Cardiovascular
cardiovascularSystem = App.create_cardiovascularSystem([heart, arterie, vein, capillares])



pessoa.add_system("Sistema CardioVascular", cardiovascularSystem)

print(f"{pessoa}")