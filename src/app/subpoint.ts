import { Pde } from "./pde";
import { Judgecomment } from "./judgecomment";

export interface Subpoint {
    title: string;
    plaintiff: Pde;
    defendant: Pde;
    judge: Judgecomment;
}
