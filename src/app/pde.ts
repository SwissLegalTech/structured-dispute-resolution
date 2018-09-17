import { Proof } from "./proof";

export interface Pde {
    facts: string;
    legal: string;
    proofs: Proof[];
}
