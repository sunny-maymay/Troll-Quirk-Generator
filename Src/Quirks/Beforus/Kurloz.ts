import { Quirk } from "../Quirk";
import { CAT_BEF } from "../../Category";

export class Kurloz extends Quirk {
    constructor() {
        super("Kurloz", "Makara", CAT_BEF, "gamzee");
    }

    quirkify(): void {
        this.upperCase();
    }
}