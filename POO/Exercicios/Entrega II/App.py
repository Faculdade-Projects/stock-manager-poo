from entities.Cell import Cell
from entities.Tissue import Tissue, MuscleTissue
from entities.Organ import Organ, BloodVessels, Heart
from entities.System import CardiovascularSystem
from entities.Organism import Organism

class App:
  
    def create_cell(name_format):
        return Cell(name_format)
    
    def create_tissue(type, qnty):    
        return Tissue(type, qnty)
    
    def create_muscleTissue(cell, qnty_cells = 1000):
        return MuscleTissue(cell, qnty_cells)
    
    def create_organ(qnty_tissues):
        return Organ(qnty_tissues)
    
    def create_bloodVessels( type):
        return BloodVessels(type)
    
    def create_heart( tissue, beats_per_minute):
        return Heart(tissue, beats_per_minute)
    
    def create_cardiovascularSystem(organs:list):
        return CardiovascularSystem(organs)
    
    def create_organism(name, age):
        return Organism(name, age)