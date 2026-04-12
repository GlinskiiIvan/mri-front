import type { Status } from "../../common/enums";

export type PredictionRun = {
    id: number;
    studyId: number;
    createdById: number;
    model: string;
    version: string;
    status: Status;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
}