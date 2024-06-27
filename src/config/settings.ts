export const defaultSettings: CCSettings = {
    timestampFormat: "YY-MM-DD HH:mm:ss",
    userTimestampFormat: "YYYY-MM-DD HH:mm:ss",
    csvDelimiter: ",",
    fineGrainedDurations: true,
    reverseSegmentOrder: false,
    timestampDurations: false,
    insertToActive: true,
    fileName: "",
    createFile: false,
    writeToBottom: true,
    insertAfter: false,
    insertAfterLine: ""
};

export interface CCSettings {

    timestampFormat: string;
    userTimestampFormat: string;
    csvDelimiter: string;
    fineGrainedDurations: boolean;
    reverseSegmentOrder: boolean;
    timestampDurations: boolean;
    insertToActive: boolean;
    fileName: string;
    createFile: boolean;
    writeToBottom: boolean;
    insertAfter: boolean;
    insertAfterLine: string;

}