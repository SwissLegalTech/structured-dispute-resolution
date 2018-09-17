import { Factsheet } from "./factsheet";

export interface Lawelement {
    claimant: Factsheet;
    disputed: boolean;
    defendant: Factsheet;
}
