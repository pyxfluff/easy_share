// pyxfluff 2025

export type LinkReq = {
    linkDestination: String,
    expiryDate: Number
}

export type Database = {
    links: {
        [key: string]: {
            destination: String,
            saved: Number,
            expirationDate: Number,
            creator: String
        }
    },
    files: {},
    plainTexts: {}
}
