import { Pde } from "./pde";
import { Judgecomment } from "./judgecomment";

export interface Subpoint {
    plaintiff: Pde;
    defendant: Pde;
    judge: Judgecomment;
}
