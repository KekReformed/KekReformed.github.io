import { client } from "..";
import { longClick, p } from "../sketch";
import { Sprite } from "../Sprite";
import { worldToScreen } from "../Util";
import Unit, { AnyUnit, UnitData } from "./Unit";

class TransportShip extends Unit {
    containedUnit: AnyUnit

    constructor(unitData: UnitData) {
        super(unitData)
        this.type = "transport ship"
        this.terrainType = "land"
        this.speed = 1.1
    }

    update() {
        super.update()

        console.log(longClick(p.RIGHT))
        if (this.containedUnit && longClick(p.RIGHT)) {
            this.disembark(p.mouseX, p.mouseY)
        }
    }

    updateLabels() {
        super.updateLabels()

        if (this.containedUnit) {
            let pos = worldToScreen(this.sprite.position.x, this.sprite.position.y)
            p.text(`${this.containedUnit.strength} ${this.containedUnit.type.charAt(0).toUpperCase() + this.containedUnit.type.slice(1)}`, pos.x, pos.y - 2)
        }
    }

    embark(unit: AnyUnit) {
        this.containedUnit = unit
        unit.kill = true
    }

    disembark(PosX: number, PosY: number) {
        this.containedUnit.kill = false
        this.containedUnit.sprite = new Sprite(PosX, PosY, 50, 50, this.containedUnit)
        this.containedUnit.kill = false
        this.containedUnit.strength = Math.round(this.containedUnit.strength)
        client.globalUnits.push(this.containedUnit)
        this.containedUnit = null
    }
}

export default TransportShip